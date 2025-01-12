import {React,useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'
import About from './About'
import BlogComponent from './Card'
import Blog from './Blog'
import Footer from './Footer';
import Login from './Login';
import Create from './Create';
const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div>
      <Router>
        <div>
          <Navbar/>
          <Routes>
          <Route path='/' element={<BlogComponent/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="/kalyan/:id" element={<Blog />} />
          <Route path="/admin/login" element={<Login setIsLogged={setIsLogged}/>} />
          <Route path="/admin/createblog" element={isLogged ? <Create islogged={isLogged} /> : <Login setIsLogged={setIsLogged} />}/>
            </Routes>
          <Footer/>
          </div>
      </Router>
      
    </div>
  )
}

export default App
