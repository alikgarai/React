import { Component } from "react";
import "./App.css";
import Form from "../components/Form/Form";
import CardList from "../components/CardList/CardList";

// GitHub usernames: gaearon, sophiebits, sebmarkbage, bvaughn

class App extends Component {
  state = {
    profiles: [],
  };

  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
