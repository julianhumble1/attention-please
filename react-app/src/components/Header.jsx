import "../css/Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-white p-3 " id="header">
      <div className="container-fluid m-0 p-0 row d-flex justify-content-between">
        <div className="row col-auto">
          <div className="col-auto major-mono-display-regular align-content-center">
            <NavLink to="/" className="navlink">
              AttentionPlease
            </NavLink>
          </div>
          <div className="col-auto my-auto">
            <Link className="btn" id="catalog-button" to="/">
              LLM Catalog
            </Link>
            <Link className="btn" to="/matrix" id="matrix-button">
              Matrix
            </Link>
          </div>
        </div>
        <div className="col-auto my-auto justify-content-end text-end">
          <Link className="btn" id="admin-button" to="/login">
            Admin Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
