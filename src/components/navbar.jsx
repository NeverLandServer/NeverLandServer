import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
        <div className="container">
          <a href="#" className="navbar-brand">NEVERLAND CZ/SK | SEZÓNA 2</a>
    
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
            <span className="navbar-toggler-icon"></span>
          </button>
    
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#history" className="nav-link">O SERVERU</a>
              </li>
              <li className="nav-item">
                <a href="#faq" className="nav-link">FAQ</a>
              </li>
              <li className="nav-item">
                <a href="#memberlist" className="nav-link">ČLENOVÉ</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;