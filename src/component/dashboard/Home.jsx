import React, { Component } from "react";
import Myform from "../form/MyForm";
import DetailTable from "../form/DetailTable";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
    };
  }

  handleDetails = (val) => {
    this.setState({ details: val });
  };
  render() {
    return (
      <>
        <div className="d-flex justify-content-around">
          <div>
            <Myform handleDetails={this.handleDetails} />
          </div>
          <div>
            <DetailTable details={this.state.details}/>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
