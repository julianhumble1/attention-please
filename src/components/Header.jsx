import "../css/Header.css";

const Header = () => {
  return (
    <header className="text-white p-3 justify-content-center " id="header">
      <div className="container-fluid   m-0 p-0 row">
          <div className='col major-mono-display-regular align-content-center'>
              AttentionPlease
        </div>
        <div className="col text-end ">
          <button className="btn" id = "admin-button">
            Admin Login
          </button>
        </div>
      </div>
        
    </header>
  )
}

export default Header