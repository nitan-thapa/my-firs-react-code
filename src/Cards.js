import React, { useState } from "react";

const Cards = (props) => {
  const [showhide, setshowhide] = useState(false);
  const { im, ti } = props;
  return (
    <>
      <div
        onMouseLeave={() => {
          setshowhide(false);
        }}
        onMouseEnter={() => {
          setshowhide(true);
        }}
        style={{ height: "300px" }}
        className="col-6 col-md-3  p-2 photo "
      >
        <img
          style={{ height: "100%", width: "100%", borderRadius: "27px" }}
          src={im}
          alt="movies not found"
        />

        {showhide ? (
          <>
            {" "}
            <div className="photodetail d-flex flex-column justify-content-center align-items-center">
              <h1>{ti}</h1>
              <button
                className="p-2"
                style={{
                  background: "chartreuse",
                  borderRadius: "20px",
                  border: "none",
                  color: "white",
                }}
              >
                Download
              </button>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export { Cards };
