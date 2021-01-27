import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from "../Modal/modal";

class GalleryItem extends Component {
  state = {
    showModal: false,
  };

  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    largeImageUrl: PropTypes.string.isRequired,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { id, src, alt, largeImageUrl } = this.props;
    const { showModal } = this.state;
    return (
      <li key={id} className="GalleryItem">
        <img
          onClick={this.toggleModal}
          src={src}
          alt={alt}
          className="GalleryItemImage"
        />
        {showModal && (
          <Modal onClose={this.toggleModal} src={largeImageUrl} alt={alt} />
        )}
      </li>
    );
  }
}

export default GalleryItem;
