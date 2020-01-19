import { Me, Answer, Question, Vote } from "../../models";

interface State {
  question: Question | null;
  currentAnswer: Answer | null;
  hasUserVoted: boolean;
  allVotes: Vote[];
}

interface InitAction {
  type: "INIT";
  question: Question;
  currentAnswer: Answer | null;
  allVotes: Vote[];
  hasUserVoted: boolean;
}

interface SetCurrentAction {
  type: "SET_CURRENT_ANSWER";
  answer: Answer;
}

interface VoteAction {
  type: "VOTE";
  me: Me;
}

type Action = InitAction | SetCurrentAction | VoteAction;

export const initialState: State = {
  question: null,
  currentAnswer: null,
  hasUserVoted: false,
  allVotes: []
};

export function questionDetailReducer(state: State, action: Action): State {
  switch (action.type) {
    case "INIT":
      return {
        question: action.question,
        currentAnswer: action.currentAnswer,
        hasUserVoted: action.hasUserVoted,
        allVotes: action.allVotes
      };

    case "SET_CURRENT_ANSWER":
      return {
        ...state,
        currentAnswer: action.answer
      };

    case "VOTE":
      return {
        ...state,
        hasUserVoted: true,
        allVotes: [
          ...state.allVotes,
          {
            answerId: state.currentAnswer!.id,
            user: {
              id: action.me.id
            }
          }
        ]
      };

    default:
      throw new Error("Invalid action");
  }
}
