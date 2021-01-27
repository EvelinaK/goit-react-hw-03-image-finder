import PropTypes from "prop-types";
import GalleryItem from "../GalleryItem/galleryItem";

function ImageGallery({ images }) {
  return (
    <ul className="ImageGallery">
      {images.map((image) => (
        <GalleryItem
          src={image.webformatURL}
          alt={image.tags}
          largeImageUrl={image.largeImageURL}
          key={image.id}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
