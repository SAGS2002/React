import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className='bg-black m-0'>
        <div className='container'>
            <footer className='py-3 my-4'>
                <ul className='nav justify-content-center border-buttom pb-3 mb-3'>
                    <li className='nav-item'>
                        <Link to={"/"} className='nav-link px-2'>Inicio</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={"/Movil"} className='nav-link px-2'>Movil</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={"/Laptop"} className='nav-link px-2'>Laptop</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={"/Tienda"} className='nav-link px-2'>Tienda</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={"/Contacto"} className='nav-link px-2'>Contacto</Link>
                    </li>
                </ul>
                <p className='text-center'>
                    <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmx.pinterest.com%2Fpin%2F442900944617754261%2F&psig=AOvVaw21QqzKuNcfSfq4jS-oq8hx&ust=1726432652500000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIjI9Pmkw4gDFQAAAAAdAAAAABAE" className='nav-link px-2'>© Estafas 2024</a>
                </p>
            </footer>
        </div>
    </footer>
  )
}

export default Footer