import "reset.css/reset.css";
import "./css/index.scss";
import "./index.css";
import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { createMeService } from "./services/Me";
import { createQuestionService } from "./services/Question";
import { createVoteService } from "./services/Vote";
import { servicesContext } from "./components/ServicesProvider";
import {
  getOauthTokenOrRedirect,
  clearOauthToken,
  redirectToLoginPage
} from "./utils/token";

const authToken = getOauthTokenOrRedirect();
const apiUrl = process.env.REACT_APP_API_URL!;

const httpClient = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${authToken}`
  }
});

httpClient.interceptors.response.use(response => {
  if (response.status === 401) {
    clearOauthToken();
    redirectToLoginPage();
  }

  return response;
});

const meService = createMeService(httpClient);
const questionService = createQuestionService(httpClient);
const voteService = createVoteService(httpClient);

ReactDOM.render(
  <servicesContext.Provider
    value={{ me: meService, question: questionService, vote: voteService }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </servicesContext.Provider>,
  document.getElementById("root")
);
