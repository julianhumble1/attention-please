import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login.jsx";
import Info from "./pages/Info.jsx";
import Matrix from "./pages/Matrix.jsx";
import { useState } from "react";

const App = () => {
  // const [info, setInfo] = useState();
  const [loggedIn, setLoggedIn] = useState();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        <Route path="/info/:id" element={<Info />} />
        <Route path="/matrix" element={<Matrix />} />
      </Routes>
    </>
  );
};

export default App;
