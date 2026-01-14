import Hero from './component/Hero.jsx'
import Head from './component/Head.jsx'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './component/Footer.jsx';


function App() {
  return (
    <>
    <BrowserRouter>
    <Head />
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path='/about' element={<About/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
    
      </Routes>
      <Footer />
    </BrowserRouter>


    </>
  )
}

export default App
