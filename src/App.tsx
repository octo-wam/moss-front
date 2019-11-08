import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { QuestionsList } from "./components/QuestionsList/QuestionsList";

const App: React.FC = () => {
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
