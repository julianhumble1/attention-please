import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login.jsx";
import Info from "./pages/Info.jsx";
import { useState } from "react";

const App = () => {
  const [info, setInfo] = useState();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home setInfo={setInfo} />} />
        <Route path="login" element={<Login />} />
        <Route path="/info" element={<Info info={info} />} />
      </Routes>
    </>
  );
};

export default App;
