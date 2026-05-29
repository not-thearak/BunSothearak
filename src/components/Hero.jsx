import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Globe, ArrowRight } from 'lucide-react';
import myImage from '../assets/profile2.jpg';

const Hero = () => {
  const roles = [
    { icon: Code2, text: 'Software Developer' },
    { icon: Globe, text: 'Web Developer' },
    { icon: Smartphone, text: 'Mobile Developer' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Thearak</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              I'm a passionate software developer specializing in building web and mobile applications.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {roles.map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                  <role.icon size={18} className="text-primary" />
                  <span className="text-sm">{role.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex gap-4"
            >
              <a
                href="#contact"
                className="gradient-bg px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
              >
                Get In Touch <ArrowRight size={18} />
              </a>
              <a
                href="#projects"
                className="border border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary/10 transition-all duration-300"
              >
                View Work
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Profile with online image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="absolute inset-0 gradient-bg rounded-full opacity-20 blur-3xl animate-pulse"></div>

              <div className="relative bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-2 backdrop-blur-sm">
                <div className="absolute -inset-4 gradient-bg rounded-full opacity-30 blur-xl"></div>

                <div className="relative rounded-xl overflow-hidden aspect-square">
                  <img
                    src={myImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent"></div>
                </div>

                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-dark/80 backdrop-blur-md px-4 py-2 rounded-full border border-gray-700">
                  <span className="text-xs text-primary">Not</span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-primary">Thearak</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
