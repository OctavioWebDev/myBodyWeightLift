'use client';
import React, { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
    const formRef = useRef<HTMLFormElement | null>(null);

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

        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
            event.currentTarget,
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ""
        )
            .then((result) => {
                console.log('Email successfully sent!', result.text);
                setSubmitStatus({ message: 'Your request has been sent successfully!', isError: false });
                setFormState({
                    firstName: '',
                    lastName: '',
                    email: '',
                });

                if (formRef.current) {
                    formRef.current.reset();
                }

            }, (error) => {
                console.log('Failed to send the email:', error.text);
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