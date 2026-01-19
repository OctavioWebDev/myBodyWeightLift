'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaAmazon, FaCheck, FaBookOpen, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function JournalPage() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const carouselImages = [
        {
            src: '/assets/images/strength-training-journal-cover.jpg',
            alt: 'Strength Training Journal Cover'
        },
        {
            src: '/assets/images/journal-daily-log.png',
            alt: 'Daily Training Log Sample'
        },
        {
            src: '/assets/images/journal-weekly-checkin.png',
            alt: 'Weekly Check-In Sample'
        },
        {
            src: '/assets/images/journal-monthly-review.png',
            alt: 'Monthly Review Sample'
        },
        {
            src: '/assets/images/journal-annual-goals.png',
            alt: 'Annual Goals Sample'
        }
    ]

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
    }

    const features = [
        'Daily training logs with RPE and rest tracking',
        'Weekly check-ins for progress monitoring',
        'Monthly reflections and goal setting',
        'Annual goal planning pages',
        'PR tracking for all major lifts',
        'Body composition tracking',
        'Pre-workout readiness assessment',
        'Post-workout session rating',
        'Habit tracking (sleep, nutrition, training frequency)',
        '450+ pages of structured tracking'
    ]

    const whoItsFor = [
        {
            title: 'Serious Lifters',
            description: 'Track every set, rep, and PR. See your progress over time with detailed logs.'
        },
        {
            title: 'Powerlifters',
            description: 'Monitor strength gains, plan meet prep, and track competition goals.'
        },
        {
            title: 'Data-Driven Athletes',
            description: 'Use RPE, volume tracking, and weekly summaries to optimize your training.'
        },
        {
            title: 'Coaches & Clients',
            description: 'Perfect for in-person coaching sessions and accountability.'
        }
    ]

    const samplePages = [
        {
            title: 'Daily Training Log',
            description: 'Track exercises, sets, reps, weight, RPE, rest periods, and notes',
            image: '/assets/images/journal-daily-log.png'
        },
        {
            title: 'Weekly Check-In',
            description: 'Monitor volume, PRs, body composition, sleep, and weekly reflections',
            image: '/assets/images/journal-weekly-checkin.png'
        },
        {
            title: 'Monthly Review',
            description: 'Track strength progress, reflect on wins/challenges, set next month goals',
            image: '/assets/images/journal-monthly-review.png'
        },
        {
            title: 'Annual Goals',
            description: 'Set strength goals, skill goals, body comp targets, and competition plans',
            image: '/assets/images/journal-annual-goals.png'
        }
    ]

    return (
        <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">
                        Strength Training Journal
                    </h1>
                    <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
                    <p className="text-2xl md:text-3xl text-white mb-4">
                        Track Every Rep. See Every Gain.
                    </p>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        The only training log built specifically for strength athletes who take their progress seriously.
                    </p>
                </div>

                {/* Journal Carousel + Quick Pitch */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div className="flex justify-center">
                        <div className="relative w-full max-w-md">
                            {/* Carousel Container */}
                            <div className="relative w-80 h-96 mx-auto bg-gray-800 rounded-xl overflow-hidden shadow-2xl border-4 border-yellow-500/30">
                                {/* Images */}
                                {carouselImages.map((img, index) => (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 transition-opacity duration-500 ${
                                            index === currentSlide ? 'opacity-100' : 'opacity-0'
                                        }`}
                                    >
                                        <Image
                                            src={img.src}
                                            alt={img.alt}
                                            fill
                                            className="object-cover"
                                            priority={index === 0}
                                        />
                                    </div>
                                ))}

                                {/* Navigation Buttons */}
                                <button
                                    onClick={prevSlide}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-yellow-400 p-2 rounded-full transition-colors z-10"
                                    aria-label="Previous image"
                                >
                                    <FaChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-yellow-400 p-2 rounded-full transition-colors z-10"
                                    aria-label="Next image"
                                >
                                    <FaChevronRight className="w-6 h-6" />
                                </button>

                                {/* Dots Indicator */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                    {carouselImages.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentSlide(index)}
                                            className={`w-2 h-2 rounded-full transition-all ${
                                                index === currentSlide 
                                                    ? 'bg-yellow-400 w-8' 
                                                    : 'bg-gray-400 hover:bg-gray-300'
                                            }`}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Image Caption */}
                            <p className="text-center text-gray-400 text-sm mt-4">
                                {carouselImages[currentSlide].alt}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white">
                            Your Progress, Documented
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Apps crash. Phones get lost. But a physical journal? That&apos;s permanent.
                            This isn&apos;t just a notebook—it&apos;s a <strong className="text-yellow-400">complete
                                training system</strong> designed to track everything that matters.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Daily logs. Weekly check-ins. Monthly reviews. Annual goals. PR tracking.
                            Body composition. Sleep and nutrition habits. Everything you need to see your
                            progress and stay accountable.
                        </p>

                        <div className="bg-yellow-500/10 border-2 border-yellow-500/30 rounded-lg p-6">
                            <p className="text-yellow-400 font-bold text-xl mb-2">450+ Pages</p>
                            <p className="text-white text-lg">
                                Over a year of detailed training logs, reflections, and progress tracking.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full">
                            <a
                                href="https://www.amazon.com/dp/B0GDY9XK56"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 sm:max-w-xs bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg transition duration-200 text-center shadow-lg hover:shadow-xl hover:scale-105 transform flex items-center justify-center text-sm md:text-base"
                            >
                                <FaAmazon className="mr-2 text-xl md:text-2xl" />
                                Buy on Amazon
                            </a>
                            <Link
                                href="/book"
                                className="flex-1 sm:max-w-xs bg-transparent border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-900 text-yellow-500 font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg transition duration-200 text-center text-sm md:text-base"
                            >
                                View the Book
                            </Link>
                        </div>
                    </div>
                </div>

                {/* What's Inside */}
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-gray-800 mb-16">
                    <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
                        What&apos;s Inside
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start">
                                <FaCheck className="w-6 h-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                                <p className="text-gray-300 text-lg">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sample Pages Preview */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
                        Sample Pages
                    </h2>
                    <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
                        See what makes this journal different from generic training logs.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {samplePages.map((page, index) => (
                            <div
                                key={index}
                                className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-yellow-500/30 transition-colors"
                            >
                                <div className="relative h-64 bg-gray-800">
                                    {/* Placeholder - replace with actual images */}
                                    <div className="flex items-center justify-center h-full">
                                        <FaBookOpen className="w-16 h-16 text-gray-600" />
                                    </div>
                                    <Image
                                        src={page.image}
                                        alt={page.title}
                                        fill
                                        className="object-contain p-4"
                                    />

                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-yellow-400 mb-2">{page.title}</h3>
                                    <p className="text-gray-300">{page.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Who It's For */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
                        Who This Journal Is For
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {whoItsFor.map((item, index) => (
                            <div
                                key={index}
                                className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-yellow-500/30 transition-colors"
                            >
                                <h3 className="text-xl font-bold text-yellow-400 mb-3">{item.title}</h3>
                                <p className="text-gray-300">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why Physical Journal */}
                <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 rounded-xl p-8 md:p-12 border border-yellow-500/20 mb-16">
                    <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
                        Why Not Just Use an App?
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-6">
                        <div className="bg-black/30 p-6 rounded-lg border-l-4 border-yellow-500">
                            <h3 className="text-xl font-bold text-white mb-3">No Distractions</h3>
                            <p className="text-gray-300">
                                Pull out your phone to log a set and suddenly you&apos;re checking Instagram.
                                A journal keeps you focused on training.
                            </p>
                        </div>

                        <div className="bg-black/30 p-6 rounded-lg border-l-4 border-yellow-500">
                            <h3 className="text-xl font-bold text-white mb-3">Permanent Record</h3>
                            <p className="text-gray-300">
                                Apps shut down. Companies go bankrupt. Phones get lost. This journal will be here
                                in 5 years when you want to look back at where you started.
                            </p>
                        </div>

                        <div className="bg-black/30 p-6 rounded-lg border-l-4 border-yellow-500">
                            <h3 className="text-xl font-bold text-white mb-3">Better Reflection</h3>
                            <p className="text-gray-300">
                                Writing by hand forces you to think. Weekly and monthly check-ins aren&apos;t just data—they&apos;re
                                moments to actually reflect on your training.
                            </p>
                        </div>

                        <div className="bg-black/30 p-6 rounded-lg border-l-4 border-yellow-500">
                            <h3 className="text-xl font-bold text-white mb-3">Proven System</h3>
                            <p className="text-gray-300">
                                This isn&apos;t just blank pages. It&apos;s a structured system designed to track what actually
                                matters for strength training progress.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bonus Content */}
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-gray-800 mb-16">
                    <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
                        Bonus: Coaching Integration
                    </h2>
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-gray-300 text-lg mb-6">
                            Elite Performance Coaching clients receive a <strong className="text-yellow-400">signed
                                journal</strong> as part of their package. Use it to track your customized program and
                            share progress during check-ins.
                        </p>
                        <Link
                            href="/coaching"
                            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-200"
                        >
                            Learn About Coaching
                        </Link>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="bg-gradient-to-r from-gray-900 to-black rounded-xl p-8 md:p-12 text-center border border-yellow-500/20">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Start Tracking Your Strength Journey
                    </h2>
                    <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        450+ pages. Structured system. Permanent record of your progress.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
                        <a
                            href="https://www.amazon.com/dp/B0GDY9XK56"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto sm:min-w-[250px] sm:max-w-xs bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg transition duration-200 text-center shadow-lg hover:shadow-xl hover:scale-105 transform flex items-center justify-center text-sm md:text-base"
                        >
                            <FaAmazon className="mr-2 text-xl md:text-2xl" />
                            Buy on Amazon
                        </a>
                        <Link
                            href="/templates"
                            className="w-full sm:w-auto sm:min-w-[250px] sm:max-w-xs bg-transparent border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-900 text-yellow-500 font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg transition duration-200 text-center text-sm md:text-base"
                        >
                            View Resources
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}