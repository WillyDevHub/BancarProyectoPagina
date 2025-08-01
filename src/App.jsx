import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Header} from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Main from "./components/Main/Main"
import Aside from "./components/Aside/Aside"
import Home from "./Pages/Home/Home"
import Producto from "./Pages/Productos/Productos"

const App = ()=>{
  return(
    <BrowserRouter>
    <div className="Container">
    <Header/>
    <Main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/productos" element={<Producto/>}/>
        </Routes>
    </Main>
    <Aside/>
    <Footer/>
    </div>
      </BrowserRouter>
  )
}

export default App