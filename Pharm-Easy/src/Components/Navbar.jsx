import React from "react";

import "./Navbar.css";
import { Link } from "react-router-dom";
// import tata_1mg from "../assets/tata_1mg.PNG"
import { TfiShoppingCart } from "react-icons/tfi";
// import { CiLocationOn } from "react-icons/ci";
// import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <div className="Main-containerr">
        <div id="Main-container">
          <div className="left">
            <img
              className="TataLogo"
              src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0"
              alt=""
            />{" "}
            <div className="consult">
              <p>Express delivery to</p>
            </div>
          </div>

          <div className="right">
            <div className="">
              <button
                
                className="download"
                onClick={
                  "https://apps.apple.com/in/app/pharmeasy-healthcare-app/id982432643?mt=8"
                }
              >
                Download App
              </button>
            </div>

            <div>
              <Link to="/Signup">
                <span style={{ color: "gray", border: "none" }}>
                  Hello/Register
                </span>
              </Link>
            </div>

            <div>
              <Link to="/Login">
                <span style={{ color: "gray", border: "none" }}>Login</span>
              </Link>
            </div>

            <div>
              <Link to="/Product">
                <span style={{ color: "gray", border: "none" }}>Product</span>
              </Link>
            </div>

            <div style={{ color: "gray", border: "none" }}>Offers</div>

            <div>
              <Link to="/Cart">
                <TfiShoppingCart size={25} color="grey" />
              </Link>
            </div>
          </div>
        </div>

        <div id="secound_nav">
          <div className="Medicine">
            <label>Medicine</label>
          </div>
          <div className="Lab">
            <label>Lab Tests</label>
          </div>
          <div className="Personal">
            <label htmlFor="Personal Care">
              {" "}
              Healthcare
              <select
                className="select_1"
                name=""
                placeholder="Healthcare"
                id=""
              ></select>
            </label>
          </div>
          <div className="Health">
            <label>Health Blogs</label>
          </div>
          <div className="PLUS">
            <label>PLUS</label>
          </div>
          <div className="Offers">
            <label>Offers</label>
          </div>
          <div className="Value">
            <label>Value Store</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
