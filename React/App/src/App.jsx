
import Head from './component/Head.jsx'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx';
import Footer from './component/Footer.jsx';
import About from './pages/About.jsx'


function App() {
  return (
    <>
    <BrowserRouter>
    <Head />
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About />} />
    
      </Routes>
      <Footer />
    </BrowserRouter>


    </>
  )
}

export default App
