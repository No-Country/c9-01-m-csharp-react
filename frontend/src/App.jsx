import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";


function App() {

  // comprovación de los estados globales 
  const products = useSelector(state => state.products)
  console.log(products)


 
  return (
    
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </div>
    
  )
}

const sections = ['Descuentos', 'Recomendaciones', 'Ultimos lanzamientos'];

export default App
