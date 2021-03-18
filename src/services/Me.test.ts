import axios from "axios";

import { Me } from "../models";
import { MeApi } from "../api-models";
import { MeService, createMeService } from "./Me";

jest.mock("axios");

let service: MeService;

beforeEach(() => {
  service = createMeService(axios);
});

describe("fetchMe", () => {
  it("Calls GET /me", async () => {
    // Given
    const meApi: MeApi = {
      id: "user-1",
      name: "Sarah walker",
      email: "sarah.walker@octo.com",
      photo: null
    };
    (axios.get as jest.Mock).mockResolvedValue({ data: meApi });

    // When
    const result = await service.fetchMe();

    // Then
    const me: Me = {
      id: "user-1",
      name: "Sarah walker",
      email: "sarah.walker@octo.com",
      photo: "https://www.fillmurray.com/150/150"
    };
    expect(result).toEqual(me);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("/me");
  });
});
