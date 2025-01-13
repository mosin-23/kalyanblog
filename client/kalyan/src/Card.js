import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';
axios.defaults.baseURL = 'https://kalyanblog.onrender.com/kalyan';

const BlogComponent = () => {
  const [blogs, setBlogs] = useState([]); // State to hold the fetched blog data
  const [filteredBlogs, setFilteredBlogs] = useState([]); // State to hold filtered blog data
  const [loading, setLoading] = useState(true); // Loading state
  const [latestBlogs, setLatestBlogs] = useState([]); // State to hold the latest blog data
  const navigate = useNavigate(); 
  const [delay, setDelay] = useState(true);

  var blogid;

   // Fetch all blogs from the API
useEffect(() => {
    axios
      .get('/blogs') // You only need to provide the path, baseURL is already set
      .then((response) => {
        setBlogs(response.data); // Set the fetched blog data
        console.log(response.data)
        setFilteredBlogs(response.data); // Set the filtered blogs to all blogs initially
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error('There was an error fetching the blogs:', error);
        setLoading(false); // Set loading to false in case of an error
      });
    },[]);
  useEffect(() => {
      const timer = setTimeout(() => setDelay(false), 2000); // Set delay to false after 2 seconds
      return () => clearTimeout(timer); // Clean up the timer
    }, []);

  // Fetch the latest blogs from the API when "Latest" is clicked
  const fetchLatestBlogs = () => {
    axios
      .get('/blogslatest') // Fetch latest blogs from the /blogslatest endpoint
      .then((response) => {
        setLatestBlogs(response.data); // Update the latest blogs
        setFilteredBlogs(response.data); // Filter blogs by latest blogs
      })
      .catch((error) => {
        console.error('There was an error fetching the latest blogs:', error);
      });
  };

  const FetchPost = (blogId) => {
    navigate(`/kalyan/${blogId}`); 
  };
  // Function to filter blogs based on category
  const filterBlogsByCategory = (category) => {
    if (category === 'all') {
      setFilteredBlogs(blogs); // If "All" is clicked, show all blogs
    } else {
      const filtered = blogs.filter((blog) => blog.category === category);
      setFilteredBlogs(filtered); // Filter blogs by selected category
    }
  };

  if (delay || loading) {
    return (
      <div className="flex justify-center items-center">
        <Loader/>
      </div>
    );
  }

  return (
    <>
    <div className="p-1">
  {/* Category Buttons */}
  <div className="mb-6 grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <button
      onClick={() => filterBlogsByCategory('all')}
      className="px-4 py-2 rounded-full bg-fuchsia-500 text-white"
    >
      All
    </button>
    <button
      onClick={() => filterBlogsByCategory('Tech')}
      className="px-4 py-2 rounded-full bg-blue-500 text-white"
    >
      Tech
    </button>
    <button
      onClick={()=>{fetchLatestBlogs()}}// Fetch latest blogs when "Latest" is clicked
      className="px-4 py-2 rounded-full bg-red-500 text-white"
    >
      Latest
    </button>
    <button
      onClick={() => filterBlogsByCategory('Lifestyle')}
      className="px-4 py-2 rounded-full bg-black text-white"
    >
      Lifestyle
    </button>
    <button
      onClick={() => filterBlogsByCategory('Tech Hacks')}
      className="px-15 py-2  rounded-full bg-emerald-500 text-white"
    >
      Tech Hacks
    </button>
  </div>
</div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10 ml-8 justify-center">
        {filteredBlogs.map((blog, index) => (
          <div key={index} className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white ">
            {/* Blog Image */}
            {blog.images.length > 0 && (
              <img className="w-full h-48 object-cover" src={blog.images[0]} alt={blog.title} />
            )}

            <div className="px-6 py-4">
              {/* Blog Title */}
              <h2 className="text-xl font-semibold text-gray-800 font-serif  ">{blog.title}</h2>

              {/* Blog Category and Description */}
              <p className="text-gray-600 text-sm mt-2"><strong>Category:</strong> {blog.category}</p>
              <p className="text-gray-600 text-sm mt-2 truncate">{blog.description}</p>

              {/* Blog Created At */}
              <p className="text-gray-500 text-xs mt-2">Posted on: {new Date(blog.createdAt).toLocaleDateString()}</p>
            </div>
            <button className="px-4 px-2 p-2 m-2 rounded-full bg-black text-white" onClick={()=>{FetchPost(blog._id)}}>
              Read More..
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
export default BlogComponent;
