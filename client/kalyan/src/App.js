import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Loader from './Loader';
import Privacy from './PrivacyPolicy'
import Error from './404';
import UserList from './UserList';
// Lazy load the components
const BlogDisclaimer = React.lazy(() => import('./Disclamier'));
const About = React.lazy(() => import('./About'));
const BlogComponent = React.lazy(() => import('./Card'));
const Blog = React.lazy(() => import('./Blog'));
const Login = React.lazy(() => import('./Login'));
const Create = React.lazy(() => import('./Create'));
const ErrorPage=React.lazy(()=>import('./404'));
const PrivacyPol=React.lazy(()=>import('./PrivacyPolicy'))
const User = React.lazy(() => import('./UserList'));
const App = () => {
  const [isLogged, setIsLogged] = useState(false);

  
  return (
<div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-100 to-teal-100">

      <Router>
        <div>
        <Navbar />
          <Suspense fallback={<Loader/>}>
            <Routes>
            <Route path="/" element={<BlogComponent/>} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPol/>}/>
              <Route path="/disclaimer" element={<BlogDisclaimer />} />
              <Route path="/kalyan/:id" element={<Blog />} />
              <Route path="/admin/login" element={<Login setIsLogged={setIsLogged} />} />
              <Route path="/admin/users" element={<User />} />

              <Route
                path="/admin/createblog"
                element={isLogged ? <Create isLogged={isLogged} /> : <Login setIsLogged={setIsLogged} />}
              />
              <Route path='*' element={<ErrorPage/>}/>
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
