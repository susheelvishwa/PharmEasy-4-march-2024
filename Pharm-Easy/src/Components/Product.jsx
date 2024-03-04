import axios from "axios";
import React, { useState } from "react";

const Product = () => {
  var [medicines, setMedicines] = useState([]);
  const fetchdata = async () => {
    let url = "http://localhost:8080/medicines";
    const response = await axios.get(url);
    console.log(response.data);
    setMedicines(response.data);
  };

  //   fetchdata();
  const GridTileComponent = ({ medicine }) => (
    <div className="items">
      <div>
        <p>Name: {medicine.name}</p>
        <p>
          Product: <img src={medicine.url} alt="" />
        </p>
        <p>Brand: {medicine.brand}</p>
      </div>
    </div>
  );

  return (
    <div>
      <h1>This is a home page</h1>
      <div className="medicines-grid">
        {medicines.map((m, index) => (
          <GridTileComponent key={index} medicine={m} />
        ))}
      </div>
      <button onClick={fetchdata}>Fetchdata</button>
    </div>
  );
};

export default Product;
