import React, { Component } from "react";
import Myform from "../form/MyForm";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
    };
  }

  handleDetails = (val) => {
    this.setState({ details: val });
    alert("Parent state updated by child component");
  };
  render() {
    return (
      <>
        <div>
          {/* Calling child component */}
          {/* Passing props to child component */}
          <Myform handleDetails={this.handleDetails} />
        </div>
      </>
    );
  }
}

export default Home;
