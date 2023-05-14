import React from "react";

const Overlay = ({ children }) => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.75)",
        zIndex: 100,
      }}
    >
      {children}
    </div>
  );
};

export default Overlay;
