import React from "react";
import img1 from "../assets/PharmEasy/medicine_ff.webp";
import img2 from "../assets/PharmEasy/labtest_ff.webp";
import img3 from "../assets/PharmEasy/healthcare_ff.webp";
import img4 from "../assets/PharmEasy/health_blogs_ff.webp";
import img5 from "../assets/PharmEasy/plus_ff.webp";
import img6 from "../assets/PharmEasy/offers_ff.webp";
import img7 from "../assets/PharmEasy/value_store.png";

const Part3 = () => {
  return (
    <>
      <div className="part3_grid_div">
        <div className="part_3_img">
          <img src={img1} alt="" />
          <p
            style={{ textAlign: "center", paddingTop: "10px", color: "black" }}
          >
            Medicine
          </p>
          <p
            style={{
              fontSize: "small",
              textAlign: "center",
              color: "red",
              padding: "4px",
            }}
          >
            <b>UPTO 70% OFF</b>
          </p>
        </div>

        <div className="part_3_img">
          <img src={img2} alt="" />
          <p style={{ textAlign: "center", paddingTop: "10px", color: "black" }}>Lab Tests</p>
          <p
            style={{
              fontSize: "small",
              textAlign: "center",
              color: "red",
              padding: "4px",
            }}
          >
            <b>UPTO 70% OFF</b>
          </p>
        </div>
        <div className="part_3_img">
          <img src={img3} alt="" />
          <p style={{ textAlign: "center", paddingTop: "10px", color: "black" }}>
            Healthcare <br /> Care
          </p>
        </div>
        <div className="part_3_img">
          <img src={img4} alt="" />
          <p style={{ textAlign: "center", paddingTop: "10px", color: "black" }}>
            Health Blogs
          </p>
          <p
            style={{
              fontSize: "small",
              textAlign: "center",
              color: "red",
              padding: "4px",
            }}
          >
            <b>UPTO 70% OFF</b>
          </p>
        </div>
        <div className="part_3_img">
          <img src={img5} alt="" />
          <p style={{ textAlign: "center", paddingTop: "10px", color: "black" }}>PLUS</p>
          <p
            style={{
              fontSize: "small",
              textAlign: "center",
              color: "red",
              padding: "4px",
            }}
          >
            <b>UPTO 70% OFF</b>
          </p>
        </div>
        <div className="part_3_img">
          <img src={img6} alt="" />
          <p style={{ textAlign: "center", paddingTop: "10px", color: "black" }}>Offers</p>
        </div>
        <div className="part_3_img">
          <img src={img7} alt="" />
          <p style={{ textAlign: "center", paddingTop: "10px", color: "black" }}>Value Store</p>
          <p
            style={{
              fontSize: "small",
              textAlign: "center",
              color: "red",
              padding: "4px",
            }}
          >
            <b>UPTO 70% OFF</b>
          </p>
        </div>
      </div>
    </>
  );
};

export default Part3;
