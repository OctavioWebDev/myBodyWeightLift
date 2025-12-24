'use client';

import { useSearchParams } from 'next/navigation';
import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
  const searchParams = useSearchParams();
  const service = searchParams.get('service') || '';

  // Map URL service parameter to a display name
  const getServiceDisplayName = (serviceParam: string) => {
    switch (serviceParam.toLowerCase()) {
      case 'in-person':
        return 'In-Person Training';
      case 'online':
        return 'Online Coaching';
      case 'consultation':
        return 'Free Consultation';
      default:
        return serviceParam || '';
    }
  };

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">Contact Us</h1>
        <p className="text-gray-300 mb-8">
          Ready to start your fitness journey? Fill out the form below and we'll get back to you within 24 hours.
          {service && (
            <span className="block mt-2 text-yellow-400">
              Service: {getServiceDisplayName(service)}
            </span>
          )}
        </p>
        
        <div className="p-6 bg-gray-900 rounded-lg">
          <ContactForm initialService={service} />
        </div>
      </div>
    </main>
  );
}
