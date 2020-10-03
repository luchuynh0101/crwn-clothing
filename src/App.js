import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";

const HatPage = () => <div>Hat Page</div>;

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop/hats" component={HatPage} />
    </Switch>
  );
}

export default App;
