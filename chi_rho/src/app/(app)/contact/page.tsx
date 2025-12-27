'use client';

import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    service: ''
  });
  const [status, setStatus] = useState({ message: '', isError: false });

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ message: 'Sending...', isError: false });

    if (!formRef.current) return;

    const submitButton = formRef.current.querySelector('button[type="submit"]') as HTMLButtonElement;
    if (submitButton) {
      submitButton.disabled = true;
    }

    try {
      // Prepare the template parameters
      const templateParams = {
        name: formData.name,
        email: formData.email,
        service: formData.service || 'General Inquiry',
        message: formData.message
      };

      // Send admin notification (EmailJS auto-reply handles user confirmation)
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        'template_jmuzz7g',
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );

      setStatus({ message: 'Message sent successfully!', isError: false });
      setFormData({ name: '', email: '', message: '', service: '' });
      formRef.current.reset();
    } catch (error) {
      setStatus({ 
        message: 'Failed to send message. Please try again later.', 
        isError: true 
      });
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">Get In Touch</h1>
        <p className="text-lg text-gray-300">Have questions or want to work together? We'd love to hear from you.</p>
      </div>

      {status.message && (
        <div className={`mb-6 p-4 rounded-lg ${status.isError ? 'bg-red-900/20 text-red-400' : 'bg-yellow-500/10 text-yellow-400'} border ${status.isError ? 'border-red-500/30' : 'border-yellow-500/30'}`}>
          {status.message}
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800 shadow-xl">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-yellow-400">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 text-white bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200 placeholder-gray-500"
            placeholder="John Doe"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-yellow-400">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 text-white bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200 placeholder-gray-500"
            placeholder="you@example.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="service" className="block text-sm font-medium text-yellow-400">Service</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2.5 text-white bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200 appearance-none"
          >
            <option value="" className="bg-gray-800">Select a service</option>
            <option value="Online Coaching" className="bg-gray-800">Online Coaching</option>
            <option value="In-Person Training" className="bg-gray-800">In-Person Training</option>
            <option value="Other" className="bg-gray-800">Other Inquiry</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-yellow-400">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 text-white bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200 placeholder-gray-500"
            rows={5}
            placeholder="Tell us how we can help you..."
          />
        </div>

        <div className="pt-2">
          <button 
            type="submit" 
            className="w-full flex justify-center items-center px-6 py-3.5 text-base font-bold text-black bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send Message
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </form>
      
      {/* Social Media Links */}
      <div className="mt-16 text-center">
        <h3 className="text-xl font-semibold text-yellow-400 mb-4">Connect With Us</h3>
        <div className="flex justify-center space-x-6">
          {/* Facebook */}
          <a 
            href="https://www.facebook.com/profile.php?id=61585916301651" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
            aria-label="Facebook"
          >
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
          
          {/* Instagram */}
          <a 
            href="https://www.instagram.com/chirhostrength/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
            aria-label="Instagram"
          >
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.976.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
          </a>
          
          {/* YouTube */}
          <a 
            href="https://www.youtube.com/@1faith419" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
            aria-label="YouTube"
          >
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23.499 6.203a3.003 3.003 0 00-2.113-2.113C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.386.545A3.003 3.003 0 00.5 6.203C0 8.084 0 12 0 12s0 3.916.499 5.797a3.003 3.003 0 002.113 2.113c1.88.545 9.386.545 9.386.545s7.505 0 9.386-.545a3.003 3.003 0 002.113-2.113C24 15.916 24 12 24 12s0-3.916-.501-5.797zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}