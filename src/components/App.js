import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategorySelectionPage from "./pages/CategorySelectionPage";
import NewEntryPage from "./pages/NewEntryPage";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <>
            <Link to="/">Home</Link>
            <Link to="/category">Category Selection</Link>
            <Link to="/entry">New Entry</Link>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/category" component={CategorySelectionPage} />
            <Route exact path="/entry" component={NewEntryPage} />
          </>
        </BrowserRouter>
      </div>
    );
  }
}
