const element=(<div><h1 id="title">Hello World</h1>
<h1 id="title">Hello everyone</h1></div>);
const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(element);
// in the above code we have used JSX to create element and render it to the DOM. JSX is a syntax extension for 
// JavaScript that allows us to write HTML-like code in our JavaScript files. It is not a requirement to use JSX 
// in React, but it is a popular choice among developers because it makes the code more readable and easier to write.



//react component:->it is just a function  the only condition is the first letter should be capital.
function App(){
    return (
        <h2>Hyeeee</h2>
    );
}
const root2=ReactDOM.createRoot(document.getElementById('root2'));
root2.render(<App/>);
// in the above code we have created a React component called App and rendered it to the DOM. A React component is a 
// JavaScript function that returns a React element. We can use React components to create reusable UI elements and 
// manage the state of our application.