/*
<div id="parent">
  <div id="child1">
    <h1>Hello World</h1>
  </div>
  <div>
    <h2>I'm child element</h2>
  </div>
</div>


*/

let parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Hello World!!!")
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h2", {}, "I'm child element")
  ),
]);

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
