import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import AddDeck from "../components/AddDeck";
import DecksList from "../components/DecksList";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content>">
          <Switch>
            <Route component={DecksList} path="/" exact={true} />
            <Route component={AddDeck} path="/add" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
