import axios from "axios";

import { Me } from "../models";
import { MeService, createMeService } from "./Me";

jest.mock("axios");

let service: MeService;

beforeEach(() => {
  service = createMeService(axios);
});

describe("fetchMe", () => {
  it("Calls GET /me", async () => {
    // Given
    const me: Me = {
      email: "sarah.walker@octo.com",
      id: "user-1",
      name: "Sarah walker"
    };

    (axios.get as jest.Mock).mockResolvedValue({ data: me });

    // When
    const result = await service.fetchMe();

    // Then
    expect(result).toEqual(me);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("/me");
  });
});
