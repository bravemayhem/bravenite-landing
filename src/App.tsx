import React from 'react';
import { Send, ArrowRight, Target, Users } from 'lucide-react';

function App() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-blue-900 relative overflow-hidden">
      {/* Background circles for visual interest */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px]" />

      {/* Navigation Menu */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-black/30 border-b border-blue-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-white">Bravenite</span>
            </div>
            <button
              onClick={scrollToContact}
              className="flex items-center space-x-1 px-4 py-2 rounded-lg backdrop-blur-md bg-blue-500/10 border border-blue-500/20 text-blue-100 hover:bg-blue-500/20 transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>Contact</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="relative min-h-screen flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8 py-12 pt-24">
        {/* Main content container with frosted glass effect */}
        <div className="w-full max-w-4xl mx-auto backdrop-blur-lg bg-black/30 p-8 sm:p-12 rounded-3xl shadow-2xl border border-blue-500/20 space-y-16">
          {/* Header Section */}
          <div>
            <div className="flex items-center justify-center mb-8">
              <h1 className="text-2xl font-bold text-white">Bravenite</h1>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                Creating Products
                <span className="text-blue-400"> People Love</span>
              </h2>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                We're on a mission to build exceptional experiences that delight users and make a lasting impact.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="backdrop-blur-md bg-blue-950/20 p-8 rounded-2xl border border-blue-500/20">
            <div className="flex items-center space-x-3 mb-6">
              <Target className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            </div>
            <p className="text-blue-100 leading-relaxed">
              At Bravenite, we're driven by a singular purpose: creating products that seamlessly integrate into people's lives and solve real problems. We believe in building technology that not only functions flawlessly but also brings joy and value to our users. Every product we create is crafted with careful attention to user needs, ensuring we deliver experiences that truly resonate.
            </p>
          </div>

          {/* Who We Are Section */}
          <div className="backdrop-blur-md bg-blue-950/20 p-8 rounded-2xl border border-blue-500/20">
            <div className="flex items-center space-x-3 mb-6">
              <Users className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Who We Are</h3>
            </div>
            <p className="text-blue-100 leading-relaxed">
              We are empathetic creators, artists, builders, and inventors. Our team brings together diverse perspectives and skills, united by our passion for crafting meaningful solutions. We approach each project with creativity and understanding, ensuring that every product we create reflects both technical excellence and human-centered design.
            </p>
          </div>

          {/* Contact section */}
          <div id="contact" className="backdrop-blur-md bg-blue-950/30 p-6 rounded-2xl border border-blue-500/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Send className="w-5 h-5 text-blue-400" />
                <span className="text-white font-medium">Get in Touch</span>
              </div>
              <a
                href="mailto:hello@bravenite.com"
                className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <a
              href="mailto:hello@bravenite.com"
              className="text-blue-200 hover:text-blue-400 transition-colors"
            >
              hello@bravenite.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;