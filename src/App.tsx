import React, { useEffect } from 'react';
import { Send, ArrowRight, Target, Users, Home } from 'lucide-react';
import { initGA, logPageView, logEvent } from './utils/analytics';
import BraveniteLogo from './assets/trythis.svg';

function App() {
  useEffect(() => {
    initGA();
    logPageView();
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    logEvent('Navigation', 'Click Contact');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    logEvent('Navigation', 'Click Home');
  };

  const handleEmailClick = () => {
    logEvent('Contact', 'Click Email');
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-blue-950 to-blue-900 relative overflow-x-hidden font-mono">
      {/* Background circles for visual interest */}
      <div className="fixed top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px]" />

      {/* Navigation Menu */}
      <header>
        <nav className="fixed top-0 left-0 right-0 z-[100] backdrop-blur-xl bg-black/50 border-b border-blue-500/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <img src={BraveniteLogo} alt="Bravenite Logo" className="h-8 w-8 mr-2 filter drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-all hover:drop-shadow-2xl" />
                <span className="text-2xl font-bold text-white cursor-pointer" onClick={scrollToTop}>Bravenite</span>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={scrollToTop}
                  className="flex items-center space-x-1 px-4 py-2 rounded-lg backdrop-blur-md bg-blue-500/10 border border-blue-500/20 text-blue-100 hover:bg-blue-500/20 transition-colors text-sm"
                  aria-label="Scroll to top"
                >
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </button>
                <button
                  onClick={scrollToContact}
                  className="flex items-center space-x-1 px-4 py-2 rounded-lg backdrop-blur-md bg-blue-500/10 border border-blue-500/20 text-blue-100 hover:bg-blue-500/20 transition-colors text-sm"
                  aria-label="Contact us"
                >
                  <Send className="w-4 h-4" />
                  <span>Contact</span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="relative min-h-screen flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8 py-12 pt-24">
        {/* Main content container with frosted glass effect */}
        <div className="w-full max-w-4xl mx-auto backdrop-blur-lg bg-black/30 p-8 sm:p-12 rounded-3xl shadow-2xl border border-blue-500/20 space-y-16">
          {/* Hero Section */}
          <section aria-labelledby="hero-heading">
            <div className="flex items-center justify-center mb-8">
              <h1 id="hero-heading" className="text-2xl font-bold text-white">Bravenite</h1>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                Products People
                <span className="text-blue-400"> Love</span>
              </h2>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto tracking-wide">
                We see technology as a medium for creating products that improve lives.   
              </p>
            </div>
          </section>

          {/* Mission Section */}
          <section aria-labelledby="mission-heading" className="backdrop-blur-md bg-blue-950/20 p-8 rounded-2xl border border-blue-500/20">
            <div className="flex items-center space-x-3 mb-6">
              <Target className="w-6 h-6 text-blue-400" aria-hidden="true" />
              <h2 id="mission-heading" className="text-2xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-blue-100 leading-relaxed tracking-wide text-sm">
              At Bravenite, we're driven by a singular purpose: creating products that seamlessly integrate into people's lives and solve real problems. We believe in building technology that not only functions flawlessly but also brings joy and value to our users.
            </p>
          </section>

          {/* Who We Are Section */}
          <section aria-labelledby="about-heading" className="backdrop-blur-md bg-blue-950/20 p-8 rounded-2xl border border-blue-500/20">
            <div className="flex items-center space-x-3 mb-6">
              <Users className="w-6 h-6 text-blue-400" aria-hidden="true" />
              <h2 id="about-heading" className="text-2xl font-bold text-white">Who We Are</h2>
            </div>
            <p className="text-blue-100 leading-relaxed tracking-wide text-sm">
              We are empathetic creators, artists, builders, and inventors. Our team brings together diverse perspectives and skills, united by our passion for crafting meaningful solutions. We aim to marry every product with technical excellence and human-centered design.
            </p>
          </section>

          {/* Contact section */}
          <section id="contact" aria-labelledby="contact-heading" className="backdrop-blur-md bg-blue-950/30 p-6 rounded-2xl border border-blue-500/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Send className="w-5 h-5 text-blue-400" aria-hidden="true" />
                <h2 id="contact-heading" className="text-white font-medium">Get in Touch</h2>
              </div>
              <a
                href="mailto:hello@bravenite.com"
                className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                aria-label="Send us an email"
                onClick={handleEmailClick}
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
            <a
              href="mailto:hello@bravenite.com"
              className="text-blue-200 hover:text-blue-400 transition-colors text-sm"
              onClick={handleEmailClick}
            >
              hello@bravenite.com
            </a>
          </section>
        </div>
        
        {/* Footer */}
        <footer className="mt-8 text-blue-200/60 text-sm">
          Bravenite LLC
        </footer>
      </main>
    </div>
  );
}

export default App;