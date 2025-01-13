import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'https://kalyanblog.onrender.com/kalyan';

const Create = ({ setIsLogged }) => {
  const [blogData, setBlogData] = useState({
    title: '',
    description: '',
    category: '',
    images: [''], // Start with an empty array for images
    links: [''], // Start with an empty array for links
    bid: '', // Add bid field to state
  });
  const [isLoading, setIsLoading] = useState(false); // State for loading
  const nav = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('success'); // Remove the success flag from localStorage
    nav('/admin/login'); // Redirect to login page
  };

  const handleChange = (e, index, type) => {
    const { name, value } = e.target;
    if (type === 'images') {
      const updatedImages = [...blogData.images];
      updatedImages[index] = value;
      setBlogData({ ...blogData, images: updatedImages });
    } else if (type === 'links') {
      const updatedLinks = [...blogData.links];
      updatedLinks[index] = value;
      setBlogData({ ...blogData, links: updatedLinks });
    } else {
      setBlogData({ ...blogData, [name]: value });
    }
  };

  const addNewField = (type) => {
    if (type === 'images') {
      setBlogData({ ...blogData, images: [...blogData.images, ''] });
    } else if (type === 'links') {
      setBlogData({ ...blogData, links: [...blogData.links, ''] });
    }
  };

  const createBlogPost = async () => {
    setIsLoading(true); // Set loading state to true while creating the blog post
    try {
      const resp = await axios.post('/addblog', {
        title: blogData.title,
        description: blogData.description,
        category: blogData.category,
        images: blogData.images,
        links: blogData.links,
        bid: blogData.bid, // Include bid field in request
      });
      SuccessBlog();
    } catch (error) {
      console.error('Error Creating Blog Post', error);
      ErrorBlog();
    } finally {
      setIsLoading(false); // Reset loading state after request completes
    }
  };

  const ErrorBlog = () => {
    toast.error('Error Creating Blog Post!', { position: 'top-center' });
  };

  const SuccessBlog = () => {
    toast.success('Blog Post Successfully Created!', { position: 'top-center' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      blogData.title &&
      blogData.description &&
      blogData.category &&
      blogData.images.length > 0 &&
      blogData.bid
    ) {
      createBlogPost();
    } else {
      toast.error('Please fill all required fields to create a blog post.', { position: 'top-center' });
    }
  };

  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <div className="CreateBlog flex flex-col mt-8 border border-2 py-4 rounded-lg border-teal-300 hover:shadow-teal-400 max-w-fit px-10 ml-28 hover:shadow-lg hover:shadow-emerald-400 mb-10 hover:border-2 hover:border-purple-400">
          <div className="flex flex-row justify-center">
            <h1 className="font-bold mb-4 mr-2">Create a Blog Post</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center">
              <div className="w-fit">
                <label htmlFor="title" className="block mb-1 font-medium">Title</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Enter Blog Title"
                  className="border border-2 w-full px-2 py-1 rounded-md focus:outline-blue-500"
                  value={blogData.title}
                  onChange={handleChange}
                />
              </div>
              <div className="w-fit">
                <label htmlFor="category" className="block mb-1 font-medium">Category</label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  placeholder="Enter Category"
                  className="border border-2 w-full px-2 py-1 rounded-md focus:outline-blue-500"
                  value={blogData.category}
                  onChange={handleChange}
                />
              </div>

              {/* Render images inputs */}
              {blogData.images.map((image, index) => (
                <div className="w-fit" key={index}>
                  <label htmlFor={`image-${index}`} className="block mb-1 font-medium">Image URL {index + 1}</label>
                  <input
                    type="text"
                    name="image"
                    id={`image-${index}`}
                    placeholder="Enter Image URL"
                    className="border border-2 w-full px-2 py-1 rounded-md focus:outline-blue-500"
                    value={image}
                    onChange={(e) => handleChange(e, index, 'images')}
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={() => addNewField('images')}
                className="border border-2 px-4 py-2 mt-2 bg-teal-500 rounded-xl hover:bg-teal-600 text-white"
              >
                Add Another Image
              </button>

              {/* Render links inputs */}
              {blogData.links.map((link, index) => (
                <div className="w-fit" key={index}>
                  <label htmlFor={`link-${index}`} className="block mb-1 font-medium">Link URL {index + 1}</label>
                  <input
                    type="text"
                    name="link"
                    id={`link-${index}`}
                    placeholder="Enter Link URL"
                    className="border border-2 w-full px-2 py-1 rounded-md focus:outline-blue-500"
                    value={link}
                    onChange={(e) => handleChange(e, index, 'links')}
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={() => addNewField('links')}
                className="border border-2 px-4 py-2 mt-2 bg-teal-500 rounded-xl hover:bg-teal-600 text-white"
              >
                Add Another Link
              </button>

              {/* Bid input field */}
              <div className="w-fit">
                <label htmlFor="bid" className="block mb-1 font-medium">Bid Amount</label>
                <input
                  type="number"
                  name="bid"
                  id="bid"
                  placeholder="Enter Bid Amount"
                  className="border border-2 w-full px-2 py-1 rounded-md focus:outline-blue-500"
                  value={blogData.bid}
                  onChange={handleChange}
                  min="0" // Ensure bid amount is a positive number
                />
              </div>

              <div className="w-fit">
                <label htmlFor="content" className="block mb-1 font-medium">Content</label>
                <textarea
                  name="description"
                  id="description"
                  placeholder="Enter Blog Content"
                  className="border border-2 w-full px-2 py-1 rounded-md focus:outline-blue-500"
                  value={blogData.description}
                  onChange={handleChange}
                />
              </div>
              <button 
                className={`border border-2 px-4 py-2 mt-4 ${isLoading ? 'bg-gray-500' : 'bg-emerald-500'} rounded-xl hover:bg-emerald-600 text-white`} 
                disabled={isLoading}
              >
                {isLoading ? 'Creating...' : 'Create Blog Post'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
      <button
        onClick={handleLogout}
        className="flex  px-4 py-2 mt-4 bg-red-500 rounded-xl hover:bg-red-600 text-white items-center"
      >
        Logout
      </button>
    </>
  );
};

export default Create;
