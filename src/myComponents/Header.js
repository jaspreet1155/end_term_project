import React from 'react'

export default function Header() {
  function login(){
    let dis = document.getElementById("login");
    dis.style.display="block";
  }
  return (
    <nav id='nav-bar' className="navbar navbar-dark navbar-expand-lg" style={{backgroundColor: "#00000080"}}>
    {/* // <nav className="navbar navbar-dark"  style={{backgroundColor: "#e3f2fd"}}> */}
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Shaadi Matrimony.com</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Help
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Help Desk</a></li>
                <li><a className="dropdown-item" href="#">Be Safe Online</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Shaadi Meet</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={login}>
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
