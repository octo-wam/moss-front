import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { QuestionsList } from "./components/QuestionsList/QuestionsList";
import { useServices } from "./components/ServicesProvider/hooks";
import { Me } from "./models";

const App: React.FC = () => {
  const services = useServices();
  const [me, setMe] = useState<Me | null>(null);

  useEffect(() => {
    services.me
      .fetchMe()
      .then(setMe)
      .catch(() => {
        // TODO: redirect to oauth
      });
  }, [services.me]);

  if (!me) {
    return null;
  }

  return (
    <div className="App">
        <Header/>
        <Switch>
        <Route exact path="/questions" render={() => <QuestionsList />} />
        <Redirect to="/questions" />
        </Switch>
    </div>
  );
};

export default App;
