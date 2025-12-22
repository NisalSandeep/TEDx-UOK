// pages/About/AboutTedxUokPage.tsx
import { Link } from 'react-router-dom';

export default function AboutTedxUokPage() {
  const currentTheme = "The Ripple Effect";
  const eventYear = "2024";

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="text-white">TED</span>
            <span className="text-[#EB0028]">x</span>
            <span className="text-white ml-4">UOK</span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Spreading ideas worth sharing at the University of Kelaniya.
          </p>
          <div className="mt-8 inline-block border-l-4 border-[#EB0028] pl-4">
            <p className="text-xl text-white">
              {eventYear} Theme: <span className="text-[#EB0028] font-bold">{currentTheme}</span>
            </p>
          </div>
        </div>

        {/* Mission & Story */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">Our Mission & Story</h2>
          <div className="bg-[#0E0E0E] border border-[#1F1F1F] rounded-2xl p-8">
            <p className="text-xl text-gray-300 mb-6">
              TEDxUOK was founded with a simple yet powerful vision: to create a platform 
              where innovative ideas from the University of Kelaniya community could be 
              shared with the world.
            </p>
            <p className="text-lg text-gray-400">
              As the first officially licensed TEDx event at University of Kelaniya, 
              we're committed to fostering intellectual curiosity, interdisciplinary 
              dialogue, and transformative thinking.
            </p>
          </div>
        </div>

        {/* Theme Intro */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">TEDxUOK {eventYear}: {currentTheme}</h2>
          <div className="bg-gradient-to-r from-[#0a0a0a] to-black border border-[#1F1F1F] rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">What is the Ripple Effect?</h3>
            <p className="text-gray-300 mb-4">
              Every idea, no matter how small, has the potential to create waves of change. 
              Like a single pebble dropped in water creates ripples that expand outward, 
              our ideas and actions can influence far beyond our immediate reach.
            </p>
            <p className="text-gray-400">
              Through this theme, we'll explore stories of innovation, courage, and 
              transformation that started small but created lasting impact.
            </p>
          </div>
        </div>

        {/* Event Goals */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">Event Goals & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0E0E0E] border border-[#1F1F1F] rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-[#EB0028] mb-4">Short-term Goals</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#EB0028] mr-2">•</span>
                  <span className="text-gray-300">Curate 10+ inspiring talks from diverse fields</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#EB0028] mr-2">•</span>
                  <span className="text-gray-300">Engage 500+ attendees from university and community</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#EB0028] mr-2">•</span>
                  <span className="text-gray-300">Foster interdisciplinary connections among students</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#0E0E0E] border border-[#1F1F1F] rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Long-term Impact</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span className="text-gray-300">Establish annual tradition of idea-sharing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span className="text-gray-300">Create alumni network of speakers and thinkers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span className="text-gray-300">Inspire innovation and research collaborations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-gray-800 rounded-2xl">
              <div className="text-4xl font-bold text-[#EB0028] mb-2">1st</div>
              <h4 className="text-lg font-bold text-white mb-2">Licensed Event</h4>
              <p className="text-gray-400 text-sm">First TEDx at University of Kelaniya</p>
            </div>
            <div className="text-center p-6 border border-gray-800 rounded-2xl">
              <div className="text-4xl font-bold text-[#EB0028] mb-2">100%</div>
              <h4 className="text-lg font-bold text-white mb-2">Student-Led</h4>
              <p className="text-gray-400 text-sm">Organized by passionate volunteers</p>
            </div>
            <div className="text-center p-6 border border-gray-800 rounded-2xl">
              <div className="text-4xl font-bold text-[#EB0028] mb-2">∞</div>
              <h4 className="text-lg font-bold text-white mb-2">Ideas Shared</h4>
              <p className="text-gray-400 text-sm">Unlimited potential for impact</p>
            </div>
          </div>
        </div>

        {/* Team CTA */}
        <div className="text-center">
          <Link 
            to="/team"
            className="inline-flex items-center bg-[#EB0028] text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-colors duration-300 mb-8"
          >
            Meet Our Team
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </Link>
          
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link 
                to="/about/ted"
                className="border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300"
              >
                About TED
              </Link>
              <Link 
                to="/about/tedx"
                className="border-2 border-[#EB0028] text-white px-6 py-2 rounded-full hover:bg-[#EB0028] transition-all duration-300"
              >
                About TEDx
              </Link>
            </div>
            <Link 
              to="/about"
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to About Overview
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}