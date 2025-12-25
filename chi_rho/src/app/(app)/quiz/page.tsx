'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
};

const questions: Question[] = [
  {
    id: 1,
    question: 'How long have you been consistently strength training?',
    options: [
      'Less than 6 months',
      '6 months - 1 year',
      '1-3 years',
      '3+ years'
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    question: 'How often do you currently train per week?',
    options: [
      '1-2 days',
      '3 days',
      '4-5 days',
      '6-7 days'
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: 'What best describes your progress in the last 3 months?',
    options: [
      'Making progress almost every workout (new PRs frequently)',
      'Progressing weekly or every other week',
      'Progressing monthly or every few months',
      'Progress is very slow or stalled'
    ],
    correctAnswer: 0
  },
  {
    id: 4,
    question: 'What is your current squat 1RM relative to bodyweight?',
    options: [
      'Less than bodyweight',
      '1-1.5x bodyweight',
      '1.5-2x bodyweight',
      '2x+ bodyweight'
    ],
    correctAnswer: 0
  },
  {
    id: 5,
    question: 'What best describes your training experience?',
    options: [
      'Still learning basic movements and technique',
      'Comfortable with main lifts, refining technique',
      'Experienced with periodization and advanced techniques',
      'Very experienced, possibly competing'
    ],
    correctAnswer: 0
  }
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const router = useRouter();

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateResults = () => {
    // Calculate experience level based on training duration and progress rate
    const trainingDuration = answers[0];
    const progressRate = answers[2];
    const squatLevel = answers[3];
    const trainingExperience = answers[4];
    
    // Calculate a composite score (0-12, higher = more experienced)
    const experienceScore = trainingDuration + progressRate + squatLevel + trainingExperience;
    
    // Determine the recommended program based on experience level
    let recommendedProgram = 'beginner-strength';
    let programName = 'Beginner Strength Program';
    
    if (experienceScore >= 9) {
      // Advanced (3+ years, slow progress, high strength levels)
      recommendedProgram = 'advanced-powerlifting';
      programName = 'Advanced Powerlifting Program';
    } else if (experienceScore >= 5) {
      // Intermediate (1-3 years, monthly progress, intermediate strength)
      recommendedProgram = 'intermediate-hypertrophy';
      programName = 'Hypertrophy & Strength Program';
    } else {
      // Beginner (<1 year, rapid progress, learning technique)
      recommendedProgram = 'beginner-strength';
      programName = 'Foundational Strength Program';
    }

    // Adjust based on training frequency (answers[1])
    const trainingFrequency = answers[1];
    if (trainingFrequency === 0) { // 1-2 days
      recommendedProgram += '-2day';
    } else if (trainingFrequency === 1) { // 3 days
      recommendedProgram += '-3day';
    } else { // 4+ days
      recommendedProgram += '-4day';
    }

    return { 
      score: experienceScore, 
      total: 12, // Max possible score
      recommendedProgram,
      programName
    };
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const { score, total, recommendedProgram, programName } = showResults ? calculateResults() : { score: 0, total: 0, recommendedProgram: '', programName: 'Strength Training Program' };

  if (showResults) {
    return (
      <div className="min-h-screen bg-black text-white pt-32 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-yellow-400 mb-6">Your Results</h1>
          <div className="bg-gray-900 p-8 rounded-lg mb-8">
            <div className="text-6xl font-bold text-yellow-400 mb-4">{score}/{total}</div>
            <p className="text-xl mb-6">
              Based on your answers, we recommend:
            </p>
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">
              {programName}
            </h2>
            <p className="mb-8 text-gray-300">
              This program is tailored to your fitness level and goals. Get started today!
            </p>
            <button
              onClick={() => router.push(`/templates/${recommendedProgram}`)}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition-colors duration-300 mr-4"
            >
              View Recommended Program
            </button>
            <button
              onClick={handleRestart}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-32 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-yellow-400">Question {currentQuestion + 1} of {questions.length}</span>
            <span className="text-gray-400">
              {Math.round(((currentQuestion) / questions.length) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div 
              className="bg-yellow-500 h-2.5 rounded-full" 
              style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-gray-900 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-8">{questions[currentQuestion].question}</h2>
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full text-left p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 border border-gray-700"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
