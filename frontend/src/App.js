import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar";
import ExercisesList from "./components/exercisesList";
import EditExercise from "./components/editExercise";
import CreateExercise from "./components/createExercise";
import CreateUser from "./components/createUser";

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <div className="container">
          <br />
          <Route path="/" exact component={ExercisesList} />
          <Route path="/edit/:id" exact component={EditExercise} />
          <Route path="/create" exact component={CreateExercise} />
          <Route path="/user" exact component={CreateUser} />
        </div>
      </Router>
    );
  }
}
