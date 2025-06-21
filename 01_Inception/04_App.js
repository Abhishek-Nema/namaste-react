// creating React element or Javascript object
const h1 = React.createElement(
  "h1",
  { id: "h1_tag" },
  "Hello World!, from your freindly React"
);

// creating root container where React will render code logic in DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// converting react element into h1 tag in browser
root.render(h1);

// -----------------------------------------------------
// creating anchor tag using React
const hyperLink = React.createElement(
  "a",
  { href: "https://www.google.com", target: "_blank" },
  "Google"
);

// creating root container where React will render code logic in DOM
const a_tag_container = ReactDOM.createRoot(document.getElementById("a_tag"));

a_tag_container.render(hyperLink);

// -----------------------------------------------------

/*
let's create this HTML structure in React...

<div id="parent">
        <div id="child1">
            <h1>Hi, I'm H1 tag</h1>
            <h2>Hi, I'm H2 tag</h2>
        </div>
        <div id="child2">
            <h1>Hi, I'm H1 tag</h1>
            <h2>Hi, I'm H2 tag</h2>
        </div>
    </div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1" },
    // To create siblings of children, pass them in array
    [
      React.createElement("h1", {}, "Hi, I'm H1 tag"),
      React.createElement("h3", {}, "Hi, I'm H3 tag"),
    ]
  ),
  React.createElement(
    "div",
    { id: "child2" },
    // To create siblings of children, pass them in array
    [
      React.createElement("h1", {}, "Hi, I'm H1 tag"),
      React.createElement("h3", {}, "Hi, I'm H3 tag"),
    ]
  ),
]);

// render() will convert React Element into HTML tag inside brwoser
root.render(parent);
