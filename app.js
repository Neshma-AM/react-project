/*const heading = React.createElement("h1",
 {id: "heading", xyz: "abc"},
"Hello World from React!");//heading is an JS object */

const parent = React.createElement("div", {
    id: "division"
},[ React.createElement("h1", {id: "haedingOne"},"I am heading One"),
    React.createElement("h2", {id: "headingTwo"}, "I am heading Two ") ])

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(parent); //after adding heading inside this render actual h1 tag gets created by render()
