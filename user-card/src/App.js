import React from "react";
import "./App.css";
import UserCard from "./components/usercard";

class App extends React.Component {
  state = {
    user: [],
    repos: [],
  };
  componentDidMount() {
    fetch("https://api.github.com/users/ZackNemec")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.status !== "error") {
          this.setState({ user: json });
        }
      })
      .catch((err) => console.error(err.message));
  }
  render() {
    console.log(this.state.user);
    return (
      <div className="App">
        <h1>User Card</h1>
        <UserCard user={this.state.user} />
      </div>
    );
  }
}

export default App;
