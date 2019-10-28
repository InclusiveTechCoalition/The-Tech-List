import React from "react";
import "./App.css";
import axios from "axios";
import DetailsView from "./components/DetailsView";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class App extends React.Component {
  async componentDidMount(){
    await axios.get("http://localhost:3001/profile/GraceHopper.json")
  }
  render() {
    return (
      <Switch>
        <Route exact path="/profile/GraceHopper.json" component={DetailsView} />
      </Switch>
    );
  }
}

export default App;
