import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from './Loader';
import Slider from 'react-slick';

axios.defaults.baseURL = 'https://kalyanblog.onrender.com/kalyan';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [delay, setDelay] = useState(true);

  useEffect(() => {
    axios
      .get(`/${id}`)
      .then((response) => {
        setBlog(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching blog details:', error);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    const timer = setTimeout(() => setDelay(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (delay || loading) {
    return <Loader />;
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Blog Not Found</h2>
          <p className="text-gray-600">The blog you're looking for doesn't exist or may have been removed.</p>
        </div>
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const splitParagraph = (text) => {
    return text
      .split('.')
      .filter(sentence => sentence.trim() !== '')
      .map(sentence => sentence.trim() + '.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 mt-24">
      <div className="max-w-4xl mx-auto">
        {/* Blog Header */}
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
            {blog.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{blog.title}</h1>
          <p className="text-gray-500">
            Posted on {new Date(blog.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>

        {/* Image Slider */}
        {blog.images && blog.images.length > 0 && (
          <div className="mb-10 rounded-xl overflow-hidden shadow-xl">
            <Slider {...settings}>
              {blog.images.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image}
                    alt={`Blog Image ${index + 1}`}
                    className="w-full h-64 md:h-96 object-cover rounded-xl"
                    style={{ borderRadius: '12px' }}
                  />
                </div>
              ))}
            </Slider>
          </div>
        )}

        {/* Blog Content */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 md:p-8">
          {blog.description &&
            splitParagraph(blog.description).map((sentence, index) => (
              <p key={index} className="text-gray-700 mb-4 text-lg leading-relaxed">
                {sentence}
              </p>
            ))}

          {/* Links Section */}
          {blog.links && blog.links.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Related Links</h3>
              <div className="flex flex-wrap gap-3">
                {blog.links.map((link, index) => (
                  link && (
                    <a
                      key={index}
                      href={link.startsWith('http') ? link : `https://${link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                    >
                      {link.includes('youtube') ? 'Watch Video' : 
                       link.includes('github') ? 'View Code' : 
                       link.includes('medium') ? 'Read Article' : 
                       `Link ${index + 1}`}
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )
                ))}
              </div>
            </div>
          )}

          {/* Tags/Category */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center">
              <span className="text-gray-600 mr-2">Category:</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                {blog.category}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
