import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';

axios.defaults.baseURL = 'https://kalyanblog.onrender.com/kalyan';

const BlogComponent = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [delay, setDelay] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('/blogs')
      .then((response) => {
        setBlogs(response.data);
        setFilteredBlogs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching blogs:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setDelay(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const fetchLatestBlogs = () => {
    axios
      .get('/blogslatest')
      .then((response) => {
        setFilteredBlogs(response.data);
      })
      .catch((error) => {
        console.error('Error fetching latest blogs:', error);
      });
  };

  const FetchPost = (blogId) => {
    navigate(`/kalyan/${blogId}`);
  };

  const filterBlogsByCategory = (category) => {
    if (category === 'all') {
      setFilteredBlogs(blogs);
    } else {
      const filtered = blogs.filter((blog) => blog.category === category);
      setFilteredBlogs(filtered);
    }
  };

  if (delay || loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="p-4">
      {/* Category Buttons */}
      <div className="  mt-24 mb-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        <button onClick={() => filterBlogsByCategory('all')} className="px-4 py-2 rounded-full bg-fuchsia-500 text-white">All</button>
        <button onClick={() => filterBlogsByCategory('Tech')} className="px-4 py-2 rounded-full bg-blue-500 text-white">Tech</button>
        <button onClick={() => filterBlogsByCategory('Jobs')} className="px-4 py-2 rounded-full bg-orange-500 text-white">Jobs</button>
        <button onClick={() => filterBlogsByCategory('Schemes')} className="px-4 py-2 rounded-full bg-gray-600 text-white">Schemes</button>
        <button onClick={fetchLatestBlogs} className="px-4 py-2 rounded-full bg-red-500 text-white">Latest</button>
        <button onClick={() => filterBlogsByCategory('earning')} className="px-4 py-2 rounded-full bg-black text-white">Earning</button>
        <button onClick={() => filterBlogsByCategory('Tech Hacks')} className="px-4 py-2 rounded-full bg-green-600 text-white">Tech Hacks</button>
      </div>

      {/* Blog Cards */}
      {filteredBlogs.length === 0 ? (
        <p className="text-center text-gray-500">No blogs found for this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer border border-gray-200 hover:scale-[1.02] transform hover:shadow-purple-300"
              onClick={() => FetchPost(blog._id)}
            >
              {blog.images && blog.images.length > 0 && (
                <img
                  src={blog.images[0]}
                  alt={blog.title}
                  className="w-full h-52 object-cover"
                />
              )}
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
                <p className="text-gray-600 text-sm mb-3">
                  {blog.description?.slice(0, 120)}...
                </p>
                <span className="inline-block px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                  {blog.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogComponent;
