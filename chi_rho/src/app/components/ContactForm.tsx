'use client';
import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

interface ContactFormProps {
    initialService?: string;
}

export default function ContactForm({ initialService = '' }: ContactFormProps) {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [selectedService, setSelectedService] = useState(initialService);

    useEffect(() => {
        // Check if the window object is available before initializing EmailJS
        if (typeof window !== 'undefined') {
            emailjs.init("gXzVIl4DI-2qHQmWy");
        }
    }, []);

    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        service: initialService || ''
    });

    const [submitStatus, setSubmitStatus] = useState({
        message: '',
        isError: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitStatus({ message: '', isError: false });

        // Add service to form data
        const formData = new FormData(event.currentTarget);
        if (selectedService) {
            formData.append('service', selectedService);
        }

        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
            formData as any, // Type assertion needed for FormData
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ""
        )
            .then((result) => {
                setSubmitStatus({ message: 'Your request has been sent successfully!', isError: false });
                setFormState({
                    firstName: '',
                    lastName: '',
                    email: '',
                    service: ''
                });
                setSelectedService('');

                if (formRef.current) {
                    formRef.current.reset();
                }

            }, (error) => {
                setSubmitStatus({ message: 'Failed to send request. Please try again.', isError: true });
            });
    };

    return (
        <div className="p-3 rounded-lg">
            <h1 className="text-white text-2xl mb-4">Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="firstName" className="block text-white mb-2">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full p-2 bg-slate-900 opacity-50 border-black rounded"
                        value={formState.firstName}
                        onChange={handleChange}
                        required
                        placeholder='First Name'
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="lastName" className="block text-white mb-2">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full p-2 bg-slate-900 opacity-50 border-black rounded"
                        value={formState.lastName}
                        onChange={handleChange}
                        required
                        placeholder='Last Name'
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-white mb-2">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full p-2 bg-slate-900 opacity-50 border-black rounded"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder='Email'
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="service" className="block text-white mb-2">Service:</label>
                    <select
                        id="service"
                        name="service"
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full p-2 bg-slate-900 opacity-50 border-black rounded text-white"
                    >
                        <option value="">Select a service</option>
                        <option value="in-person">In-Person Training</option>
                        <option value="online">Online Coaching</option>
                        <option value="consultation">Free Consultation</option>
                    </select>
                </div>
                <button type="submit" className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">
                    Send
                </button>
            </form>

            {submitStatus.message && (
                <p className={`mt-4 text-sm ${submitStatus.isError ? 'text-red-500' : 'text-green-500'}`}>
                    {submitStatus.message}
                </p>
            )}
        </div>
    );
}