import { fixtures } from "../../test-utils";

import { QuestionService, createQuestionService } from "./Question";

let service: QuestionService;
let httpClient: any;

beforeEach(() => {
  httpClient = {
    get: jest.fn(),
    post: jest.fn(),
    delete: jest.fn(),
    put: jest.fn()
  };
  service = createQuestionService(httpClient);
});

describe("fetchQuestions", () => {
  it("Calls GET /questions", async () => {
    // Given
    const questions = fixtures.someQuestions();
    httpClient.get.mockResolvedValue({ data: questions });

    // When
    const result = await service.fetchQuestions();

    // Then
    expect(result).toEqual(questions);
    expect(httpClient.get).toHaveBeenCalledTimes(1);
    expect(httpClient.get).toHaveBeenCalledWith("/questions");
  });
});

describe("fetchQuestions", () => {
  it("Calls GET /questions/42", async () => {
    // Given
    const questionId = "42";
    const question = fixtures.aQuestion(questionId);
    httpClient.get.mockResolvedValue({ data: question });

    // When
    const result = await service.fetchQuestion(questionId);

    // Then
    expect(result).toEqual(question);
    expect(httpClient.get).toHaveBeenCalledTimes(1);
    expect(httpClient.get).toHaveBeenCalledWith("/questions/42");
  });
});

describe("createQuestion", () => {
  it("Calls POST /questions", async () => {
    // Given
    const question = fixtures.aQuestion("22");
    httpClient.post.mockResolvedValue({ data: question });

    // When
    await service.createQuestion(question);

    // Then
    expect(httpClient.post).toHaveBeenCalledTimes(1);
    expect(httpClient.post).toHaveBeenCalledWith("/questions", question);
  });
});
