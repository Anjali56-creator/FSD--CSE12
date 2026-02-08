const name = "Anjali";

const element = <h1>Helloooo {name}</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);


const element2 = <h1>Helloooo {[12, 5, 82].join(" ")}</h1>;
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(element2);


// null, undefined, boolean are allowed in JSX but not rendered

const age = 20;
const isloggedin = true;

const element3 = (
  <h1>{isloggedin ? "LOGGED IN" : "Please log in to see my age"}</h1>
);
const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(element3);


const courses = ["HTML", "CSS", "JavaScript"];
const element4 = (
  <ul>
   {courses.map(courses=><li>{courses}</li>)}
  </ul>
);
const root4 = ReactDOM.createRoot(document.getElementById('root4'));
root4.render(element4);
