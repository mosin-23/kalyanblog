import React, { useState, useEffect } from 'react';
/* slick-carousel styles */

import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from './Loader';
import Slider from 'react-slick'; // Import react-slick for the carousel
axios.defaults.baseURL = 'http://localhost:8000/kalyan';

const BlogDetails = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [delay, setDelay] = useState(true);

  useEffect(() => {
    axios
      .get(`/${id}`) // Fetch the blog details using the ID
      .then((response) => {
        setBlog(response.data); // Set the blog data
        setLoading(false); // Set loading to false
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching blog details:', error);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    const timer = setTimeout(() => setDelay(false), 2000); // Set delay to false after 2 seconds
    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  if (delay || loading) {
    return <Loader />;
  }

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <Slider {...{settings,autoplay: true,autoplaySpeed: 3000}}>
        {blog.images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Blog Image ${index + 1}`}
              className="w-full h-64 object-cover rounded"
            />
          </div>
        ))}
      </Slider>

      <h1 className="text-2xl font-bold mt-4">{blog.title}</h1>
      <p className="text-gray-600 mt-2">
        <strong>Category:</strong> {blog.category}
      </p>
      <p className="text-gray-800 mt-4">{blog.description}</p>
      <p className="text-gray-500 text-sm mt-2">
        Posted on: {new Date(blog.createdAt).toLocaleDateString()}
      </p>

      {blog.links && (
        <>
          <p className="text-blue-400">{blog.links.link1}</p>
          <p className="text-blue-400">{blog.links.link2}</p>
          <p className="text-blue-400">{blog.links.link3}</p>
        </>
      )}
    </div>
  );
};

export default BlogDetails;
