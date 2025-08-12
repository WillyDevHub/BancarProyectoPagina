import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Main from "./components/Main/Main"
import Aside from "./components/Aside/Aside"
import Home from "./Pages/Home/Home"
import Productos from "./Pages/Productos/Articles"
import Carrito from "./Pages/Compra/Tienda"

const App = ()=>{
  return(
    <div className="Container">
      <BrowserRouter>
    <Header/>
    <Main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/productos" element={<Productos/>}/>
          <Route path="productos/tienda/:id" element={<Carrito/>}/>
        </Routes>
    </Main>
    <Aside/>
    <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App