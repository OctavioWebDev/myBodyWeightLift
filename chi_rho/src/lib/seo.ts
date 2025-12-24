import { Metadata } from 'next/types';

export const generateJsonLd = ({
  title,
  description,
  url,
  type = 'WebSite',
  image,
  datePublished,
  dateModified,
  author,
  publisher,
}: {
  title: string;
  description: string;
  url: string;
  type?: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: {
    name: string;
    url?: string;
  };
  publisher?: {
    name: string;
    logo?: string;
  };
}) => {
  const jsonLd: any = {
    '@context': 'https://schema.org',
    '@type': type,
    name: title,
    description,
    url,
  };

  if (image) {
    jsonLd.image = image;
  }

  if (datePublished) {
    jsonLd.datePublished = datePublished;
  }

  if (dateModified) {
    jsonLd.dateModified = dateModified;
  }

  if (author) {
    jsonLd.author = {
      '@type': 'Person',
      name: author.name,
      ...(author.url && { url: author.url }),
    };
  }

  if (publisher) {
    jsonLd.publisher = {
      '@type': 'Organization',
      name: publisher.name,
      ...(publisher.logo && {
        logo: {
          '@type': 'ImageObject',
          url: publisher.logo,
        },
      }),
    };
  }

  return jsonLd;
};

export const generateMetadataWithDefaults = (metadata: Partial<Metadata> = {}): Metadata => {
  const defaultMetadata: Metadata = {
    title: 'Chi-Rho Power & Strength',
    description: 'Prepare, Commit, Respond - A blog on my thoughts and learnings on strength training and living a purposeful life.',
    metadataBase: new URL('https://yourdomain.com'),
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: 'Chi-Rho Power & Strength',
      title: 'Chi-Rho Power & Strength',
      description: 'Prepare, Commit, Respond - A blog on strength training and purposeful living',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Chi-Rho Power & Strength',
      description: 'Prepare, Commit, Respond - Strength training and purposeful living',
    },
  };

  return {
    ...defaultMetadata,
    ...metadata,
    openGraph: {
      ...defaultMetadata.openGraph,
      ...metadata.openGraph,
    },
    twitter: {
      ...defaultMetadata.twitter,
      ...metadata.twitter,
    },
  };
};
