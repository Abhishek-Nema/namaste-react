// creating h1 tag in React
const heading = React.createElement("h1", {}, "Hello ji, from React")

// React DOM me root bnana  
const root = ReactDOM.createRoot(document.getElementById("root"))

// h1 tag ko div container me display karo
root.render(heading)

// -----------------------------------------------------
// creating anchor tag using React
const hyperLink = React.createElement("a", { href: "https://www.google.com", target: "_blank" }, "Google")

const a_tag_container = ReactDOM.createRoot(document.getElementById("a_tag"))

a_tag_container.render(hyperLink)