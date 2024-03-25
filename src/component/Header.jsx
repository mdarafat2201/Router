import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        background: "red",
        color: "#fff",
        textAlign: "center",
        padding: "10px 0",
      }}
    >
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          listStyle: "none",
          columnGap: "20px",
        }}
      >
        <li>
          <Link to={"/"}>home</Link>
        </li>
        <li>
          {" "}
          <Link to={"/Benner"}>Banner</Link>
        </li>
        <li>
          {" "}
          <Link to={"/About/12"}>About</Link>
        </li>
        <li>
          <Link to={"/Prouduct"}>Prouduct</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to={"/contact"}>contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
