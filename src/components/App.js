import React, { Component } from "react";
import HomePage from "./pages/HomePage";
import CategorySelectionPage from "./pages/CategorySelectionPage";
import NewEntryPage from "./pages/NewEntryPage";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>React Journal</h1>
        <HomePage />
        <CategorySelectionPage />
        <NewEntryPage />
      </div>
    );
  }
}
