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
import { servicesContext } from "./components/ServicesProvider";

const authToken = window.localStorage.getItem("auth:token");
const apiUrl = process.env.REACT_APP_API_URL!;

// TODO: redirect if !authToken

const httpClient = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${authToken}`
  }
});

const meService = createMeService(httpClient);
const questionService = createQuestionService(httpClient);

ReactDOM.render(
  <servicesContext.Provider
    value={{ me: meService, question: questionService }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </servicesContext.Provider>,
  document.getElementById("root")
);
