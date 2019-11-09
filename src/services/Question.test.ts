import axios from "axios";
import { fixtures } from "../../test-utils";

import { QuestionService, createQuestionService } from "./Question";

jest.mock("axios");

let service: QuestionService;

beforeEach(() => {
  service = createQuestionService(axios);
});

describe("fetchQuestions", () => {
  it("Calls GET /questions", async () => {
    // Given
    const questions = fixtures.someQuestions();
    (axios.get as jest.Mock).mockResolvedValue({ data: questions });

    // When
    const result = await service.fetchQuestions();

    // Then
    expect(result).toEqual(questions);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("/questions");
  });
});

// FIXME: when the API /question/:id it working
describe.skip("fetchQuestions", () => {
  it("Calls GET /questions/42", async () => {
    // Given
    const questionId = "42";
    const question = fixtures.aQuestion(questionId);
    (axios.get as jest.Mock).mockResolvedValue({ data: question });

    // When
    const result = await service.fetchQuestion(questionId);

    // Then
    expect(result).toEqual(question);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("/questions/42");
  });
});
