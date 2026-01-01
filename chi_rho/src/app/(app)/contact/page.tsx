'use client';

import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useSearchParams } from 'next/navigation';

export default function ContactPage() {
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState({
    // Personal Info
    fullName: '',
    email: '',
    phone: '',
    location: '',
    age: '',
    
    // Service Interest
    service: searchParams.get('service') || '',
    
    // Training Background
    trainingExperience: '',
    currentFrequency: '',
    equipmentAccess: '',
    
    // Current Lifts (Optional but helpful)
    currentSquat: '',
    currentBench: '',
    currentDeadlift: '',
    
    // Goals & Challenges
    primaryGoal: '',
    biggestChallenge: '',
    timeline: '',
    
    // Logistics
    startDate: '',
    heardAbout: '',
    readBook: '',
    
    // Open-ended
    additionalInfo: ''
  });

  const [status, setStatus] = useState({ message: '', isError: false });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setStatus({ message: 'Sending your application...', isError: false });
    setIsSubmitting(true);

    try {
      const templateParams = {
        // Map form data to email template variables
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        location: formData.location,
        age: formData.age || 'Not provided',
        service: formData.service || 'Not specified',
        training_experience: formData.trainingExperience,
        current_frequency: formData.currentFrequency,
        equipment_access: formData.equipmentAccess,
        current_squat: formData.currentSquat || 'Not provided',
        current_bench: formData.currentBench || 'Not provided',
        current_deadlift: formData.currentDeadlift || 'Not provided',
        primary_goal: formData.primaryGoal,
        biggest_challenge: formData.biggestChallenge,
        timeline: formData.timeline,
        start_date: formData.startDate,
        heard_about: formData.heardAbout,
        read_book: formData.readBook,
        additional_info: formData.additionalInfo || 'None provided'
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        'template_jmuzz7g', // You'll need to create a new template for this
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );

      setStatus({ 
        message: 'Application submitted successfully! I\'ll review your information and get back to you within 24-48 hours.', 
        isError: false 
      });
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        location: '',
        age: '',
        service: '',
        trainingExperience: '',
        currentFrequency: '',
        equipmentAccess: '',
        currentSquat: '',
        currentBench: '',
        currentDeadlift: '',
        primaryGoal: '',
        biggestChallenge: '',
        timeline: '',
        startDate: '',
        heardAbout: '',
        readBook: '',
        additionalInfo: ''
      });
      
      formRef.current?.reset();
      
      // Scroll to success message
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
    } catch (error) {
      console.error('Error sending application:', error);
      setStatus({ 
        message: 'Failed to submit application. Please try emailing me directly at chirhostrength@gmail.com', 
        isError: true 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
            Coaching Application
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-4">
            Fill out this application so I can learn about your training background and goals. 
            This helps me determine if we're a good fit and which coaching option works best for you.
          </p>
          <p className="text-sm text-gray-400">
            <strong>Response time:</strong> I'll review your application and respond within 24-48 hours.
          </p>
        </div>

        {/* Status Message */}
        {status.message && (
          <div className={`mb-8 p-6 rounded-lg border ${
            status.isError 
              ? 'bg-red-900/20 text-red-400 border-red-500/30' 
              : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30'
          }`}>
            <p className="font-semibold">{status.message}</p>
          </div>
        )}

        {/* Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Personal Information</h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-white bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-white bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-white bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-2">
                    Location (City, State) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-white bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200"
                    placeholder="Toledo, OH"
                  />
                </div>

                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-300 mb-2">
                    Age (Optional)
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    min="13"
                    max="100"
                    className="w-full px-4 py-3 text-white bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200"
                    placeholder="30"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Service Interest */}
          <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Which Service Interests You?</h2>
            
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                Coaching Package <span className="text-red-500">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 text-white bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200"
              >
                <option value="">Select a coaching option...</option>
                <optgroup label="Online Coaching" className="bg-gray-800">
                  <option value="foundation">Foundation Program ($97/month)</option>
                  <option value="strength-athlete">Strength Athlete Coaching ($247/month)</option>
                  <option value="elite">Elite Performance Coaching ($447/month)</option>
                </optgroup>
                <optgroup label="In-Person (Toledo Area)" className="bg-gray-800">
                  <option value="in-person">In-Person Training (starting $75/session)</option>
                  <option value="hybrid">Hybrid Coaching ($497/month)</option>
                </optgroup>
                <optgroup label="Other" className="bg-gray-800">
                  <option value="competition-prep">Competition Prep Intensive ($799)</option>
                  <option value="consultation">Free Consultation (just exploring options)</option>
                </optgroup>
              </select>
            </div>
          </div>

          {/* Training Background */}
          <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Training Background</h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="trainingExperience" className="block text-sm font-medium text-gray-300 mb-2">
                  How long have you been training consistently? <span className="text-red-500">*</span>
                </label>
                <select
                  id="trainingExperience"
                  name="trainingExperience"
                  value={formData.trainingExperience}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-white bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200"
                >
                  <option value="">Select...</option>
                  <option value="beginner">Less than 6 months</option>
                  <option value="experienced-beginner">6 months - 1 year</option>
                  <option value="intermediate">1-3 years</option>
                  <option value="advanced">3+ years</option>
                </select>
              </div>

              <div>
                <label htmlFor="currentFrequency" className="block text-sm font-medium text-gray-300 mb-2">
                  How many days per week can you train? <span className="text-red-500">*</span>
                </label>
                <select
                  id="currentFrequency"
                  name="currentFrequency"
                  value={formData.currentFrequency}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-white bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200"
                >
                  <option value="">Select...</option>
                  <option value="1-2">1-2 days per week</option>
                  <option value="3">3 days per week</option>
                  <option value="4">4 days per week</option>
                  <option value="5+">5+ days per week</option>
                </select>
              </div>

              <div>
                <label htmlFor="equipmentAccess" className="block text-sm font-medium text-gray-300 mb-2">
                  What equipment do you have access to? <span className="text-red-500">*</span>
                </label>
                <select
                  id="equipmentAccess"
                  name="equipmentAccess"
                  value={formData.equipmentAccess}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-white bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200"
                >
                  <option value="">Select...</option>
                  <option value="full-gym">Full gym with barbell, rack, plates</option>
                  <option value="home-barbell">Home gym with barbell and basic equipment</option>
                  <option value="dumbbells">Dumbbells only</option>
                  <option value="bodyweight">Bodyweight/minimal equipment</option>
                  <option value="planning">Planning to get equipment</option>
                </select>
              </div>
            </div>
          </div>

          {/* Current Lifts */}
          <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Current Lifts (Optional but Helpful)</h2>
            <p className="text-sm text-gray-400 mb-4">
              If you know your approximate 1-rep max or working sets for these lifts, it helps me understand your current strength level.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="currentSquat" className="block text-sm font-medium text-gray-300 mb-2">
                  Squat (lbs)
                </label>
                <input
                  type="text"
                  id="currentSquat"
                  name="currentSquat"
                  value={formData.currentSquat}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-white bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200"
                  placeholder="e.g., 225 lbs"
                />
              </div>

              <div>
                <label htmlFor="currentBench" className="block text-sm font-medium text-gray-300 mb-2">
                  Bench Press (lbs)
                </label>
                <input
                  type="text"
                  id="currentBench"
                  name="currentBench"
                  value={formData.currentBench}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-white bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200"
                  placeholder="e.g., 185 lbs"
                />
              </div>

              <div>
                <label htmlFor="currentDeadlift" className="block text-sm font-medium text-gray-300 mb-2">
                  Deadlift (lbs)
                </label>
                <input
                  type="text"
                  id="currentDeadlift"
                  name="currentDeadlift"
                  value={formData.currentDeadlift}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-white bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200"
                  placeholder="e.g., 315 lbs"
                />
              </div>
            </div>
          </div>

          {/* Goals & Challenges */}
          <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Goals & Challenges</h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="primaryGoal" className="block text-sm font-medium text-gray-300 mb-2">
                  What's your primary training goal? <span className="text-red-500">*</span>
                </label>
                <select
                  id="primaryGoal"
                  name="primaryGoal"
                  value={formData.primaryGoal}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-white bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200"
                >
                  <option value="">Select...</option>
                  <option value="general-strength">Build general strength</option>
                  <option value="powerlifting-compete">Compete in powerlifting</option>
                  <option value="powerlifting-hobby">Powerlifting as a hobby (no competition)</option>
                  <option value="athletic-performance">Improve athletic performance</option>
                  <option value="body-composition">Improve body composition</option>
                  <option value="other">Other (explain in additional info below)</option>
                </select>
              </div>

              <div>
                <label htmlFor="biggestChallenge" className="block text-sm font-medium text-gray-300 mb-2">
                  What's your biggest challenge right now? <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="biggestChallenge"
                  name="biggestChallenge"
                  value={formData.biggestChallenge}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 text-white bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200"
                  placeholder="e.g., Not making progress on my squat, don't know if my program is working, need accountability, etc."
                />
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                  What's your timeline/commitment level? <span className="text-red-500">*</span>
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-white bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200"
                >
                  <option value="">Select...</option>
                  <option value="trying-month">Just trying it out for a month</option>
                  <option value="3-6-months">Committed to 3-6 months</option>
                  <option value="long-term">Long-term (6+ months)</option>
                  <option value="not-sure">Not sure yet, exploring options</option>
                </select>
              </div>
            </div>
          </div>

          {/* Logistics */}
          <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Logistics</h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-300 mb-2">
                  When do you want to start? <span className="text-red-500">*</span>
                </label>
                <select
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-white bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200"
                >
                  <option value="">Select...</option>
                  <option value="asap">As soon as possible</option>
                  <option value="next-2-weeks">Within the next 2 weeks</option>
                  <option value="next-month">Within the next month</option>
                  <option value="future">Just exploring for future consideration</option>
                </select>
              </div>

              <div>
                <label htmlFor="heardAbout" className="block text-sm font-medium text-gray-300 mb-2">
                  How did you hear about Chi-Rho Power and Strength? <span className="text-red-500">*</span>
                </label>
                <select
                  id="heardAbout"
                  name="heardAbout"
                  value={formData.heardAbout}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-white bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200"
                >
                  <option value="">Select...</option>
                  <option value="book">Read "Shut Up and Lift"</option>
                  <option value="youtube">YouTube</option>
                  <option value="instagram">Instagram</option>
                  <option value="facebook">Facebook</option>
                  <option value="google">Google search</option>
                  <option value="referral">Friend/referral</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="readBook" className="block text-sm font-medium text-gray-300 mb-2">
                  Have you read "Shut Up and Lift"? <span className="text-red-500">*</span>
                </label>
                <select
                  id="readBook"
                  name="readBook"
                  value={formData.readBook}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-white bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200"
                >
                  <option value="">Select...</option>
                  <option value="yes-full">Yes, read the full book</option>
                  <option value="yes-partial">Yes, read parts of it</option>
                  <option value="no-plan">No, but I plan to</option>
                  <option value="no">No</option>
                </select>
                {formData.readBook === 'yes-full' || formData.readBook === 'yes-partial' ? (
                  <p className="mt-2 text-sm text-yellow-400">
                    ✓ Remember: Book buyers get 15% off first month of coaching!
                  </p>
                ) : null}
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Anything Else?</h2>
            
            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-300 mb-2">
                Is there anything else I should know?
              </label>
              <p className="text-sm text-gray-400 mb-3">
                Previous injuries, specific concerns, schedule constraints, questions about coaching, etc.
              </p>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 text-white bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition duration-200"
                placeholder="Optional - share any additional context that would help me understand your situation..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800 text-center">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full md:w-auto px-12 py-4 text-lg font-bold text-black bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                <>
                  Submit Application
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
            <p className="text-gray-400 text-sm mt-4">
              By submitting, you agree to receive email communication about coaching. No spam, no hard sell.
            </p>
          </div>
        </form>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            Questions? Email me directly at{' '}
            <a href="mailto:chirhostrength@gmail.com" className="text-yellow-400 hover:text-yellow-300">
              chirhostrength@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}