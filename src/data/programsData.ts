export interface ProgramItem {
  id: string;
  title: string;
  subtitle: string;
  ageRange: string;
  hours: string;
  mealsIncluded: boolean;
  availability: 'Available' | 'Limited Spots' | 'Waitlist';
  badge: string;
  description: string;
  highlights: string[];
  learningFocus: string[];
  image: string;
}

export interface RoutineStep {
  time: string;
  title: string;
  category: 'welcome' | 'learning' | 'outdoor' | 'meals' | 'rest';
  description: string;
  icon: string;
}

export const PROGRAMS_DATA: ProgramItem[] = [
  {
    id: 'full-time',
    title: 'Full-Time Early Education',
    subtitle: 'Comprehensive daily care & kindergarten readiness',
    ageRange: 'Birth to 5 Years',
    hours: '7:00 AM – 5:30 PM (Mon - Fri)',
    mealsIncluded: true,
    availability: 'Limited Spots',
    badge: 'Most Popular',
    description: 'A structured yet nurturing full-day program designed to encourage natural curiosity, fine motor skills, emotional resilience, and literacy.',
    highlights: [
      'Daily curriculum following Montessori & play-based early learning frameworks',
      'All daily meals & snacks prepared fresh with organic ingredients',
      'Daily outdoor play in private fenced garden',
      'Progress updates & individual learning tracking',
    ],
    learningFocus: ['Early Mathematics', 'Phonics & Literacy', 'Sensory Exploration', 'Social-Emotional Skills'],
    image: '/images/23.webp',
  },
  {
    id: 'part-time',
    title: 'Part-Time Discovery Care',
    subtitle: 'Flexible scheduled days for growing toddlers',
    ageRange: '12 Months to 5 Years',
    hours: 'Choice of 2-3 Days / Week',
    mealsIncluded: true,
    availability: 'Available',
    badge: 'Flexible Schedule',
    description: 'Ideal for parents seeking high-quality peer socialization and structured preschool learning with flexible weekly commitments.',
    highlights: [
      'Seamless integration into morning circle time & learning routines',
      'Social interaction with small consistent peer group',
      'Includes lunch & morning/afternoon snacks',
      'Customized scheduling aligned with family routine',
    ],
    learningFocus: ['Peer Socialization', 'Creative Arts', 'Motor Coordination', 'Language Development'],
    image: '/images/22.webp',
  },
  {
    id: 'before-after',
    title: 'Before & After School Care',
    subtitle: 'Calm morning transition & enriching after-school relaxation',
    ageRange: '5 to 12 Years (Kindergarten & Grade School)',
    hours: '7:00 - 8:30 AM & 3:15 - 5:30 PM',
    mealsIncluded: true,
    availability: 'Available',
    badge: 'Citadel Schools',
    description: 'Providing school-age children with a cozy home environment, nutritious snacks, homework guidance, and free creative play before and after their school day.',
    highlights: [
      'Safe walk/drop-off alignment for local Citadel elementary schools',
      'Quiet homework assistance & reading corner',
      'Healthy after-school hot tea/milk & snacks',
      'Creative arts & outdoor play decompression',
    ],
    learningFocus: ['Homework Support', 'Independent Reading', 'Creative Crafts', 'Peer Cooperation'],
    image: '/images/13.webp',
  },
  {
    id: 'summer-camp',
    title: 'Summer Learning & Activity Camp',
    subtitle: 'Sunlit outdoor adventures & STEAM creative projects',
    ageRange: '3 to 12 Years',
    hours: '7:00 AM – 5:30 PM (July - August)',
    mealsIncluded: true,
    availability: 'Available',
    badge: 'Seasonal Specialty',
    description: 'An immersive summer program filled with outdoor exploration, science experiments, splash play, field trips, and hands-on art workshops.',
    highlights: [
      'Weekly themed adventure modules (Nature Seekers, Little Scientists, Art in Bloom)',
      'Water play & park excursions in Citadel',
      'Fresh fruit picnics & homemade summer treats',
      'Zero screen time guaranteed',
    ],
    learningFocus: ['Nature Exploration', 'Science Projects', 'Outdoor Physicality', 'Teamwork'],
    image: '/images/18.webp',
  },
  {
    id: 'hourly-dropin',
    title: 'Hourly & Casual Care',
    subtitle: 'Reliable short-term childcare when you need it',
    ageRange: 'Birth to 12 Years',
    hours: 'Subject to daily capacity',
    mealsIncluded: true,
    availability: 'Waitlist',
    badge: 'On-Demand',
    description: 'Occasional childcare for parents with erratic schedules, appointments, or emergency needs in Citadel and Northwest Calgary.',
    highlights: [
      'Equal access to all daily learning toys & snacks',
      'Warm and fast welcoming transition into small group',
      'Bookable up to 24 hours in advance',
    ],
    learningFocus: ['Comfort & Transition', 'Inclusive Play', 'Sensory Fun'],
    image: '/images/6.webp',
  },
];

export const DAILY_ROUTINE: RoutineStep[] = [
  {
    time: '7:00 AM – 8:30 AM',
    title: 'Warm Welcome & Gentle Start',
    category: 'welcome',
    description: 'Children arrive into a calm environment. Greetings, free choice quiet play, story time, and morning check-in with educator.',
    icon: 'Sun',
  },
  {
    time: '8:30 AM – 9:00 AM',
    title: 'Nutritious Breakfast',
    category: 'meals',
    description: 'Warm organic oatmeal, whole grain toast, fresh berries, and milk served in a family-style dining setting.',
    icon: 'Coffee',
  },
  {
    time: '9:00 AM – 9:30 AM',
    title: 'Morning Circle Time & Phonics',
    category: 'learning',
    description: 'Good morning song, calendar, weather check, storybook reading, and interactive letter/number recognition.',
    icon: 'BookOpen',
  },
  {
    time: '9:30 AM – 10:30 AM',
    title: 'Focused Early Learning & STEM',
    category: 'learning',
    description: 'Small group guided activities: counting games, fine motor puzzles, writing practice, shapes, and sensory sensory bins.',
    icon: 'Puzzle',
  },
  {
    time: '10:30 AM – 11:45 AM',
    title: 'Outdoor Garden & Park Play',
    category: 'outdoor',
    description: 'Fresh air, balance bikes, sandbox building, playground games, and gross motor exercise in Citadel outdoor play area.',
    icon: 'Trees',
  },
  {
    time: '11:45 AM – 12:30 PM',
    title: 'Family-Style Lunch',
    category: 'meals',
    description: 'Balanced hot meals prepared daily (steamed vegetables, protein, rice/pasta, soup). Focus on table manners & independence.',
    icon: 'Utensils',
  },
  {
    time: '12:30 PM – 2:30 PM',
    title: 'Quiet Rest & Nap Time',
    category: 'rest',
    description: 'Soft lullaby music, individual clean cots, and soothing environment for toddler naps and quiet reading for older children.',
    icon: 'Moon',
  },
  {
    time: '2:30 PM – 3:30 PM',
    title: 'Afternoon Refreshment & Creative Art',
    category: 'learning',
    description: 'Fruit slices, yogurt, cheese, followed by finger painting, paper crafting, clay sculpting, and music exploration.',
    icon: 'Palette',
  },
  {
    time: '3:30 PM – 4:30 PM',
    title: 'Free Choice Play & Socialization',
    category: 'learning',
    description: 'Building blocks, toy bus counting, play kitchen, drama corner, and free play guided by peer collaboration.',
    icon: 'Smile',
  },
  {
    time: '4:30 PM – 5:30 PM',
    title: 'Evening Decompression & Parent Pickup',
    category: 'welcome',
    description: 'Quiet story corner, daily progress verbal summary with parents, and warm goodbyes for the evening.',
    icon: 'Heart',
  },
];
