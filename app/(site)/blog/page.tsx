'use client';
import { useState } from 'react';
import { Plus, Edit, Trash2, Calendar, User, Eye, Search, Filter, Mic } from 'lucide-react';

export default function BlogPage() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All categories');
  const [isListening, setIsListening] = useState(false);
  
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Essential Health Tips for Busy Professionals",
      excerpt: "Learn how to maintain your health while managing a demanding work schedule with these practical strategies...",
      author: "Dr. Sarah Johnson",
      date: "2024-03-15",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
      views: 1234,
      status: "published",
      category: "Wellness",
      color: "bg-green-100"
    },
    {
      id: 2,
      title: "Understanding Mental Health in the Digital Age",
      excerpt: "Exploring the impact of technology on mental wellness and effective coping strategies for modern challenges...",
      author: "Dr. Mark Wilson",
      date: "2024-03-12", 
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
      views: 892,
      status: "published",
      category: "Mental Health",
      color: "bg-blue-100"
    },
    {
      id: 3,
      title: "Nutrition Guidelines for Optimal Health",
      excerpt: "Comprehensive guide to balanced nutrition and dietary recommendations for maintaining peak wellness...",
      author: "Dr. Emily Chen",
      date: "2024-03-10",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop",
      views: 567,
      status: "draft",
      category: "Nutrition",
      color: "bg-orange-100"
    },
    {
      id: 4,
      title: "Exercise and Cardiovascular Health",
      excerpt: "Understanding the relationship between regular exercise and heart health for long-term wellness...",
      author: "Dr. James Rodriguez",
      date: "2024-03-08",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      views: 1456,
      status: "published",
      category: "Fitness",
      color: "bg-purple-100"
    }
  ]);

  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: 'Dr. Sarah Johnson',
    category: 'Wellness',
    image: null
  });

  const categories = ['All categories', 'Wellness', 'Mental Health', 'Nutrition', 'Fitness'];

  // Voice search simulation
  const handleVoiceSearch = () => {
    setIsListening(true);
    // Simulate voice recognition
    setTimeout(() => {
      setSearchQuery('health tips');
      setIsListening(false);
    }, 2000);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData({...formData, image: e.target.result});
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const colors = ['bg-green-100', 'bg-blue-100', 'bg-orange-100', 'bg-purple-100', 'bg-pink-100'];
    const newBlog = {
      id: blogs.length + 1,
      ...formData,
      date: new Date().toISOString().split('T')[0],
      image: formData.image || "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=250&fit=crop",
      views: 0,
      status: "draft",
      color: colors[Math.floor(Math.random() * colors.length)]
    };
    setBlogs([newBlog, ...blogs]);
    setFormData({ title: '', excerpt: '', content: '', author: 'Dr. Sarah Johnson', category: 'Wellness', image: null });
    setShowCreateForm(false);
  };

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All categories' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-20 pb-8 md:pt-24 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Watch past webinars</h1>
            <p className="text-lg text-gray-600 mb-8">Explore our collection of health and wellness content</p>
            
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-8">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search webinars..."
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
              
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-3 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>
              
              <button
                onClick={() => setShowCreateForm(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                New Post
              </button>
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
                              onClick={() => setFormData({...formData, image: null})}
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {categories.slice(1).map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
                    <textarea
                      required
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.excerpt}
                      onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                    />
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
                      onClick={() => setShowCreateForm(false)}
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
            {filteredBlogs.map((blog) => (
              <div key={blog.id} className="group cursor-pointer">
                <div className={`${blog.color} rounded-2xl p-6 md:p-8 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
                  {/* Category Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block bg-white bg-opacity-70 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {blog.category}
                    </span>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Eye className="w-4 h-4 mr-1" />
                      {blog.views}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-700 mb-4 line-clamp-3 leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-white bg-opacity-70 rounded-full flex items-center justify-center mr-3">
                        <User className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{blog.author}</p>
                        <div className="flex items-center text-gray-600 text-xs">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(blog.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="p-2 bg-white bg-opacity-70 rounded-full hover:bg-opacity-100 transition-all">
                        <Edit className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 bg-white bg-opacity-70 rounded-full hover:bg-opacity-100 transition-all">
                        <Trash2 className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  {/* Status Indicator */}
                  <div className="mt-4 pt-4 border-t border-white border-opacity-30">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      blog.status === 'published' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'
                    }`}>
                      {blog.status.charAt(0).toUpperCase() + blog.status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredBlogs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No webinars found matching your criteria.</p>
              <button 
                onClick={() => {setSearchQuery(''); setSelectedCategory('All categories');}}
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