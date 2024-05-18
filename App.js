
const parent = React.createElement( "div",{ id:"parent" },
React.createElement( "div",{ id:"child"},[
React.createElement( "h1",{}, "im a h1"),
React.createElement( "h2",{}, "im a h2"),
]
),

React.createElement( "div",{ id:"child2"},[
React.createElement( "h1",{}, "im a h1"),
React.createElement( "h2",{}, "im a h2"),
]
)

);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
