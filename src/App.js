import "./App.css";
import Header from "./myComponents/Header";
import Home from "./myComponents/Home";
import Form from "./myComponents/Form";
import Main from "./myComponents/Main";
import Login from "./myComponents/Login";

function App() {
  return (
    <>
      <Header />
      <div className="img-home">
        <div id="title">Trusted Matrimony & Matchmaking Service</div>
        <Home />
      </div>
      <Form />
      <Main />
      <Login />
    </>
  );
}

export default App;
