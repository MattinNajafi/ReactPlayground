import * as React from "react";
import Layout from "./Layout";

interface Props {
  compiler: string;
  framework: string;
}

export default function App() {
  return <Layout />;
}

// const sizeOfText: React.CSSProperties = {
//   fontSize: 15
// };

// const style = { ...colorText, ...sizeOfText };
