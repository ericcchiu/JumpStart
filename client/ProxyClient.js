import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style/ProxyClient.css";
// import Grid from "@material-ui/core/Grid";
// import NavBar from "./NavBar.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      id: Math.ceil(Math.random() * 107)
    };
  }

  handleClick(event, ID) {
    this.setState({
      id: ID
    });
  }

  render() {
    return (
      <div className="container">
        {window.Project && <Project className="Project" id={this.state.id} />}
        {window.Pledge && <Pledge className="Pledge" id={this.state.id} />}
        {window.Related && (
          <Related
            className="Related"
            id={this.state.id}
            onClick={this.handleClick}
          />
        )}
        {window.Comments && (
          <Comments className="Comments" id={this.state.id} />
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
