// src/app/templates/[templateId]/page.tsx
import dynamicImport from 'next/dynamic';
import { Template } from '@/types/template';
import { templates } from '../templates';

// This is a server component that fetches the template data
export const dynamic = 'force-dynamic';

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