
import './App.css'
import { useSelector } from 'react-redux'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

function App() {

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

export default App