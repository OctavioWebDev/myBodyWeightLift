import dynamicImport from 'next/dynamic';
import React from 'react';

// This is a server component that fetches the template data
export const dynamic = 'force-dynamic';

// This would typically come from your database or API
const templates = {
  'beginner-strength': {
    id: 'beginner-strength',
    title: 'Beginner Strength Program',
    description: 'A 12-week program designed for beginners to build a solid foundation of strength and proper movement patterns.',
    longDescription: 'This comprehensive 12-week program is perfect for those new to strength training. It focuses on mastering the fundamental movement patterns while progressively increasing intensity. Each workout is designed to be completed in under an hour, making it perfect for busy schedules.',
    price: 5.00,
    image: '/assets/images/samuel-girven-VJ2s0c20qCo-unsplash.jpg',
    category: 'Strength',
    duration: '12 weeks',
    level: 'Beginner',
    features: [
      '3-4 workouts per week',
      'Detailed exercise instructions',
      'Progressive overload plan',
      'Warm-up and cool-down routines',
      'Form cues and technique tips',
      'Printable workout logs'
    ],
    previewImage: '/assets/images/samuel-girven-VJ2s0c20qCo-unsplash.jpg'
  },
  'intermediate-hypertrophy': {
    id: 'intermediate-hypertrophy',
    title: 'Hypertrophy Builder',
    description: 'An 8-week program focused on muscle growth and hypertrophy for intermediate lifters.',
    longDescription: 'This 8-week hypertrophy program is designed for intermediate lifters looking to maximize muscle growth. It incorporates advanced training techniques and periodization to break through plateaus and stimulate new muscle growth.',
    price: 5.00,
    image: '/assets/images/delaney-van-I72QeY20Q7o-unsplash.jpg',
    category: 'Hypertrophy',
    duration: '8 weeks',
    level: 'Intermediate',
    features: [
      '4-5 workouts per week',
      'Hypertrophy-focused training',
      'Progressive overload tracking',
      'Deload weeks programmed',
      'Exercise substitutions',
      'Nutrition guidelines for muscle gain'
    ],
    previewImage: '/assets/images/delaney-van-I72QeY20Q7o-unsplash.jpg'
  },
  'advanced-powerlifting': {
    id: 'advanced-powerlifting',
    title: 'Powerlifting Peaking Program',
    description: 'A 6-week peaking program for advanced lifters preparing for competition.',
    longDescription: 'This 6-week peaking program is designed for advanced powerlifters preparing for competition. It includes specific work on the competition lifts, accessory work, and tapering to ensure peak performance on meet day.',
    price: 5.00,
    image: '/assets/images/jan-kahanek-fVUl6kzIvLg-unsplash.jpg',
    category: 'Powerlifting',
    duration: '6 weeks',
    level: 'Advanced',
    features: [
      '3-4 workouts per week',
      'Competition lift focused',
      'Peaking protocol',
      'Accessory work for weak points',
      'Meet day strategy',
      'Weight management guidance'
    ],
    previewImage: '/assets/images/jan-kahanek-fVUl6kzIvLg-unsplash.jpg'
  }
} as const;

type Template = typeof templates[keyof typeof templates];

export async function generateMetadata({ params }: { params: { templateId: string } }) {
  const template = templates[params.templateId as keyof typeof templates] || {
    title: 'Template Not Found',
    description: 'The requested training template could not be found.'
  };

  return {
    title: `${template.title} | Chi-Rho Power & Strength`,
    description: template.description,
    openGraph: {
      title: template.title,
      description: template.description,
      images: [
        {
          url: template.image,
          width: 1200,
          height: 630,
          alt: template.title,
        },
      ],
    },
  };
}

// Dynamically import the client component with no SSR since it uses browser APIs
const TemplateClient = dynamicImport<{ template: Template }>(
  () => import('./TemplateClient'),
  { 
    ssr: false, 
    loading: () => (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div>Loading template...</div>
      </div>
    )
  }
);

export default function TemplatePage({ params }: { params: { templateId: string } }) {
  const template = templates[params.templateId as keyof typeof templates];

  if (!template) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Template Not Found</h1>
          <p className="text-gray-300 mb-6">The requested training template could not be found.</p>
          <a 
            href="/templates" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-500 hover:bg-yellow-600"
          >
            Browse All Templates
          </a>
        </div>
      </div>
    );
  }

  return <TemplateClient template={template} />;
}
