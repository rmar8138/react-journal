import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategorySelectionPage from "./pages/CategorySelectionPage";
import NewEntryPage from "./pages/NewEntryPage";

export default class App extends Component {
  state = {
    categories: ["personal", "travel", "dating"],
    entries: []
  };

  onEntryFormSubmit = entry => {
    this.setState(state => ({ entries: [...state.entries, entry] }));
  };

  render() {
    const { categories } = this.state;

    return (
      <div>
        <BrowserRouter>
          <>
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/category"
              render={props => (
                <CategorySelectionPage {...props} categories={categories} />
              )}
            />
            <Route exact path="/entry" component={NewEntryPage} />
            <Route
              exact
              path="/entry/new/:id"
              render={props => (
                <NewEntryPage
                  {...props}
                  categories={categories}
                  onEntryFormSubmit={this.onEntryFormSubmit}
                />
              )}
            />
          </>
        </BrowserRouter>
      </div>
    );
  }
}
