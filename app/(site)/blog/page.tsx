'use client';
import { useState } from 'react';
import { Plus, Edit, Trash2, Calendar, User, Eye, Search, Filter, Mic } from 'lucide-react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link'; // Import Link

interface Blog {
  id: number;
  title: string;
  content: string;
  image: string; // The URL for the image
  owner_id: number;
  owner: {
    username: string;
  } | null; // owner can be null based on the provided backend response
}

export default function BlogPage() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]); // Initialize as empty array

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/blogs/', {
        method: 'GET',
        headers: {
          'accept': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        // Map backend data to frontend Blog interface, providing defaults for missing fields
        const mappedBlogs: Blog[] = data.map((blog: any) => ({
          id: blog.id,
          title: blog.title,
          content: blog.content,
          image: blog.image || "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=250&fit=crop", // Default image
          owner_id: blog.owner_id,
          owner: blog.author ? { username: blog.author } : null, // Adjust to match backend 'author' which can be null
        }));
        setBlogs(mappedBlogs);
      } else {
        toast.error('Failed to fetch blogs.');
      }
    } catch (error) {
      toast.error('An error occurred while fetching blogs.');
      console.error('Fetch blogs error:', error);
    }
  };
  
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    owner : '' ,
    image: null as string | null,
    imageFile: null as File | null,
  });

  // Voice search simulation
  const handleVoiceSearch = () => {
    setIsListening(true);
    // Simulate voice recognition
    setTimeout(() => {
      setSearchQuery('health tips');
      setIsListening(false);
    }, 2000);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({...formData, imageFile: file, image: URL.createObjectURL(file)});
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      toast.error('You must be logged in to create a post.');
      return;
    }

    if (!formData.imageFile) {
      toast.error('Please select an image for your blog post.');
      return;
    }

    const blogFormData = new FormData();
    blogFormData.append('title', formData.title);
    blogFormData.append('content', formData.content);
    blogFormData.append('image', formData.imageFile);
    
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/blogs/blogs/?title=${encodeURIComponent(formData.title)}&content=${encodeURIComponent(formData.content)}`,
        {
          method: 'POST',
          headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
            // 'Content-Type': 'multipart/form-data', // Browser sets this automatically with FormData
          },
          body: blogFormData,
        }
      );

      if (response.ok) {
        toast.success('Blog post created successfully!');
        setShowCreateForm(false);
        setFormData({ title: '', content: '', owner: '', image: null, imageFile: null });
        fetchBlogs(); // Refresh the blog list
      } else {
        const errorData = await response.json();
        toast.error(`Failed to create post: ${errorData.detail || response.statusText}`);
      }
    } catch (error) {
      toast.error('An unexpected error occurred.');
      console.error('Create post error:', error);
    }
  };

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = searchQuery.length > 0 ? blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.content.toLowerCase().includes(searchQuery.toLowerCase()) : true;
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-20 pb-8 md:pt-24 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Blogs</h1>
            <p className="text-lg text-gray-600 mb-8">Explore our collection of health and wellness content</p>
            
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-8">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search blogs..."
                  className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  onClick={handleVoiceSearch}
                  className={`absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full ${
                    isListening ? 'bg-red-500 text-white animate-pulse' : 'text-gray-400 hover:text-blue-500'
                  }`}
                  title="Voice search"
                >
                  <Mic className="w-5 h-5" />
                </button>
              </div>
              
              {isAuthenticated && (
                <button
                  onClick={() => setShowCreateForm(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  New Post
                </button>
              )}
            </div>
          </div>

          {/* Create Form Modal */}
          {showCreateForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-xl p-6 md:p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Create New Blog Post</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Featured Image</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-blue-400 transition-colors">
                      <div className="space-y-1 text-center">
                        {formData.image ? (
                          <div className="relative">
                            <img 
                              src={formData.image} 
                              alt="Preview" 
                              className="mx-auto h-32 w-auto rounded-lg object-cover"
                            />
                            <button
                              type="button"
                              onClick={() => setFormData({...formData, image: null, imageFile: null})}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600"
                            >
                              ×
                            </button>
                          </div>
                        ) : (
                          <>
                            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className="text-sm text-gray-600">
                              <label htmlFor="image-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                                <span>Upload a file</span>
                                <input 
                                  id="image-upload" 
                                  name="image-upload" 
                                  type="file" 
                                  className="sr-only" 
                                  accept="image/*"
                                  onChange={handleImageChange}
                                />
                              </label>
                              <span className="pl-1">or drag and drop</span>
                            </div>
                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                    <textarea
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.content}
                      onChange={(e) => setFormData({...formData, content: e.target.value})}
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, image: null, imageFile: null, title: '', content: '', owner : 'Dr. Sarah Johnson'})}
                      className="px-6 py-3 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors"
                    >
                      Create Post
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogs.map((blog) => (
              <Link href={`/blog/${blog.id}`} key={blog.id}>
                <div className="group cursor-pointer">
                  <div className={` 'bg-gray-100' rounded-2xl p-6 md:p-8 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
                    {/* Category and Views removed as they're not in the backend model */}
                    <div className="flex items-center justify-between mb-4">
                      {/* blog.category || 'Uncategorized' */}
                      {/* blog.views || 0} views */}
                    </div>

                    {/* Blog Image */}
                    <div className="mb-6 rounded-lg overflow-hidden">
                      {blog.image && (
                        <img 
                          src={blog.image} 
                          alt={blog.title} 
                          className="w-full h-48 object-cover"
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="mb-6">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {blog.title}
                      </h3>
                      {/* Removed excerpt as it's not in the backend model */}
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-white bg-opacity-70 rounded-full flex items-center justify-center mr-3">
                          <User className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">
                            {blog.owner?.username || 'Unknown Author'}
                          </p>
                          {/* Removed date as it's not in the backend model */}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        {/* Edit and Delete buttons are now outside the Link to maintain their functionality */}
                        <button className="p-2 bg-white bg-opacity-70 rounded-full hover:bg-opacity-100 transition-all" onClick={(e) => e.stopPropagation()}>
                          <Edit className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="p-2 bg-white bg-opacity-70 rounded-full hover:bg-opacity-100 transition-all" onClick={(e) => e.stopPropagation()}>
                          <Trash2 className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>

                    {/* Status Indicator */}
                    {/* Removed status as it's not in the backend model */}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* No Results */}
          {blogs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No webinars found matching your criteria.</p>
              <button 
                onClick={() => {setSearchQuery('');}}
                className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}