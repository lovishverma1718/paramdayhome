import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  type?: string;
  schema?: object[];
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Param Dayhome | Licensed Family Dayhome in Citadel, NW Calgary',
  description = 'Param Dayhome offers a warm, licensed, Scandinavian-inspired early learning environment in Citadel, Calgary, AB. Owned by Level 3 ECE educator Paramjit Kaur with 13+ years experience.',
  keywords = 'Licensed Dayhome Calgary, Family Dayhome Citadel, Childcare Calgary, Early Learning Calgary, Northwest Calgary Dayhome, Infant Daycare Calgary, Preschool Calgary, Licensed Family Dayhome Alberta',
  canonical = 'https://paramdayhome.ca',
  ogImage = '/images/23.webp',
  type = 'website',
  schema = [],
}) => {
  const fullTitle = title.includes('Param Dayhome') ? title : `${title} | Param Dayhome Citadel Calgary`;

  const defaultChildCareSchema = {
    '@context': 'https://schema.org',
    '@type': 'ChildCare',
    'name': 'Param Dayhome',
    'image': 'https://paramdayhome.ca/images/23.webp',
    '@id': 'https://paramdayhome.ca',
    'url': 'https://paramdayhome.ca',
    'telephone': '+1-403-899-0277',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Citadel Way NW',
      'addressLocality': 'Calgary',
      'addressRegion': 'AB',
      'postalCode': 'T3R 1J4',
      'addressCountry': 'CA',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 51.1448,
      'longitude': -114.1843,
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      'opens': '07:00',
      'closes': '17:30',
    },
    'priceRange': '$$',
    'founder': {
      '@type': 'Person',
      'name': 'Paramjit Kaur',
      'jobTitle': 'Level 3 Early Childhood Educator & Licensed Provider',
    },
    'areaServed': [
      'Citadel',
      'Arbour Lake',
      'Hawkwood',
      'Ranchlands',
      'Scenic Acres',
      'Royal Oak',
      'Northwest Calgary',
    ],
  };

  const allSchemas = [defaultChildCareSchema, ...schema];

  return (
    <Helmet>
      {/* Standard Meta */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Param Dayhome" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Schemas */}
      {allSchemas.map((s, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};
