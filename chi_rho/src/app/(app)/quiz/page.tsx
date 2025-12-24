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
    question: 'What is your primary fitness goal?',
    options: [
      'Building strength',
      'Losing weight',
      'Improving endurance',
      'General fitness'
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    question: 'How many days per week can you commit to working out?',
    options: [
      '1-2 days',
      '3-4 days',
      '5-6 days',
      '7 days'
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: 'What is your current fitness level?',
    options: [
      'Beginner (0-6 months of training)',
      'Intermediate (6 months - 2 years)',
      'Advanced (2+ years)',
      'Competitive athlete'
    ],
    correctAnswer: 0
  },
  {
    id: 4,
    question: 'Do you have any injuries or health concerns?',
    options: [
      'No injuries or concerns',
      'Minor injuries (fully recovered)',
      'Current minor injuries',
      'Significant health concerns'
    ],
    correctAnswer: 0
  },
  {
    id: 5,
    question: 'What type of workout do you prefer?',
    options: [
      'Bodyweight exercises',
      'Weight training',
      'High-intensity interval training (HIIT)',
      'A mix of everything'
    ],
    correctAnswer: 3
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
    // Simple scoring - in a real app, you might want more sophisticated logic
    const score = answers.reduce((total, answer, index) => {
      return total + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);

    // Determine the recommended program based on answers
    let recommendedProgram = 'beginner-strength'; // Default
    
    // Simple recommendation logic - adjust based on your needs
    if (answers[0] === 0 && answers[1] >= 1) { // Strength goal with 3+ days
      recommendedProgram = 'advanced-powerlifting';
    } else if (answers[0] === 1 || answers[0] === 2) { // Weight loss or endurance
      recommendedProgram = 'intermediate-hypertrophy';
    }

    return { score, total: questions.length, recommendedProgram };
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const { score, total, recommendedProgram } = showResults ? calculateResults() : { score: 0, total: 0, recommendedProgram: '' };

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
              {recommendedProgram === 'advanced-powerlifting' ? 'Advanced Powerlifting Program' : 
               recommendedProgram === 'intermediate-hypertrophy' ? 'Hypertrophy Builder Program' : 
               'Beginner Strength Program'}
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
