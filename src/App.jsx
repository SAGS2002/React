import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "../src/pages/Inicio"
import Tienda from "../src/pages/Tienda"
import Laptop from "../src/pages/Laptop"
import Movil from "../src/pages/Movil"
import './App.css'
import Header from "./componentes/Header"




function App() {

  return (
    <>
    
    <BrowserRouter>
    <Header />
      <main>
      <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/tienda" element={<Tienda/>} />
          <Route path="/laptop" element={<Laptop/>} />
          <Route path="/movil" element={<Movil/>} />
          <Route path="*" element={<Inicio/>} />
      </Routes>
      </main>
  </BrowserRouter>
  </>
  )
}

export default App
