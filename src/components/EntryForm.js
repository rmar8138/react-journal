import React, { Component } from "react";

export default class EntryForm extends Component {
  state = {
    entry: "",
    errorMessage: null
  };

  onTextAreaChange = event => {
    this.setState({ entry: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    const { onEntryFormSubmit, category, history } = this.props;
    const { entry } = this.state;

    if (!entry) {
      return this.setState({ errorMessage: "Cannot be blank" });
    }

    onEntryFormSubmit({ entry, category });

    this.setState({
      entry: "",
      errorMessage: null
    });

    history.push("/");
  };

  render() {
    const { entry, errorMessage } = this.state;

    return (
      <form onSubmit={this.onFormSubmit}>
        {errorMessage}
        <div>
          <textarea onChange={this.onTextAreaChange} value={entry}></textarea>
        </div>
        <input type="submit" value="create entry" />
      </form>
    );
  }
}
