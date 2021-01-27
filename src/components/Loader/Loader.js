import React from "react";
import LoaderComponent from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./loader.module.css";

const Load = () => {
  return (
    <div className={styles.loader}>
      <LoaderComponent
        type="Hearts"
        color="#3335FF"
        height={100}
        width={100}
        // timeout={10000}
      />
    </div>
  );
};

export default Load;
