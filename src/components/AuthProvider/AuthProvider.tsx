import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { redirectToLoginPage } from "../../utils/token";
import { Me } from "../../models";
import { QuestionsList } from "../QuestionsList";
import { QuestionDetail } from "../QuestionDetail";
import { useServices } from "../ServicesProvider";
import { meContext } from "./context";

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
      <Switch>
        <Route exact path="/questions" render={() => <QuestionsList />} />
        <Route
          exact
          path="/question/:id"
          render={({ match }) => <QuestionDetail id={match.params.id} />}
        />
        <Redirect to="/questions" />
      </Switch>
    </meContext.Provider>
  );
};
