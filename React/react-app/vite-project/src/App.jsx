import react from 'react'
import header from './component/header.jsx'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/Home.jsx'

function app(){
  return(
    <>
    <BrowserRouter>
    <header />
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/contact" element={<Contact/>} />
    
      </Routes>
      <Footer />
    </BrowserRouter>
    </>

  )
}

export default app; 