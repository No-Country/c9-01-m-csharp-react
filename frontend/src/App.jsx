import Header from './Components/Header'
import Footer from "./Components/Footer.jsx";
import BookCarouselSection from "./Components/BookCarouselSection.jsx";
import Categories from "./Components/Categories.jsx";

function App() {
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
