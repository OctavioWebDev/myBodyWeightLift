'use client';

import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    service: '',
    trainingDuration: '',
    trainingFrequency: '',
    progressRate: '',
    squatLevel: '',
    experienceLevel: ''
  });
  const [status, setStatus] = useState({ message: '', isError: false });

  useEffect(() => {
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
      const templateParams = {
        name: formData.name,
        email: formData.email,
        service: formData.service || 'General Inquiry',
        message: formData.message,
        training_duration: formData.trainingDuration || 'Not specified',
        training_frequency: formData.trainingFrequency || 'Not specified',
        progress_rate: formData.progressRate || 'Not specified',
        squat_level: formData.squatLevel || 'Not specified',
        experience_level: formData.experienceLevel || 'Not specified'
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        'template_jmuzz7g',
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );

      setStatus({ message: 'Message sent successfully!', isError: false });
      setFormData({ 
        name: '', 
        email: '', 
        message: '', 
        service: '',
        trainingDuration: '',
        trainingFrequency: '',
        progressRate: '',
        squatLevel: '',
        experienceLevel: ''
      });
      formRef.current.reset();
    } catch (error) {
      console.error('Error sending email:', error);
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
        {/* Basic Info Section */}
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

        {/* Training Background Section */}
        <div className="pt-6 border-t border-gray-700">
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">Training Background</h3>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="trainingDuration" className="block text-sm font-medium text-gray-300">
                How long have you been consistently strength training?
              </label>
              <select
                id="trainingDuration"
                name="trainingDuration"
                value={formData.trainingDuration}
                onChange={handleChange}
                className="w-full px-4 py-2.5 text-white bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200"
              >
                <option value="" className="bg-gray-800">Select an option</option>
                <option value="Less than 6 months" className="bg-gray-800">Less than 6 months</option>
                <option value="6 months - 1 year" className="bg-gray-800">6 months - 1 year</option>
                <option value="1-3 years" className="bg-gray-800">1-3 years</option>
                <option value="3+ years" className="bg-gray-800">3+ years</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="trainingFrequency" className="block text-sm font-medium text-gray-300">
                How often do you currently train per week?
              </label>
              <select
                id="trainingFrequency"
                name="trainingFrequency"
                value={formData.trainingFrequency}
                onChange={handleChange}
                className="w-full px-4 py-2.5 text-white bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200"
              >
                <option value="" className="bg-gray-800">Select an option</option>
                <option value="1-2 days" className="bg-gray-800">1-2 days</option>
                <option value="3 days" className="bg-gray-800">3 days</option>
                <option value="4-5 days" className="bg-gray-800">4-5 days</option>
                <option value="6-7 days" className="bg-gray-800">6-7 days</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="progressRate" className="block text-sm font-medium text-gray-300">
                What best describes your progress in the last 3 months?
              </label>
              <select
                id="progressRate"
                name="progressRate"
                value={formData.progressRate}
                onChange={handleChange}
                className="w-full px-4 py-2.5 text-white bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200"
              >
                <option value="" className="bg-gray-800">Select an option</option>
                <option value="Making progress almost every workout" className="bg-gray-800">Making progress almost every workout</option>
                <option value="Progressing weekly or every other week" className="bg-gray-800">Progressing weekly or every other week</option>
                <option value="Progressing monthly or every few months" className="bg-gray-800">Progressing monthly or every few months</option>
                <option value="Progress is very slow or stalled" className="bg-gray-800">Progress is very slow or stalled</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="squatLevel" className="block text-sm font-medium text-gray-300">
                What is your current squat 1RM relative to bodyweight?
              </label>
              <select
                id="squatLevel"
                name="squatLevel"
                value={formData.squatLevel}
                onChange={handleChange}
                className="w-full px-4 py-2.5 text-white bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200"
              >
                <option value="" className="bg-gray-800">Select an option</option>
                <option value="Less than bodyweight" className="bg-gray-800">Less than bodyweight</option>
                <option value="1-1.5x bodyweight" className="bg-gray-800">1-1.5x bodyweight</option>
                <option value="1.5-2x bodyweight" className="bg-gray-800">1.5-2x bodyweight</option>
                <option value="2x+ bodyweight" className="bg-gray-800">2x+ bodyweight</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="experienceLevel" className="block text-sm font-medium text-gray-300">
                What best describes your training experience?
              </label>
              <select
                id="experienceLevel"
                name="experienceLevel"
                value={formData.experienceLevel}
                onChange={handleChange}
                className="w-full px-4 py-2.5 text-white bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200"
              >
                <option value="" className="bg-gray-800">Select an option</option>
                <option value="Still learning basic movements and technique" className="bg-gray-800">Still learning basic movements and technique</option>
                <option value="Comfortable with main lifts, refining technique" className="bg-gray-800">Comfortable with main lifts, refining technique</option>
                <option value="Experienced with periodization and advanced techniques" className="bg-gray-800">Experienced with periodization and advanced techniques</option>
                <option value="Very experienced, possibly competing" className="bg-gray-800">Very experienced, possibly competing</option>
              </select>
            </div>
          </div>
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
    </div>
  );
}