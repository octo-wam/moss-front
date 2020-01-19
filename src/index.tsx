import "reset.css/reset.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { createMeService, createQuestionService } from "./services";
import { createVoteService } from "./services/Vote";
import { servicesContext } from "./components/ServicesProvider/context";
import { getOauthTokenOrRedirect } from "./utils/token";
import { createHttpClient } from "./http";
import * as serviceWorker from "./serviceWorker";
import { Theme } from "./ui/Theme/Theme";

const authToken = getOauthTokenOrRedirect();
const apiUrl = process.env.REACT_APP_API_URL!;

const httpClient = createHttpClient(apiUrl, authToken);

const meService = createMeService(httpClient);
const questionService = createQuestionService(httpClient);
const voteService = createVoteService(httpClient);

ReactDOM.render(
  <Theme>
    <servicesContext.Provider
      value={{ me: meService, question: questionService, vote: voteService }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </servicesContext.Provider>
  </Theme>,
  document.getElementById("root")
);

serviceWorker.register();
