import PropTypes from "prop-types";

function ImagesError({ message }) {
  return (
    <div role="alert">
      <p>Sorry, something went wrong. Error: {message}</p>
    </div>
  );
}

ImagesError.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ImagesError;
