// pages/About/AboutPage.tsx
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="text-white">About</span>
            <span className="text-[#EB0028] ml-4">TEDxUOK</span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Discover the mission, history, and ideas behind TED, TEDx, and our journey at University of Kelaniya.
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* TED Card */}
          <Link 
            to="/about/ted" 
            className="group bg-[#0E0E0E] border border-[#1F1F1F] rounded-2xl p-8 hover:border-[#EB0028] transition-all duration-300"
          >
            <div className="mb-6">
              <span className="text-[#EB0028] font-bold text-5xl">TED</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">About TED</h2>
            <p className="text-gray-300 mb-6">
              Mission, history, and global initiatives of the world's leading ideas platform.
            </p>
            <div className="flex items-center text-white font-medium group-hover:text-[#EB0028] transition-colors">
              Learn more
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </Link>

          {/* TEDx Card */}
          <Link 
            to="/about/tedx" 
            className="group bg-[#0E0E0E] border border-[#1F1F1F] rounded-2xl p-8 hover:border-[#EB0028] transition-all duration-300"
          >
            <div className="mb-6">
              <span className="text-white font-medium">TED</span>
              <span className="text-[#EB0028] font-bold text-5xl">x</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">About TEDx</h2>
            <p className="text-gray-300 mb-6">
              Learn about the TEDx program, licensing, and how it differs from TED conferences.
            </p>
            <div className="flex items-center text-white font-medium group-hover:text-[#EB0028] transition-colors">
              Learn more
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </Link>

          {/* TEDxUOK Card */}
          <Link 
            to="/about/tedx-uok" 
            className="group bg-[#0E0E0E] border border-[#1F1F1F] rounded-2xl p-8 hover:border-[#EB0028] transition-all duration-300"
          >
            <div className="mb-6">
              <span className="text-white font-medium">TED</span>
              <span className="text-[#EB0028] font-bold text-5xl">x</span>
              <span className="text-white font-bold text-3xl">UOK</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">About TEDxUOK</h2>
            <p className="text-gray-300 mb-6">
              Our story, mission, and commitment to spreading ideas at University of Kelaniya.
            </p>
            <div className="flex items-center text-white font-medium group-hover:text-[#EB0028] transition-colors">
              Learn more
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </Link>
        </div>

        {/* Why Ideas Matter */}
        <div className="bg-gradient-to-r from-[#0a0a0a] to-black border border-[#1F1F1F] rounded-2xl p-10 mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Why Ideas Matter</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4 text-white">💡</div>
              <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
              <p className="text-gray-400">Ideas drive progress and innovation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4 text-white">🌍</div>
              <h3 className="text-xl font-bold text-white mb-3">Global Impact</h3>
              <p className="text-gray-400">Local ideas with worldwide influence</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4 text-white">🤝</div>
              <h3 className="text-xl font-bold text-white mb-3">Community</h3>
              <p className="text-gray-400">Building connections through shared ideas</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/"
              className="px-8 py-3 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300"
            >
              Return Home
            </Link>
            <Link 
              to="/events"
              className="px-8 py-3 bg-[#EB0028] text-white rounded-full font-bold hover:bg-red-700 transition-colors duration-300"
            >
              View Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}