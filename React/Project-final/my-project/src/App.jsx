import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/Home.jsx'
import Footer from './component/Footer.jsx'
import Navigation from './component/Navigation.jsx';
import User from './pages/User.jsx';
import Profile from './pages/Profile.jsx'
import Post from './pages/Post.jsx'
import Albums from './pages/albums.jsx'
import Photo from './pages/Photo.jsx';
function App() {


  return (
    <>
      <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/user" element={<User />} />
        <Route path="/user/:id" element={<Profile />} />
        <Route path="/post" element={<Post />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/photo" element={<Photo />} /> 
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
