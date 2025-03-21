
import './App.css'
// imoprt  components 
// import files 
import Carousel from './Components/Carousal/Carousal.jsx'
import Contact from './Components/Contact/Contact.jsx'
import About from './Components/About/About.jsx'
import TestimonialCard from './Components/TestimonialCard/TestimonialCard.jsx'
import Footer from './Components/Footer/Footer.jsx'
function App() {

  return (
    <>
      <Carousel />
      <About />
      <Contact />
      <TestimonialCard/>
      <Footer />
    </>
  )
}

export default App
