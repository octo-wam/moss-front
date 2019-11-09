import axios from "axios";

import { VoteService, createVoteService } from "./Vote";
import { fixtures } from "../../test-utils";

jest.mock("axios");

let service: VoteService;

beforeEach(() => {
  service = createVoteService(axios);
});

describe("fetchVotesByQuestionId", () => {
  it("Calls GET /questions/42/votes", async () => {
    // Given
    const questionId = "42";
    const votes = fixtures.someVotes();
    (axios.get as jest.Mock).mockResolvedValue({ data: votes });

    // When
    const results = await service.fetchVotesByQuestionId(questionId);

    // Then
    expect(results).toEqual(votes);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("/questions/42/votes");
  });
});

describe("createVoteByQuestionId", () => {
  it("Calls POST /questions/42/votes", async () => {
    // Given
    const questionId = "42";
    const answerId = "666";
    (axios.post as jest.Mock).mockResolvedValue({ data: {} });

    // When
    await service.createVoteByQuestionId(questionId, answerId);

    // Then
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith("/questions/42/votes", {
      answerId
    });
  });
});
