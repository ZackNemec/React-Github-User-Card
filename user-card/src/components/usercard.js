import React from "react";
import {
  Container,
  Card,
  CardText,
  CardTitle,
  CardLink,
  Collapse,
  Button,
} from "reactstrap";

class UserCard extends React.Component {
  state = {
    repos: [],
    toggle: false,
  };
  componentDidMount() {
    fetch("https://api.github.com/users/ZackNemec/repos")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.status !== "error") {
          this.setState({ repos: json });
        }
      })
      .catch((err) => console.error(err.message));
  }
  changeHandle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    console.log(this.state.repos);
    return (
      <Container>
        <Card>
          <CardTitle>{this.props.user.login}</CardTitle>
          <CardText>followers: {this.props.user.followers}</CardText>
          <CardText>Location: {this.props.user.location}</CardText>
          <CardText>Public Repos: {this.props.user.public_repos}</CardText>
          <Button onClick={this.changeHandle}>
            {this.state.toggle === false
              ? "Click to view Repos"
              : "Click to Hide"}
          </Button>
          <Collapse isOpen={this.state.toggle}>
            {this.state.repos.map((data) => (
              <Card>
                <CardLink href={data.clone_url}>{data.name}</CardLink>
              </Card>
            ))}
          </Collapse>
        </Card>
      </Container>
    );
  }
}

export default UserCard;
