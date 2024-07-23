import { loginService } from "../utils/user.service";
import "./Login.scss";
import { useState } from "react";
import ErrorModal from "../components/ErrorModal/ErrorModal";
import SuccessModal from "../components/SuccessModal/SuccessModal";
import { useNavigate } from "react-router-dom";

const Login = ({ loggedIn, setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modal, setModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginService({ email: email, password: password });
      if (res.status === 201) {
        setModal(true);
        setModalMessage(`Logged in with ${res.data.email}`);
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("user", res.data.id);
        localStorage.setItem("userEmail", res.data.email);
        setEmail("");
        setPassword("");
        setLoggedIn(true)
      } else {
        setErrorModal(true);
        setModalMessage(res.message);
      }
    } catch (e) {
      setErrorModal(true);
      setModalMessage(e);
    }
  };

  const handleClose = () => {
    if (modal) {
      setModal(false);
      navigate("/");
    }
    setErrorModal(false);
  };

  return (
    <>
      <SuccessModal
        message={modalMessage}
        show={modal}
        close={handleClose}
      ></SuccessModal>
      <ErrorModal
        error={modalMessage}
        show={errorModal}
        handleClose={handleClose}
      />
      <div className="login">
        <h2>Admin Login</h2>
        {!loggedIn && (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button type="submit" role="login">
              Login
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default Login;
