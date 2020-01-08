import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <h1>Home</h1>
        <Link to="/category">
          <button>Select a category</button>
        </Link>
      </>
    );
  }
}
