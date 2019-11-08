import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { QuestionsList } from "./components/QuestionsList/QuestionsList";
import { QuestionDetail } from "./components/QuestionDetail/QuestionDetail";
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
        <div className="content">
            <Switch>
                <Route exact path="/questions" render={() => <QuestionsList />} />
                <Route exact path="/question/:id" render={({ match }) => <QuestionDetail id={ match.params.id } />} />
                <Redirect to="/questions" />
            </Switch>
        </div>
        <Footer/>
    </div>
  );
};

export default App;
