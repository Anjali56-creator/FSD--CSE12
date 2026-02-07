const element=React.createElement('h1',{id:'title'},"hello world");
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(element);

//if we want to add more element then we have to use React.createElement again and again but it is not
//  a good way to do that so we can use JSX to create element in a better way.