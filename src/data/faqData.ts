export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'licensing' | 'meals' | 'schedule' | 'safety' | 'enrollment';
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'licensing',
    question: 'Is Param Dayhome an officially licensed family dayhome in Alberta?',
    answer: 'Yes, absolutely. Param Dayhome is a fully licensed and government-monitored family dayhome operating under an approved Alberta Child Care Agency. We undergo regular unannounced safety, health, and nutritional inspections to ensure the highest standards of care.',
    category: 'licensing',
  },
  {
    id: 'grants-subsidy',
    question: 'Are government childcare subsidies and affordability grants available?',
    answer: 'Yes! Because we are a fully licensed Alberta family dayhome, eligible families can access the Alberta Child Care Subsidy and benefit from federal-provincial childcare affordability grants, significantly reducing monthly out-of-pocket fees.',
    category: 'licensing',
  },
  {
    id: 'certifications',
    question: 'What qualifications and certifications does Paramjit Kaur possess?',
    answer: 'Paramjit Kaur holds a Diploma in Early Childhood Education, is a Registered Kindergarten Educator with 13+ years of professional teaching experience (including overseas in Hong Kong and locally in Alberta), holds an Alberta ECE Level 3 Certificate (the highest level), and keeps current First Aid & CPR certifications alongside Vulnerable Sector Police Clearance.',
    category: 'licensing',
  },
  {
    id: 'hours',
    question: 'What are your daily operational hours?',
    answer: 'We are open Monday through Friday from 7:00 AM to 5:30 PM. We offer predictable scheduling designed to support commuting parents in Citadel and surrounding Northwest Calgary neighborhoods.',
    category: 'schedule',
  },
  {
    id: 'ages',
    question: 'What ages of children do you accept?',
    answer: 'We provide specialized early learning and care for children from birth to 12 years old, including infants, toddlers, preschoolers, and before & after school care for school-age children.',
    category: 'enrollment',
  },
  {
    id: 'meals',
    question: 'Are meals and snacks provided, and are they included in the fee?',
    answer: 'Yes, all meals are 100% included! We serve a hot organic breakfast, a balanced home-cooked lunch, and two nutritious snacks daily (morning & afternoon). All menus follow the Canada Food Guide for growing young minds.',
    category: 'meals',
  },
  {
    id: 'allergies',
    question: 'How do you accommodate food allergies or dietary restrictions?',
    answer: 'We take food allergies extremely seriously. During registration, we document all allergies, intolerances, or religious dietary requirements. Our kitchen maintains strict cross-contamination protocols, and alternative nutritious meal options are prepared individually.',
    category: 'meals',
  },
  {
    id: 'group-size',
    question: 'How many children are enrolled in the dayhome at one time?',
    answer: 'In compliance with Alberta Licensed Family Dayhome standards, we maintain a small group size (maximum 6 children). This intimate 1:6 educator-to-child ratio ensures each child receives warm, individualized attention, enhanced safety, and deep emotional bonding.',
    category: 'safety',
  },
  {
    id: 'outdoor-play',
    question: 'Do the children get outdoor playtime every day?',
    answer: 'Yes, outdoor time is an integral part of our daily routine! Weather permitting, children spend time outdoors twice daily in our secure, private fenced backyard and supervised trips to local Citadel green parks and playgrounds.',
    category: 'safety',
  },
  {
    id: 'education',
    question: 'Do you provide structured early childhood educational activities?',
    answer: 'Yes. Backed by 13+ years of kindergarten teaching experience, Paramjit designs play-based Montessori and EYLF curriculum modules covering phonics, early math, fine motor control, sensory trays, art, and emotional self-regulation.',
    category: 'enrollment',
  },
  {
    id: 'smoke-free',
    question: 'Is the dayhome environment 100% smoke-free and vape-free?',
    answer: 'Yes. Our home and entire property are strictly 100% smoke-free, vape-free, and cannabis-free at all times, ensuring clean, pristine air quality for growing lungs.',
    category: 'safety',
  },
  {
    id: 'pets',
    question: 'Are there any pets present in the dayhome area?',
    answer: 'No. Our dayhome environment is completely pet-free, eliminating potential pet allergen risks and ensuring a clean, hygienic space for all children.',
    category: 'safety',
  },
  {
    id: 'parent-visits',
    question: 'Can prospective parents visit and tour the dayhome before enrolling?',
    answer: 'We warmly invite prospective parents to schedule a private tour! In-person tours allow you to meet Paramjit, inspect the classroom and play areas, review safety protocols, and ask any questions. Tours are conducted outside active nap times or after hours for privacy.',
    category: 'enrollment',
  },
  {
    id: 'summer-care',
    question: 'Do you offer summer care programs when school is out?',
    answer: 'Yes! We run a fun, engaging Summer Learning & Activity Camp through July and August featuring water play, nature discovery, art projects, and outdoor summer picnics.',
    category: 'schedule',
  },
  {
    id: 'registration',
    question: 'How do I register my child or join the waitlist?',
    answer: 'Registering is simple! Click the "Book a Visit" button anywhere on our website, fill out your family details, or call us directly at (403) 899-0277. Once we confirm availability for your child’s age group, we will guide you through the registration documents.',
    category: 'enrollment',
  },
];
