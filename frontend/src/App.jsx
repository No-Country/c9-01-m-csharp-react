
import './App.css'
<<<<<<< HEAD
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
      

  
=======
import Header from './Components/Header'

function App() {


  return (
    <>
      <Header/>
      
    </>
>>>>>>> ad969895d6af1c9e77d66c7f4ce8aaa1c07e03d8
  )
}

export default App