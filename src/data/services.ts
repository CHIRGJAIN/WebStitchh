export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  technologies: string[];
  image: string;
  featured: boolean;
}

export const services: Service[] = [
  {
    id: 'web-app-development',
    title: 'Web App Development',
    description: 'Build robust, scalable web applications tailored to your business needs. We use the latest frameworks and cloud technologies to deliver fast, secure, and maintainable solutions.',
    icon: 'Code',
    benefits: [
      'Custom-built solutions for your unique requirements',
      'Scalable architecture that grows with your business',
      'Modern frameworks for optimal performance',
      'Cloud-native deployment and hosting'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'AWS', 'Docker'],
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Create stunning, user-centered designs that convert visitors into customers. Our design process focuses on usability, accessibility, and brand consistency.',
    icon: 'Palette',
    benefits: [
      'User research and persona development',
      'Wireframing and prototyping',
      'Responsive design for all devices',
      'Accessibility-first approach (WCAG 2.1 AA)'
    ],
    technologies: ['Figma', 'Adobe Creative Suite', 'Sketch', 'InVision', 'Principle'],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  },
  {
    id: 'ecommerce-solutions',
    title: 'E-commerce Solutions',
    description: 'Launch and scale your online store with our comprehensive e-commerce solutions. From payment integration to inventory management, we handle it all.',
    icon: 'ShoppingCart',
    benefits: [
      'Secure payment gateway integration',
      'Inventory and order management',
      'SEO-optimized product pages',
      'Mobile-first shopping experience'
    ],
    technologies: ['Shopify', 'WooCommerce', 'Magento', 'Stripe', 'PayPal'],
    image: 'https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android devices.',
    icon: 'Smartphone',
    benefits: [
      'Native iOS and Android development',
      'Cross-platform solutions with React Native',
      'App Store optimization and deployment',
      'Push notifications and analytics'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    image: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  },
  {
    id: 'cloud-integration',
    title: 'Cloud Integration',
    description: 'Migrate to the cloud and optimize your infrastructure for scalability, security, and cost-effectiveness with our cloud expertise.',
    icon: 'Cloud',
    benefits: [
      'AWS, Azure, and Google Cloud expertise',
      'Serverless architecture implementation',
      'DevOps and CI/CD pipeline setup',
      'Cost optimization and monitoring'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Terraform'],
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false
  },
  {
    id: 'seo-digital-marketing',
    title: 'SEO & Digital Marketing',
    description: 'Boost your online visibility and drive organic traffic with our comprehensive SEO and digital marketing strategies.',
    icon: 'TrendingUp',
    benefits: [
      'Technical SEO audits and optimization',
      'Content strategy and creation',
      'Local SEO for Greater Noida businesses',
      'Performance tracking and reporting'
    ],
    technologies: ['Google Analytics', 'Search Console', 'SEMrush', 'Ahrefs'],
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false
  }
];