import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star, Users, Award, TrendingUp } from 'lucide-react';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';
import { MetaTags } from '../components/SEO/MetaTags';
import { LazyImage } from '../components/Performance/LazyImage';

const iconMap: { [key: string]: React.ComponentType<any> } = {
  Code: require('lucide-react').Code,
  Palette: require('lucide-react').Palette,
  ShoppingCart: require('lucide-react').ShoppingCart,
  Smartphone: require('lucide-react').Smartphone,
  Cloud: require('lucide-react').Cloud,
  TrendingUp: require('lucide-react').TrendingUp,
};

const stats = [
  { label: 'Projects Completed', value: '500+', icon: Award },
  { label: 'Happy Clients', value: '200+', icon: Users },
  { label: 'Success Rate', value: '98%', icon: TrendingUp },
  { label: 'Average Rating', value: '4.9/5', icon: Star }
];

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const featuredTestimonials = testimonials.filter(t => t.featured).slice(0, 3);

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <MetaTags
        title="Our Services - Web Development, App Development & More"
        description="Comprehensive digital services including web development, mobile apps, UI/UX design, e-commerce solutions, and cloud integration. Transform your business with WebStitch."
        keywords="web development services, mobile app development, UI UX design, e-commerce solutions, cloud integration, digital marketing, Greater Noida"
        url="/services"
      />

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive digital solutions to transform your business. From web development to cloud integration, 
              we deliver cutting-edge technology with exceptional design.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group cursor-pointer ${
                    service.featured ? 'lg:col-span-2' : ''
                  }`}
                  onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="p-8">
                        <div className="flex items-center mb-6">
                          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                            {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {service.title}
                            </h3>
                            {service.featured && (
                              <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full mt-1">
                                Featured
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Benefits:</h4>
                          <ul className="space-y-2">
                            {service.benefits.slice(0, 3).map((benefit, idx) => (
                              <li key={idx} className="flex items-start">
                                <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600 dark:text-gray-400 text-sm">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {service.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <Link
                          to={`/contact?service=${service.id}`}
                          className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                        >
                          Get Started
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>

                      <div className="relative">
                        <LazyImage
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full min-h-[300px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                    </div>

                    {/* Expanded Details */}
                    {selectedService === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t border-gray-200 dark:border-gray-700 p-8"
                      >
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">All Benefits:</h4>
                            <ul className="space-y-2">
                              {service.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start">
                                  <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-600 dark:text-gray-400 text-sm">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Technologies:</h4>
                            <div className="flex flex-wrap gap-2">
                              {service.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg text-sm"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about our services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <LazyImage
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a custom solution that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-lg"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/portfolio"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
                >
                  View Our Work
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};