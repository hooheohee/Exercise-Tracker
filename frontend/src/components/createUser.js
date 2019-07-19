import React, { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    };

    axios
      .post("http://localhost:5000/users/add", user)
      .then(res => console.log(res.data));

    this.setState({
      username: ""
    });

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Confirm" className="btn btn-primary" />
            <button
              onClick={() => (window.location = "/")}
              className="btn btn-danger ml-2"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}
