/* <div id="parent">
    <div id="child">
        <h1>I'm H1</h1>
        <h1>I'm H2</h1>
    </div>
    <div id="child2">
        <h1>I'm H1</h1>
        <h1>I'm H2</h1>
    </div>
</div> */


// const heading = React.createElement('h1', {class:'heading'}, 'Hello World from React!'); // object
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading); //render responsible to convert react object into html tag

const parent = React.createElement('div',{id:'parent'},[
    React.createElement('div',{id:'child'},[
        React.createElement('h1',{class:'heading'},"I'm H1"),
        React.createElement('h1',{class:'heading2'},"I'm H2"),
    ])
],[
    React.createElement('div',{id:'child2'},[
        React.createElement('h1',{class:'heading'},"I'm H1"),
        React.createElement('h1',{class:'heading2'},"I'm H2"),
    ])
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);