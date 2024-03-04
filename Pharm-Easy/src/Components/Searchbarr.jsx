import React from "react";
import "./Searchbar.css";
import { Box } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup } from "@chakra-ui/react";

const Searchbarr = () => {
  return (
    <div className="main">
      <div className="heading">
        <div>
          <b style={{ fontSize: "large" }}>What are you looking for?</b>
        </div>
        <div style={{ fontSize: "small" }}>
          Order with prescription{" "}
          <span style={{ fontSize: "large", color: "teal" }}>
            <b>UPLOD NOW </b>{" "}
          </span>
        </div>
      </div>
      <div className="search">
        <Box
          className="see"
          h={"47px"}
          backgroundColor={"rebeccapurpl"}
          p={2}
          border={"1px"}
          borderRadius={"20px"}
          padding={"5px 20px "}
          margin={"5px 20px"}
          color="Black"
          textAlign={"left"}
          SearchIcon
        >
          <div className="di">
            <div className="se">
              <SearchIcon />
              <h3>Search for midicine...</h3>
            </div>
            <div className="bb">
              <Button
                borderRadius={"15px"}
                width={"100px"}
                margin={"0 0 0 50px"}
                colorScheme="teal"
              >
                Search
              </Button>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Searchbarr;
