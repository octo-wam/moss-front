import { Me, Answer, Question, Vote } from "../../models";

interface State {
  question: Question | null;
  currentAnswer: Answer | null;
  hasUserVoted: boolean;
  areResultsShown: boolean;
  allVotes: Vote[];
}

interface InitAction {
  type: "INIT";
  question: Question;
  currentAnswer: Answer | null;
  allVotes: Vote[];
  hasUserVoted: boolean;
}

interface ShowResultsAction {
  type: "SHOW_RESULTS";
}

interface SetCurrentAction {
  type: "SET_CURRENT_ANSWER";
  answer: Answer;
}

interface VoteAction {
  type: "VOTE";
  me: Me;
}

type Action = InitAction | ShowResultsAction | SetCurrentAction | VoteAction;

export const initialState: State = {
  question: null,
  currentAnswer: null,
  hasUserVoted: false,
  areResultsShown: false,
  allVotes: []
};

export function questionDetailReducer(state: State, action: Action): State {
  switch (action.type) {
    case "INIT":
      return {
        question: action.question,
        currentAnswer: action.currentAnswer,
        hasUserVoted: action.hasUserVoted,
        areResultsShown: false,
        allVotes: action.allVotes
      };

    case "SET_CURRENT_ANSWER":
      return {
        ...state,
        currentAnswer: action.answer
      };

    case "SHOW_RESULTS":
      return {
        ...state,
        areResultsShown: true
      };

    case "VOTE":
      return {
        ...state,
        hasUserVoted: true,
        areResultsShown: true,
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
