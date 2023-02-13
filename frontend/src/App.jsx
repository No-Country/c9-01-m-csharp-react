import Header from './Components/Header'
import Footer from "./Components/Footer.jsx";
import BookCarouselSection from "./Components/BookCarouselSection.jsx";

function App() {
  return (
    <>
      <Header/>
      {sections.map(section => {return <BookCarouselSection name={section} />})}
      <Footer />
    </>
  )
}

const sections = ['Descuentos', 'Recomendaciones', 'Ultimos lanzamientos'];

export default App
