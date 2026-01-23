import Home from './pages/Home.jsx'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Head from './component/Head.jsx';
import Footer from './component/Footer.jsx';
import Albums from './pages/Albums.jsx'
import Post from './pages/Post.jsx'
import User from './pages/User.jsx'
import Photo from './pages/Photo.jsx'

function App() {


  return (
    <>
    <BrowserRouter>
    <Head />
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/user" element={<User />}  />
        <Route path="/photo" element={<Photo />}  />
        <Route path="/post" element={<Post />}  />
        <Route path="/albums" element={<Albums />}  />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
