import React from "react";
import "./App.css";
import peopleController from "./server/peopleController";
import DetailsView from "./components/DetailsView";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <Switch>
      <Route exact path="/profile/GraceHopper.json" component={DetailsView} />
    </Switch>
  );
}

export default App;
