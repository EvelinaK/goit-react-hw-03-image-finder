import React from "react";
import PropTypes from "prop-types";
import defaultImage from "./info.jpg";
import styles from "./info.module.css";

const ImagesInfo = ({ url }) => {
  return (
    <>
      <div className={styles.info}>
        <img src={url} alt="img" />
      </div>
    </>
  );
};
ImagesInfo.defaultProps = {
  url: defaultImage,
};
ImagesInfo.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
};

export default ImagesInfo;
