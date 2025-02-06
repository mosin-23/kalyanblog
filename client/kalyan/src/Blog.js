import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from './Loader';
import Slider from 'react-slick';

axios.defaults.baseURL = 'https://kalyanblog.onrender.com/kalyan';

const BlogDetails = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [delay, setDelay] = useState(true);

  useEffect(() => {
    axios
      .get(`/${id}`) // Fetch the blog details using the ID
      .then((response) => {
        setBlog(response.data); // Set the blog data
        setLoading(false); // Set loading to false
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
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Function to split text based on full stops
  const splitParagraph = (text) => {
    return text
      .split('.')
      .filter(sentence => sentence.trim() !== '')
      .map(sentence => sentence.trim() + '.');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {blog.images && blog.images.length > 0 && (
        <Slider {...settings}>
          {blog.images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Blog Image ${index + 1}`}
                className="w-full h-64 object-contain"
              />
            </div>
          ))}
        </Slider>
      )}

      {blog.links && blog.links[0] && (
        <a href={blog.links[0]} className="font-bold text-blue-500">
          {blog.links[0]}
        </a>
      )}

      <h1 className="text-2xl font-bold mt-4">{blog.title}</h1>
      <p className="text-gray-600 mt-2">
        <strong>Category:</strong> {blog.category}
      </p>

      {blog.links && blog.links[1] && (
        <a href={blog.links[1]} className="font-bold text-blue-500">
          {blog.links[1]}
        </a>
      )}

      {blog.description &&
        splitParagraph(blog.description).map((sentence, index) => (
          <p key={index} className="text-gray-700 mb-4">
            {sentence}
          </p>
        ))}

      {blog.links && blog.links[2] && (
        <a href={blog.links[2]} className="font-bold text-blue-500">
          {blog.links[2]}
        </a>
      )}

      <p className="text-gray-500 text-sm mt-2">
        Posted on: {new Date(blog.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
};

export default BlogDetails;
