import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login.jsx";
import Info from "./pages/Info.jsx";
import Matrix from "./pages/Matrix.jsx";
import { useState, useEffect } from "react";

const App = () => {
  // const [info, setInfo] = useState();
  const [loggedIn, setLoggedIn] = useState();

  useEffect(() => {
    const id = localStorage.getItem("user")
    if (id) {setLoggedIn(true)}
  })

  return (
    <>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        <Route path="/info/:id" element={<Info loggedIn={loggedIn}/>} />
        <Route path="/matrix" element={<Matrix />} />
      </Routes>
    </>
  );
};

export default App;
