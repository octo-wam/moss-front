import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { redirectToLoginPage } from "../../utils/token";
import { Me } from "../../models";
import { QuestionsList } from "../QuestionsList/QuestionsList";
import { QuestionDetail } from "../QuestionDetail/QuestionDetail";
import { CreateQuestionForm } from "../CreateQuestionForm/CreateQuestionForm";
import { useServices } from "../ServicesProvider/hooks";
import { meContext } from "./context";
import { Header } from "../Header/Header";

export interface AuthProviderProps {}

const useAuthProviderState = () => {
  const services = useServices();
  const [me, setMe] = useState<Me | null>(null);

  useEffect(() => {
    services.me
      .fetchMe()
      .then(setMe)
      .catch(redirectToLoginPage);
  }, [services.me]);

  return { me };
};

export const AuthProvider: React.FC<AuthProviderProps> = () => {
  const { me } = useAuthProviderState();

  if (!me) {
    return null;
  }

  return (
    <meContext.Provider value={me}>
      <Header />
      <main>
        <Switch>
          <Route exact path="/questions" render={() => <QuestionsList />} />
          <Route
            exact
            path="/question/new"
            render={() => <CreateQuestionForm />}
          />
          <Route
            exact
            path="/question/:id"
            render={({ match }) => <QuestionDetail id={match.params.id} />}
          />
          <Redirect to="/questions" />
        </Switch>
      </main>
    </meContext.Provider>
  );
};
