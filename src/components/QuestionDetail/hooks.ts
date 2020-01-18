import { useReducer, useEffect } from "react";

import { Answer } from "../../models";
import { useService } from "../ServicesProvider/hooks";
import { useMe } from "../AuthProvider/hooks";
import { questionDetailReducer, initialState } from "./reducer";

export const useQuestionDetailState = (id: string) => {
  const [state, dispatch] = useReducer(questionDetailReducer, initialState);
  const questionService = useService("question");
  const voteService = useService("vote");
  const me = useMe();

  useEffect(() => {
    Promise.all([
      questionService.fetchQuestion(id),
      voteService.fetchVotesByQuestionId(id)
    ]).then(([question, votes]) => {
      const userVote = votes.find(({ user }) => user.id === me.id) || null;
      const currentAnswer = userVote
        ? question.answers.find(({ id }) => id === userVote.answerId)!
        : null;

      dispatch({
        type: "INIT",
        allVotes: votes,
        currentAnswer,
        hasUserVoted: !!userVote,
        question
      });
    });
  }, [id, me.id, questionService, voteService]);

  async function submitAnswer(e: React.FormEvent) {
    e.preventDefault();

    if (!state.currentAnswer) {
      return;
    }

    await voteService.createVoteByQuestionId(id, state.currentAnswer.id);

    dispatch({
      type: "VOTE",
      me
    });
  }

  function getVoteCountForAnswer(answer: Answer) {
    return state.allVotes.filter(vote => vote.answerId === answer.id).length;
  }

  function setCurrentAnswer(answer: Answer) {
    dispatch({ type: "SET_CURRENT_ANSWER", answer });
  }

  return {
    state,
    setCurrentAnswer,
    submitAnswer,
    getVoteCountForAnswer
  };
};
