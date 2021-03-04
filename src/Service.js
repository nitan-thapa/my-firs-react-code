import { Cards } from "./Cards";

function Service() {
  const arr = [
    { im: "jerry.jpg", ti: "Jerry" },
    { im: "Liger.jpg", ti: "Liger" },
    { im: "kgf.jpg", ti: " KGF 2" },
    { im: "master.jpeg", ti: "Master" },
    { im: "bacchan.jpg", ti: " Bacchan" },
    { im: "Dhamaka.jpg", ti: "Dhamaka" },
    { im: "bell.jpeg", ti: "bell" },
    { im: "Haathi.jpeg", ti: "Hatti" },
    { im: "good.jpeg", ti: "Good" },
    { im: "radhe.jpg", ti: "Radhe" },
  ];

  return (
    <>
      <div
        className="contanier-fluid"
        style={{ backgroundColor: "#000000ed;" }}
      >
        <div className="container">
          <div className="row ">
            {arr.map((value, i) => {
              return (
                <Cards im={value.im} ti={value.ti}>
                  {" "}
                </Cards>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export { Service };
