import Header from "./components/Header.jsx"
import Home from "./pages/Home.jsx";
import { Routes, Route} from "react-router-dom"
import './App.css';
import Login from "./pages/Login.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login /> } />
      </Routes>
    </>
  )
}

export default App