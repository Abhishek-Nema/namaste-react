// importing React for core react functionality
import React from "react";

// importing ReactDOM for DOM functionality
import ReactDOM from "react-dom/client";

// ----------------------------------------------------
// creating and rendering React element using React code
const heading_h1 = React.createElement("h1", { id: "h1_tag" }, "H1 from React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading_h1);

// ----------------------------------------------------
// creating and rendering React element using JSX

const heading_h2 = <h1>This is H2 using JSX</h1>;

root.render(heading_h2);
