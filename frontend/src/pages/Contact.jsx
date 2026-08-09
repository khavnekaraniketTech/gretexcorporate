import React, { useState } from 'react';

const Contact = () => {
  // 1. Form State Management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  // 2. Client-Side Validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 3. Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // 4. Handle Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus('loading');

    try {
      // UPDATED URL: Changed to relative path for Vercel
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const errorData = await response.json();
        console.error('Backend Error:', errorData);
        setStatus('error');
      }
    } catch (error) {
      console.error('Network Error:', error);
      setStatus('error');
    }
  };
  return (
    <div className="py-12 md:py-16 px-4 max-w-3xl mx-auto">

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-serif text-gray-900 dark:text-white mb-4">
          Get in Touch
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto text-sm md:text-base">
          Have questions about sizing, shipping, or our sustainable fabrics? Drop us a message and our team will get back to you within 24 hours.
        </p>
      </div>

      {/* Premium Glass Form Card */}
      <div className="bg-gradient-to-b from-gray-50/80 to-white dark:from-gray-900/60 dark:to-gray-900/20 border border-gray-200/60 dark:border-gray-800/80 shadow-sm rounded-2xl p-6 md:p-10">

        {status === 'success' ? (
          <div className="text-center py-10">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-2">Message Sent!</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">Thank you for reaching out. We will be in touch shortly.</p>
            <button onClick={() => setStatus('idle')} className="text-sm font-medium uppercase tracking-wider text-gray-900 dark:text-white underline hover:text-gray-600 dark:hover:text-gray-300">
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 transition-colors`}
                  placeholder="Jane Doe"
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 transition-colors`}
                  placeholder="jane@example.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border ${errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 transition-colors`}
                placeholder="How can we help you?"
              />
              {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 transition-colors resize-none`}
                placeholder="Write your message here..."
              ></textarea>
              {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
            </div>

            {/* Submit Button & Error Container */}
            <div className="flex flex-col items-center pt-2">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-2/3 md:w-1/2 px-8 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-white transition-all disabled:opacity-70 flex justify-center items-center"
              >
                {status === 'loading' ? (
                  <svg className="animate-spin h-5 w-5 mr-3 text-current" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : 'Send Message'}
              </button>

              {status === 'error' && (
                <p className="text-sm text-red-500 mt-4 text-center">Something went wrong. Please check your connection or try again later.</p>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;