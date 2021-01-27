import React, { Component, Suspense } from "react";
import PropTypes from "prop-types";
import "./App.css";
import * as Api from "./services/api";

import ImagesError from "./components/ImagesError/ImagesError";
import Loader from "./components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import ImageGallery from "./components/ImageGallery/imageGallery";
import Button from "./components/Button/button";
import Searchbar from "./components/Searchbar/searchbar";
import ImagesInfo from "./components/Info/info";
const Status = {
  IDLE: "idle",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

class App extends Component {
  state = {
    error: null,
    status: "idle",
    request: "",
    page: 1,
    images: [],
    isLoading: false,
  };

  static propTypes = {
    request: PropTypes.string,
    page: PropTypes.number,
    images: PropTypes.array,
  };

  handleFormSubmit = (newRequest) => {
    this.setState({ request: newRequest, page: 1, images: [] });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.request;
    const nextName = this.state.request;

    if (prevName !== nextName) {
      this.renderImages();
    }
  }

  renderImages = () => {
    const { request, page } = this.state;
    this.setState({ isLoading: true });

    Api.fetchImg(request, page)
      .then(({ data }) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...data.hits],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error, status: Status.REJECTED }))
      .finally(() =>
        this.setState({ status: Status.RESOLVED, isLoading: false })
      );
  };
  render() {
    const { status, error, images, isLoading } = this.state;
    console.log(this.state);
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>
        <ToastContainer autoClose={3000} />

        {status === Status.IDLE && (
          <p className="welcomeText">Please enter your search term</p>
        )}

        {status === Status.REJECTED && <ImagesError message={error.message} />}

        {status === Status.RESOLVED && (
          <>
            <ImageGallery images={this.state.images} />

            {images.length > 0 && !isLoading && (
              <Button onClick={this.renderImages} />
            )}
            {images.length <= 0 && <ImagesInfo />}
          </>
        )}
        {isLoading && <Loader />}
      </>
    );
  }
}

export default App;
