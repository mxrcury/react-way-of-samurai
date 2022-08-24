import React from "react";
import preloader from "../../assets/images/preloader.gif";

const Preloader = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%)",
        userSelect: 'none'
      }}
    >
      <img
        style={{ width: "140px", height: "100px" }}
        src={preloader}
        alt="Loading..."
      />
    </div>
  );
};

export default Preloader;
