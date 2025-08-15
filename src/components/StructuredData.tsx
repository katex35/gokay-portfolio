import { PERSONAL_INFO } from '@/constants/personal-data';

export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": PERSONAL_INFO.name,
    "url": "https://gokaysahin.com",
    "image": "https://gokaysahin.com/logos/android-chrome-512x512.png",
    "sameAs": [
      "https://github.com/katex35",
      "https://linkedin.com/in/gokaysahin35"
    ],
    "jobTitle": "Frontend Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "İzmir",
      "addressCountry": "Turkey"
    },
    "email": PERSONAL_INFO.email,
    "description": PERSONAL_INFO.bio,
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Web3",
      "Blockchain",
      "Frontend Development",
      "Web Development",
      "Tailwind CSS",
      "Framer Motion"
    ]
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Gökay Şahin - Frontend Development Services",
    "image": "https://gokaysahin.com/logos/android-chrome-512x512.png",
    "url": "https://gokaysahin.com",
    "telephone": "+90-XXX-XXX-XXXX", // Add your phone if available
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "İzmir",
      "addressCountry": "Turkey"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.4192,
      "longitude": 27.1287
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday", 
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "serviceType": "Frontend Development",
    "provider": {
      "@type": "Person",
      "name": PERSONAL_INFO.name
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Turkey"
      },
      {
        "@type": "Place",
        "name": "Remote"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Frontend Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "React Development",
            "description": "Modern React applications with TypeScript"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Next.js Development",
            "description": "Full-stack Next.js applications with optimal performance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Web3 Integration",
            "description": "Blockchain and Web3 application development"
          }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Gökay Şahin - Frontend Developer",
    "url": "https://gokaysahin.com",
    "description": "Professional portfolio of Gökay Şahin, Frontend Developer specializing in React, Next.js, and Web3 technologies",
    "author": {
      "@type": "Person",
      "name": PERSONAL_INFO.name
    },
    "inLanguage": "tr",
    "copyrightYear": "2025",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://gokaysahin.com/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
