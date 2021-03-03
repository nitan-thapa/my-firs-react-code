
function Home() {
    return (
      <>
        <div className="container">
          <div className="row align-items-center " style={{ height: "90vh" }}>
            <div
              className=" col-12 col-md-6 "
              style={{ color: "rgba(0, 0, 0, 0.6)" }}
            >
              <h1>Wlecome to Nitan Thapa website</h1>
              <p>here you can watch and download latest bollywood movies</p>
            </div>
  
            <div className=" col-12 col-md-6 move" style={{ height: "300px" }}>
              {/* vvvimp */}
              {/* note the img always search the image in public folder
        dont write ./ just write file name (recommended)
         */}
  
              <img
                style={{ height: "100%", width: "100%" }}
                className="img-thumbnail"
                src="56b07b869b85a351fd500373405685dc.jpg"
                alt="image"
              />
            </div>
          </div>
        </div>
      </>
    );
  }

  export {Home}