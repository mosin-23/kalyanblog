const Blog = require("../modal/BlogModal");
const User=require("../modal/SubModal")
// Create a new blog entry
const createBlog = async (req, res) => {
  try {
    const { bid, title, category, description, images, links } = req.body;

    if (!bid || !title || !category || !description) {
      return res.status(400).json({ message: "All required fields must be provided." });
    }

    const newBlog = new Blog({
      bid,
      title,
      category,
      description,
      images: images || [],
      links: links || [],
    });

    const savedBlog = await newBlog.save();
    res.status(201).json({ message: "Blog created successfully", data: savedBlog });
  } catch (error) {
    console.error("Error creating blog:", error.message);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

// Delete a blog by ID
const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the blog
    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ message: "Blog deleted successfully", data: deletedBlog });
  } catch (error) {
    console.error("Error deleting blog:", error.message);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

const viewBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({createdAt:-1});
    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error.message);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};
const viewBlogsLatest = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 }).limit(3); // Sort by 'createdAt' in descending order and limit to 3
    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error.message);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

// View a specific blog by ID
const viewBlogById = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json(blog);
  } catch (error) {
    console.error("Error fetching blog:", error.message);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};
// Update a specific field in a blog
const updateBlogField = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body; // Key-value pairs for the fields to update

    // Find and update the blog
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { $set: updates }, // Dynamically set the fields
      { new: true, runValidators: true } // Return the updated document
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ message: "Blog updated successfully", data: updatedBlog });
  } catch (error) {
    console.error("Error updating blog:", error.message);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email,password ,role} = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const user = new User({ name, email,password ,role});
    await user.save();

    res.status(201).json({ message: "User created successfully", user });
  } catch (err) {
    res.status(500).json({ message: "Error creating user", error: err.message });
  }
};
const viewUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ message: "Error fetching user", error: err.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    if (users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ message: "Error fetching users", error: err.message });
  }
};
const verifyUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    const isPasswordCorrect = user.password === password; // Direct password comparison (not recommended for production)
    if ( user.role==='admin' && isPasswordCorrect) {
      res.json({ success: true, message: "Authentication successful" });
    } else {
      res.status(401).json({ success: false, message: "Invalid email or password" });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: "Error authenticating user", error: err.message });
  }
};

module.exports = { createBlog, deleteBlog, updateBlogField,viewBlogs,viewBlogById,viewBlogsLatest,createUser,getAllUsers,viewUserById,verifyUser };
