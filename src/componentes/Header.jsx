import { Link } from "react-router-dom"
import React from 'react'
import logo from '../assets/logo.jpg'


const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black fs-5" data-bs-theme="dark">
      <a className="navbar-brand" href="#"><img src={logo} alt="" width={100} /></a>
        <div className="container-fluid d-flex justify-content-center">
          <div className="d-flex justify-content-center">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to={"/inicio"} className="nav-link active" aria-current="page" href="#">Incio</Link>
                </li>
                <li className="nav-item">
                  <Link to={"/movil"} className="nav-link" aria-current="page" href="#">Movil</Link>
                </li>
                <li className="nav-item">
                  <Link to={"/laptop"} className="nav-link" aria-current="page" href="#">Laptop</Link>
                </li>
                <li className="nav-item">
                  <Link to={"/tienda"} className="nav-link" href="#">Tienda</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categorias
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Habilidades</a>
                </li>
              </ul>
              
            </div>
          </div>
        </div>

        <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>

      </nav>
    
    
    </>
  )
}

export default Header