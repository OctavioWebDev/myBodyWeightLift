import { jsPDF } from 'jspdf';

export type Template = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  price: number;
  category: string;
  duration: string;
  level: string;
  readonly features: readonly string[];
};

export const generateTemplatePdf = (template: Template): Blob => {
  const doc = new jsPDF();
  
  // Add title
  doc.setFontSize(22);
  doc.text(template.title, 20, 30);
  
  // Add description
  doc.setFontSize(12);
  doc.text(template.longDescription || template.description, 20, 40, { maxWidth: 170 });
  
  // Add details
  doc.setFontSize(14);
  doc.text('Program Details', 20, 70);
  doc.setFontSize(12);
  doc.text(`Duration: ${template.duration}`, 20, 80);
  doc.text(`Level: ${template.level}`, 20, 88);
  doc.text(`Category: ${template.category}`, 20, 96);
  
  // Add features
  doc.setFontSize(14);
  doc.text('What\'s Included:', 20, 120);
  doc.setFontSize(12);
  template.features.forEach((feature, index) => {
    doc.text(`• ${feature}`, 25, 130 + (index * 7));
  });
  
  // Add footer
  doc.setFontSize(10);
  doc.setTextColor(100);
  doc.text('Thank you for your purchase!', 20, 280);
  
  // Generate PDF as Blob
  const pdfBlob = doc.output('blob');
  return pdfBlob;
};
