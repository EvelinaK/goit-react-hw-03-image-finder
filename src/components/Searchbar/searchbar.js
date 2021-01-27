import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

class Searchbar extends Component {
  state = {
    request: "",
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleRequestChange = (event) => {
    this.setState({ request: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.request.trim() === "") {
      toast.info("Enter your request");
      return;
    }

    this.props.onSubmit(this.state.request);
    this.setState({ request: "" });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.request}
            onChange={this.handleRequestChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
