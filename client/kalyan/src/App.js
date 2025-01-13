import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import NewsLetter from './NewsLetter';
import Loader from './Loader';

// Lazy load the components
const About = React.lazy(() => import('./About'));
const BlogComponent = React.lazy(() => import('./Card'));
const Blog = React.lazy(() => import('./Blog'));
const Login = React.lazy(() => import('./Login'));
const Create = React.lazy(() => import('./Create'));

const App = () => {
  const [isLogged, setIsLogged] = useState(false);

  // Component to conditionally render the Footer or Newsletter
  const ConditionalComponents = () => {
    const location = useLocation();

    // Show the newsletter only on the blog page ('/')
    if (location.pathname === '/') {
      return <NewsLetter />;
    }

    // Otherwise, render the footer
    return <Footer />;
  };

  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Suspense fallback={<Loader/>}>
            <Routes>
              <Route path="/" element={<BlogComponent />} />
              <Route path="/about" element={<About />} />
              <Route path="/kalyan/:id" element={<Blog />} />
              <Route path="/admin/login" element={<Login setIsLogged={setIsLogged} />} />
              <Route
                path="/admin/createblog"
                element={isLogged ? <Create isLogged={isLogged} /> : <Login setIsLogged={setIsLogged} />}
              />
            </Routes>
          </Suspense>
          <ConditionalComponents />
        </div>
      </Router>
    </div>
  );
};

export default App;
