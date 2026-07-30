export interface TrustMetric {
  id: string;
  number: string;
  label: string;
  sublabel: string;
  iconName: string;
}

export interface CredentialBadge {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}

export const TRUST_METRICS: TrustMetric[] = [
  {
    id: 'exp',
    number: '13+',
    label: 'Years Teaching',
    sublabel: 'Dedicated Early Childhood Educator',
    iconName: 'Award',
  },
  {
    id: 'level',
    number: 'Level 3',
    label: 'ECE Educator',
    sublabel: 'Highest Alberta Certification',
    iconName: 'GraduationCap',
  },
  {
    id: 'ratio',
    number: '1:6',
    label: 'Small Group Ratio',
    sublabel: 'Personalized attention for every child',
    iconName: 'Users',
  },
  {
    id: 'satisfaction',
    number: '100%',
    label: 'Licensed & Insured',
    sublabel: 'Fully compliant with Alberta Health & Safety',
    iconName: 'ShieldCheck',
  },
];

export const CREDENTIAL_BADGES: CredentialBadge[] = [
  {
    id: 'licensed',
    title: 'Fully Licensed Family Dayhome',
    subtitle: 'Approved & Monitored by Alberta Childcare Agency',
    icon: 'Building2',
  },
  {
    id: 'diploma',
    title: 'Diploma in Early Childhood Education',
    subtitle: 'Hong Kong Certified & Registered Kindergarten Educator',
    icon: 'GraduationCap',
  },
  {
    id: 'cpr',
    title: 'First Aid & CPR Certified',
    subtitle: 'Updated emergency & infant resuscitation training',
    icon: 'HeartPulse',
  },
  {
    id: 'meals',
    title: 'Organic & Healthy Meal Program',
    subtitle: 'Nutritious breakfasts, warm lunches & fresh snacks',
    icon: 'Utensils',
  },
  {
    id: 'background',
    title: 'Vulnerable Sector Police Clearance',
    subtitle: 'Regular safety audits and background verification',
    icon: 'FileCheck',
  },
  {
    id: 'outdoor',
    title: 'Private Fenced Playground',
    subtitle: 'Secure outdoor play area in Citadel, NW Calgary',
    icon: 'Trees',
  },
];
