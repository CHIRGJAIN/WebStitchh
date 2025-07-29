// import React from 'react';
// import { motion } from 'framer-motion';
// import { Users, Target, Award, Heart, Globe, Zap } from 'lucide-react';
// import { MetaTags } from '../components/SEO/MetaTags';
// import { LazyImage } from '../components/Performance/LazyImage';

// const values = [
//   {
//     icon: Target,
//     title: 'Innovation First',
//     description: 'We stay ahead of technology trends to deliver cutting-edge solutions',
//     color: 'from-blue-500 to-cyan-500'
//   },
//   {
//     icon: Users,
//     title: 'Client Success',
//     description: 'Your success is our success. We build lasting partnerships',
//     color: 'from-purple-500 to-pink-500'
//   },
//   {
//     icon: Award,
//     title: 'Quality Excellence',
//     description: 'We maintain the highest standards in every line of code',
//     color: 'from-green-500 to-blue-500'
//   },
//   {
//     icon: Heart,
//     title: 'Passionate Team',
//     description: 'We love what we do and it shows in our work',
//     color: 'from-red-500 to-orange-500'
//   }
// ];

// const team = [
//   {
//     name: 'Rajesh Kumar',
//     role: 'CEO & Founder',
//     image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
//     bio: 'Visionary leader with 10+ years in tech innovation'
//   },
//   {
//     name: 'Priya Singh',
//     role: 'CTO',
//     image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
//     bio: 'Tech architect passionate about scalable solutions'
//   },
//   {
//     name: 'Amit Sharma',
//     role: 'Lead Developer',
//     image: 'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=400',
//     bio: 'Full-stack expert with expertise in modern frameworks'
//   },
//   {
//     name: 'Sneha Patel',
//     role: 'Design Director',
//     image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
//     bio: 'Creative designer focused on user-centered design'
//   }
// ];

// export const About: React.FC = () => {
//   return (
//     <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
//       <MetaTags
//         title="About WebStitch - Our Story, Team & Values"
//         description="Learn about WebStitch's journey from a startup to a leading web development company in Greater Noida. Meet our team and discover our values and mission."
//         keywords="about WebStitch, web development company Greater Noida, our team, company values, web development agency story"
//         url="/about"
//       />

//       {/* Hero Section */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               About WebStitch
//             </h1>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               Founded in Greater Noida, we're a passionate team of developers, designers, and innovators 
//               dedicated to crafting exceptional digital experiences that drive business growth.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Story Section */}
//       <section className="py-20 bg-white/50 dark:bg-gray-800/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
//                 Our Story
//               </h2>
//               <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
//                 WebStitch began as a vision to bridge the gap between innovative technology and practical 
//                 business solutions. Founded by a team of passionate developers and designers, we've grown 
//                 from a small startup to a trusted partner for businesses worldwide.
//               </p>
//               <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
//                 Our journey started with a simple belief: that great technology should be accessible, 
//                 intuitive, and transformative. Today, we continue to push boundaries, exploring new 
//                 technologies and methodologies to deliver exceptional results for our clients.
//               </p>
//               <div className="flex items-center space-x-6">
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">2016</div>
//                   <div className="text-sm text-gray-600 dark:text-gray-400">Founded</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">500+</div>
//                   <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-green-600 dark:text-green-400">50+</div>
//                   <div className="text-sm text-gray-600 dark:text-gray-400">Team Members</div>
//                 </div>
//               </div>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="relative"
//             >
//               <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-2xl">
//                 <LazyImage
//                   src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
//                   alt="WebStitch Office"
//                   className="w-full h-96 object-cover"
//                 />
//               </div>
//               <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-xl text-white">
//                 <Globe className="w-8 h-8 mb-2" />
//                 <div className="text-sm font-semibold">Global Reach</div>
//                 <div className="text-xs opacity-90">25+ Countries</div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
//               Our Values
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               These core principles guide every decision we make and every project we undertake
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {values.map((value, index) => (
//               <motion.div
//                 key={value.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="text-center group"
//               >
//                 <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform`}>
//                   <value.icon className="w-10 h-10 text-white" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
//                   {value.title}
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-400">
//                   {value.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-20 bg-white/50 dark:bg-gray-800/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
//               Meet Our Team
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               The brilliant minds behind WebStitch's success
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {team.map((member, index) => (
//               <motion.div
//                 key={member.name}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="group"
//               >
//                 <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
//                   <div className="relative mb-6">
//                     <LazyImage
//                       src={member.image}
//                       alt={member.name}
//                       className="w-24 h-24 rounded-full mx-auto object-cover"
//                     />
//                     <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:opacity-100 opacity-0 transition-opacity"></div>
//                   </div>
//                   <h3 className="text-xl font-semibold text-center mb-2 text-gray-900 dark:text-white">
//                     {member.name}
//                   </h3>
//                   <p className="text-blue-600 dark:text-blue-400 text-center font-medium mb-4">
//                     {member.role}
//                   </p>
//                   <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
//                     {member.bio}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Info */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
//               Ready to Work Together?
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
//               Located in Greater Noida, serving clients globally
//             </p>
//             <div className="flex justify-center items-center space-x-8 text-lg">
//               <div className="text-gray-600 dark:text-gray-400">
//                 📍 Greater Noida, India
//               </div>
//               <div className="text-gray-600 dark:text-gray-400">
//                 📞 9899721172
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };





import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Heart, Globe, TrendingUp, Star, Zap } from 'lucide-react';
import { MetaTags } from '../components/SEO/MetaTags';
import { LazyImage } from '../components/Performance/LazyImage';
import { TeamBios } from '../components/Interactive/TeamBios';

const values = [
  {
    icon: Target,
    title: 'Innovation First',
    description: 'We stay ahead of technology trends to deliver cutting-edge solutions',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Users,
    title: 'Client Success',
    description: 'Your success is our success. We build lasting partnerships',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Award,
    title: 'Quality Excellence',
    description: 'We maintain the highest standards in every line of code',
    color: 'from-green-500 to-blue-500'
  },
  {
    icon: Heart,
    title: 'Passionate Team',
    description: 'We love what we do and it shows in our work',
    color: 'from-red-500 to-orange-500'
  }
];

const achievements = [
  { metric: 'Projects Completed', value: '500+', icon: Award, color: 'from-blue-500 to-cyan-500' },
  { metric: 'Happy Clients', value: '200+', icon: Users, color: 'from-purple-500 to-pink-500' },
  { metric: 'Team Members', value: '50+', icon: Heart, color: 'from-green-500 to-blue-500' },
  { metric: 'Years of Excellence', value: '8+', icon: Star, color: 'from-orange-500 to-red-500' },
  { metric: 'Countries Served', value: '25+', icon: Globe, color: 'from-indigo-500 to-purple-500' },
  { metric: 'Client Satisfaction', value: '98%', icon: TrendingUp, color: 'from-teal-500 to-green-500' }
];

export const About: React.FC = () => {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <MetaTags
        title="About WebStitch - Our Story, Team & Values"
        description="Learn about WebStitch's journey from a startup to a leading web development company in Greater Noida. Discover our values and mission."
        keywords="about WebStitch, web development company Greater Noida, company values, web development agency story"
        url="/about"
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
              About WebStitch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Founded in Greater Noida, we're a passionate team of developers, designers, and AI specialists 
              dedicated to crafting premium digital experiences that transform businesses and drive exponential growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-20 bg-gradient-to-r from-white via-blue-50/30 to-purple-50/30 dark:from-gray-800 dark:via-blue-900/10 dark:to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client success
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.metric}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div 
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                  whileHover={{ rotate: 5 }}
                >
                  <achievement.icon className="w-8 h-8 text-white" />
                </motion.div>
                <motion.div 
                  className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {achievement.value}
                </motion.div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {achievement.metric}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                WebStitch began as a vision to bridge the gap between cutting-edge technology and practical 
                business solutions. Founded by a team of passionate AI specialists, developers, and designers, 
                we've grown from a small startup to a recognized leader in premium digital solutions.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Our journey started with a simple belief: that exceptional technology should be accessible, 
                intuitive, and transformative. Today, we continue to push boundaries with AI-powered solutions, 
                cutting-edge development practices, and innovative design methodologies.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">2020</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">25+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Countries</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-2xl">
                <LazyImage
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="WebStitch Office"
                  className="w-full h-96 object-cover"
                />
              </div>
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-xl text-white shadow-2xl"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Globe className="w-8 h-8 mb-2" />
                <div className="text-sm font-semibold">Global Reach</div>
                <div className="text-xs opacity-90">25+ Countries</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              These core principles guide every decision we make and every project we undertake
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group cursor-pointer"
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                  whileHover={{ rotate: 5 }}
                >
                  <value.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              The brilliant minds behind WebStitch's success - click on any team member to learn more
            </p>
          </motion.div>

          <TeamBios />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Located in Greater Noida, serving premium clients globally with cutting-edge solutions
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-lg mb-8">
              <div className="text-gray-600 dark:text-gray-400">
                📍 Greater Noida, India
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                📞 9899721172
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                ✉️ webstitchh@gmail.com
              </div>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all"
              >
                <Zap className="mr-2 w-5 h-5" />
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
