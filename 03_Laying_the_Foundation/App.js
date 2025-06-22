// importing React for core react functionality
import React, { Component } from "react";

// importing ReactDOM for DOM functionality
import ReactDOM from "react-dom/client";

// ----------------------------------------------------
// creating and rendering React element using React code
const heading_h1 = React.createElement("h1", { id: "h1_tag" }, "H1 from React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading_h1);

// ----------------------------------------------------
// creating and rendering React element using JSX

// way1
const heading_h2 = <h2>This is H2 using JSX</h2>;
root.render(heading_h2);

// way2
const heading_h3 = (
  <div>
    <h3>This is H3 using JSX</h3>
  </div>
);
root.render(heading_h3);

// ----------------------------------------------------
// creating Functional components

// way1
const HeadingComp1 = () => {
  return <div>this is heading1</div>;
};
root.render(<HeadingComp1 />);

// way2
const HeadingComp2 = () => <div>this is heading2</div>;
root.render(<HeadingComp2 />);

// way3
const HeadingComp3 = () => (
  <span>
    <div>this is heading3</div>
  </span>
);
root.render(<HeadingComp3 />);

// Component Composition
const H1_component = () => {
  return <h1>I'm H1 tag</h1>;
};

const Title = () => (
  <div>
    <H1_component />
    <p>Hi, this is title</p>
    {/* let's add element into component */}
    {heading_h3}
  </div>
);

root.render(<Title />);

// let's add component into jsx element
const FooterComponent = () => {
  return <p>I'm footer component</p>;
};

const footerElement = (
  <footer>
    {FooterComponent()}
    <p>This is Footer</p>
  </footer>
);

root.render(footerElement);

// -----x-------x-----x------

// some practice
const GreetUser = (props) => {
  return <p>Hi, {props.children} have a good day!</p>;
};

root.render(<GreetUser>Abhishek</GreetUser>);

// Q: Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")
const headerElm1 = React.createElement("div", { className: "Title" }, [
  React.createElement("h1", { key: "h1_tag" }, "I' am h1"),
  React.createElement("h2", { key: "h2_tag" }, "I' am h2"),
  React.createElement("h3", { key: "h3_tag" }, "I' am h3"),
]);
root.render(headerElm1);

// Q: Create the same element using JSX
const headerElm2 = (
  <div>
    <h1>I' am 1.1</h1>
    <h2>I' am 2.1</h2>
    <h3>I' am 3.1</h3>
  </div>
);

root.render(headerElm2);
