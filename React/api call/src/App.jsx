import Home from './pages/Home.jsx'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Head from './component/Head.jsx';
import Footer from './component/Footer.jsx';

function App() {


  return (
    <>
    <BrowserRouter>
    <Head />
      <Routes>
        <Route path="/" element={<Home />}  />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
