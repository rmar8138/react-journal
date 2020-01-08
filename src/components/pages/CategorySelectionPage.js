import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CategorySelectionPage extends Component {
  render() {
    const { categories } = this.props;

    return (
      <div>
        <h1>What do you want to write about?</h1>
        <ul>
          {categories.map((category, index) => (
            <li key={category}>
              <Link to={`entry/new/${index}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  static defaultProps = {
    categories: []
  };
}
