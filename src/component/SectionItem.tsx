import * as React from "react";
import Layout from "./Layout";
import Content from "./Content";

interface Props {
  image: string;
  title: string;
}
export default function SectionItem(props: Props) {
  return (
    <div style={sectionDiv}>
      <img style={imgStyle} src={props.image} />
      <h1 style={centralText}>{props.title}</h1>
    </div>
  );
}

const sectionDiv: React.CSSProperties = {
  marginLeft: 25 + "px",
  marginRight: 25 + "px",
  marginTop: "15px",
  position: "relative",
  height: 30 + "%"
};

const imgStyle: React.CSSProperties = {
  width: 100 + "%",
  height: 100 + "%",
  backgroundPosition: "center",
  backgroundRepeat: "norepeat"
};

const centralText: React.CSSProperties = {
  top: "50%",
  left: "50%",
  position: "absolute",
  transform: "translate(-50%, -50%)",
  background: "none",
  color: "white",
  fontSize: 80 + "px",
  textShadow: "2px 2px 12px black",
  fontWeight: 100
};
