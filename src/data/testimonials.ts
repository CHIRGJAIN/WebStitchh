export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
  featured: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Arjun Mehta',
    role: 'CEO',
    company: 'TechStart Solutions',
    content: 'WebStitch transformed our outdated website into a modern, high-performing platform. Our conversion rates increased by 150% within three months. Their attention to detail and technical expertise is unmatched.',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    featured: true
  },
  {
    id: 'testimonial-2',
    name: 'Kavya Sharma',
    role: 'Marketing Director',
    company: 'GreenEarth Retail',
    content: 'The e-commerce platform WebStitch built for us handles thousands of orders seamlessly. The mobile experience is exceptional, and our customers love the fast checkout process. Highly recommended!',
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    featured: true
  },
  {
    id: 'testimonial-3',
    name: 'Rohit Gupta',
    role: 'Founder',
    company: 'EduTech Innovations',
    content: 'Working with WebStitch was a game-changer for our startup. They delivered a scalable learning platform that supports thousands of concurrent users. The team\'s expertise in cloud technologies is impressive.',
    avatar: 'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    featured: true
  },
  {
    id: 'testimonial-4',
    name: 'Neha Agarwal',
    role: 'Operations Manager',
    company: 'HealthCare Plus',
    content: 'The mobile app WebStitch developed for our healthcare services has revolutionized how we connect with patients. The UI is intuitive, and the performance is outstanding. Our patient satisfaction scores have improved significantly.',
    avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    featured: false
  },
  {
    id: 'testimonial-5',
    name: 'Vikash Kumar',
    role: 'CTO',
    company: 'FinanceFlow',
    content: 'WebStitch\'s DevOps expertise helped us achieve 99.9% uptime and reduce deployment time from hours to minutes. Their cloud architecture recommendations saved us 40% on infrastructure costs.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    featured: false
  },
  {
    id: 'testimonial-6',
    name: 'Priya Jain',
    role: 'Brand Manager',
    company: 'Fashion Forward',
    content: 'The website redesign WebStitch created for us perfectly captures our brand essence. The visual design is stunning, and the user experience is seamless across all devices. Our online sales have doubled!',
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    featured: false
  }
];