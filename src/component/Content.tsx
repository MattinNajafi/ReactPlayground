import * as React from "react";
import Layout from "./Layout";
import SectionItem from "./SectionItem";

export default function Content() {
  return (
    <div style={flexBox}>
      <SectionItem
        image="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3289&q=80"
        title="Forest"
      />
      <SectionItem
        image="https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
        title="Sports"
      />
      <SectionItem
        image="https://images.unsplash.com/photo-1547156979-b57c6439f9d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
        title="Musik"
      />
    </div>
  );
}

const flexBox: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: 100 + "%",
  height: 88 + "vh"
};
