import * as React from "react";
import App from "./App";
import Navbar from "./Navbar";
import Content from "./Content";

export default function Layout() {
  return (
    <div /*  style=/* {totalDiv} */>
      <Navbar />
      <Content />
    </div>
  );
}

// const totalDiv: React.CSSProperties = {
//   maxHeight: 100 + "%"
// };
