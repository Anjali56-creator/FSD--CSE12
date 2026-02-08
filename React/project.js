function Header() {
  return <h1>Welcome to INDIAN ELECTION COMMISSION</h1>;
}
function main(){
    return <h2>India is a democratic country</h2>;
}
function footer(){
    return <h3>Vote for the better future of our country</h3>;
}
function App() {
  return (
    <>
      <Header>hii</Header>
      <main>kkk</main>
      <footer>jjj</footer>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
