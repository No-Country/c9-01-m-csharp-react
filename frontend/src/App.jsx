import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";


function App() {

  // comprovación de los estados globales 
  const products = useSelector(state => state.products)
  console.log(products)


  return (
    
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
      
  
  )
}

const sections = ['Descuentos', 'Recomendaciones', 'Ultimos lanzamientos'];

export default App
