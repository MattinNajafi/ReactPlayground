import * as React from "react";
import Layout from "./Layout";

export default function Navbar() {
  return <h1 style={textStyle}>React Playground</h1>;
}

const textStyle: React.CSSProperties = {
  marginLeft: 25 + "px",
  fontFamily: "Lacquer"
};
