import React, { useEffect, useState } from "react";
import { Question, Answer, Vote } from "../../models";
import { useServices } from "../ServicesProvider";
import moment from "moment";

export interface QuestionDetailProps {
  id: string;
}

export const QuestionDetail: React.FC<QuestionDetailProps> = ({ id }) => {
  const services = useServices();
  const [showResults, setShowResults] = useState(false);
  const [isVoted, setVoted] = useState(false);
  const [currentAnswerId, setCurrentAnswerId] = useState<Answer | null>(null);
  const [votes, setVotes] = useState<Vote[]>([]);
  const [isFormDisabled, setFormDisabled] = useState(false);
  const [question, setQuestion] = useState<Question | null>(null);

  useEffect(() => {
    Promise.all([
      services.question.fetchQuestion(id),
      services.vote.fetchVotesByQuestionId(id),
      services.me.fetchMe()
    ]).then(([question, votes, me]) => {
      const hasUserVoted = !!votes.find(vote => vote.user.id === me.id);

      setQuestion(question);
      setVotes(votes);
      setVoted(hasUserVoted);

      if (hasUserVoted) {
        setFormDisabled(true);
      }
    });
  }, [services.question, services.vote, services.me, id]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await services.vote.createVoteByQuestionid(id, currentAnswerId!.id);
    const votes = await services.vote.fetchVotesByQuestionId(id);

    setVotes(votes);
    setFormDisabled(true);
    setCurrentAnswerId(null);
    setVoted(true);
  }

  function getVoteCountForAnswer(answer: Answer) {
    return votes.filter(vote => vote.answerId === answer.id).length;
  }

  function handleShowResultsClick() {
    setShowResults(true);
  }

  if (question === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="question-detail">
      <form onSubmit={handleSubmit}>
        <header>
          <h1 className="title">{question.title}</h1>
          <p className="description">{question.description}</p>
          <p className="ending-date">
            Expires on {moment(question.endingDate).format("LLL")}
          </p>
        </header>

        <ul>
          {question.answers.map(answer => (
            <li key={answer.id}>
              <input
                checked={currentAnswerId === answer}
                onChange={() => setCurrentAnswerId(answer)}
                disabled={isFormDisabled}
                type="radio"
                name="answer"
                id={answer.id}
                value={answer.id}
              />
              <label htmlFor={answer.id}>
                {answer.title}{" "}
                {(isVoted || showResults) && (
                  <>({getVoteCountForAnswer(answer)})</>
                )}
              </label>
            </li>
          ))}
        </ul>

        <footer>
          <button disabled={!currentAnswerId} type="submit">
            Valider
          </button>
          <button type="button" onClick={handleShowResultsClick}>
            Voir les résultats
          </button>
        </footer>
      </form>
    </div>
  );
};
