import { Template } from '../types/template';

export const templates = {
  'beginner-strength-2day': {
    id: 'beginner-strength-2day',
    title: 'Foundational Strength (2-Day)',
    description: 'Perfect for those new to strength training, focusing on mastering fundamental movements with linear progression.',
    longDescription: 'This 12-week program is designed for complete beginners or those returning after a long break. It focuses on teaching proper form for the fundamental lifts while building a solid strength foundation. The 2-day split makes it perfect for busy schedules while still providing effective training stimulus.',
    price: 5.00,
    image: '/assets/images/samuel-girven-VJ2s0c20qCo-unsplash.jpg',
    category: 'Strength',
    duration: '12 weeks',
    level: 'Beginner',
    frequency: '2 days/week',
    focus: 'Movement patterns, technique, and building consistency',
    features: [
      '2 full-body workouts per week',
      'Step-by-step exercise tutorials',
      'Linear progression plan',
      'Warm-up and mobility routines',
      'Form cues and technique tips',
      'Printable workout logs',
      'Exercise substitution guide',
      'Form check guidelines'
    ] as const,
    previewImage: '/assets/images/samuel-girven-VJ2s0c20qCo-unsplash.jpg'
  },
  'beginner-strength-3day': {
    id: 'beginner-strength-3day',
    title: 'Foundational Strength (3-Day)',
    description: 'Build a solid strength base with this 3-day full body program, perfect for beginners ready to commit to regular training.',
    longDescription: 'This 12-week program is designed for beginners who can commit to 3 training days per week. It uses a full-body split to maximize training frequency and learning opportunities for the main lifts. The program includes structured progression to ensure continuous improvement in strength and technique.',
    price: 5.00,
    image: '/assets/images/samuel-girven-VJ2s0c20qCo-unsplash.jpg',
    category: 'Strength',
    duration: '12 weeks',
    level: 'Beginner',
    frequency: '3 days/week',
    focus: 'Progressive overload, movement mastery',
    features: [
      '3 full-body workouts per week',
      'Detailed exercise instructions',
      'Structured progression plan',
      'Warm-up and mobility routines',
      'Technique troubleshooting guide',
      'Printable workout logs',
      'Exercise substitution guide',
      'Form check guidelines'
    ] as const,
    previewImage: '/assets/images/samuel-girven-VJ2s0c20qCo-unsplash.jpg'
  },
  'intermediate-hypertrophy-3day': {
    id: 'intermediate-hypertrophy-3day',
    title: 'Hypertrophy & Strength (3-Day)',
    description: 'For lifters with 6+ months of experience looking to build muscle and increase strength with proper periodization.',
    longDescription: 'This 8-week program is designed for intermediate lifters looking to build muscle while increasing strength. The 3-day split allows for proper recovery while providing enough volume for hypertrophy. The program includes periodization to ensure continuous progress and prevent plateaus.',
    price: 5.00,
    image: '/assets/images/delaney-van-I72QeY20Q7o-unsplash.jpg',
    category: 'Hypertrophy',
    duration: '8 weeks',
    level: 'Intermediate',
    frequency: '3 days/week',
    focus: 'Muscle growth, strength development',
    features: [
      '3 strength-focused workouts per week',
      'Hypertrophy-specific programming',
      'Periodized training blocks',
      'Deload weeks programmed',
      'Exercise variations',
      'Nutrition guidelines for muscle gain',
      'Recovery protocols',
      'Progressive overload tracking'
    ] as const,
    previewImage: '/assets/images/delaney-van-I72QeY20Q7o-unsplash.jpg'
  },
  'intermediate-hypertrophy-4day': {
    id: 'intermediate-hypertrophy-4day',
    title: 'Hypertrophy & Strength (4-Day)',
    description: 'Higher volume split for intermediates ready to take their training to the next level with increased frequency.',
    longDescription: 'This 8-week program is designed for intermediate lifters ready to increase their training volume and frequency. The 4-day split allows for more focused training sessions while still providing adequate recovery. The program includes advanced training techniques to maximize muscle growth and strength gains.',
    price: 5.00,
    image: '/assets/images/delaney-van-I72QeY20Q7o-unsplash.jpg',
    category: 'Hypertrophy',
    duration: '8 weeks',
    level: 'Intermediate',
    frequency: '4 days/week',
    focus: 'Progressive overload, exercise variations',
    features: [
      '4 focused workouts per week',
      'Upper/lower split',
      'Advanced training techniques',
      'Periodization for continuous gains',
      'Exercise variations',
      'Recovery optimization',
      'Deload protocols',
      'Nutrition and supplementation guide'
    ] as const,
    previewImage: '/assets/images/delaney-van-I72QeY20Q7o-unsplash.jpg'
  },
  'advanced-powerlifting-3day': {
    id: 'advanced-powerlifting-3day',
    title: 'Powerlifting Program (3-Day)',
    description: 'For advanced lifters focusing on the big three lifts with intelligent programming for competition prep.',
    longDescription: "This 12-week powerlifting program is designed for advanced lifters preparing for competition. The 3-day split focuses on the squat, bench press, and deadlift while managing fatigue and optimizing performance. The program includes specific peaking protocols to ensure you're at your strongest on meet day.",
    price: 5.00,
    image: '/assets/images/jan-kahanek-fVUl6kzIvLg-unsplash.jpg',
    category: 'Powerlifting',
    duration: '12 weeks',
    level: 'Advanced',
    frequency: '3 days/week',
    focus: 'Peaking, competition prep',
    features: [
      '3 focused training days per week',
      'Competition-specific programming',
      'Peaking protocols',
      'Meet day strategy',
      'Accessory exercise selection',
      'Weight cut guidance',
      'Warm-up routines',
      'Mental preparation techniques'
    ] as const,
    previewImage: '/assets/images/jan-kahanek-fVUl6kzIvLg-unsplash.jpg'
  },
  'advanced-powerlifting-4day': {
    id: 'advanced-powerlifting-4day',
    title: 'Powerlifting Program (4-Day)',
    description: 'High-volume powerlifting program for advanced athletes with proper recovery capacity and training age.',
    longDescription: 'This 12-week program is designed for advanced powerlifters who can handle higher training volumes. The 4-day split allows for more focused training sessions while still providing adequate recovery. The program includes advanced periodization techniques to maximize strength gains and peak for competition.',
    price: 5.00,
    image: '/assets/images/jan-kahanek-fVUl6kzIvLg-unsplash.jpg',
    category: 'Powerlifting',
    duration: '12 weeks',
    level: 'Advanced',
    frequency: '4 days/week',
    focus: 'Strength development, accessory work',
    features: [
      '4 focused training days per week',
      'Advanced periodization',
      'Competition peaking',
      'Accessory exercise selection',
      'Recovery optimization',
      'Technique refinement',
      'Meet day strategy',
      'Mental preparation techniques'
    ] as const,
    previewImage: '/assets/images/jan-kahanek-fVUl6kzIvLg-unsplash.jpg'
  }
} as const satisfies Record<string, Template>;
