// pages/About/AboutTedPage.tsx
import { Link } from 'react-router-dom';

export default function AboutTedPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="text-[#EB0028]">TED</span>
            <span className="text-white ml-4">: Ideas Worth Spreading</span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            A global community welcoming people from every discipline and culture who seek a deeper understanding of the world.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">Our Mission</h2>
          <div className="bg-[#0E0E0E] border border-[#1F1F1F] rounded-2xl p-8">
            <p className="text-xl text-gray-300 mb-6">
              TED's mission is to spread ideas. We believe passionately in the power of ideas to change attitudes, lives and, ultimately, the world.
            </p>
            <p className="text-lg text-gray-400">
              On TED.com, we're building a clearinghouse of free knowledge from the world's most inspired thinkers — and a community of curious souls to engage with ideas and each other.
            </p>
          </div>
        </div>

        {/* History Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">History</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0E0E0E] border border-[#1F1F1F] rounded-2xl p-6">
              <div className="text-[#EB0028] text-3xl font-bold mb-4">1984</div>
              <h3 className="text-xl font-bold text-white mb-3">The Beginning</h3>
              <p className="text-gray-400">
                TED began as a conference where Technology, Entertainment and Design converged.
              </p>
            </div>
            <div className="bg-[#0E0E0E] border border-[#1F1F1F] rounded-2xl p-6">
              <div className="text-[#EB0028] text-3xl font-bold mb-4">2006</div>
              <h3 className="text-xl font-bold text-white mb-3">Going Online</h3>
              <p className="text-gray-400">
                First TED Talks posted online, beginning the global idea-sharing revolution.
              </p>
            </div>
            <div className="bg-[#0E0E0E] border border-[#1F1F1F] rounded-2xl p-6">
              <div className="text-[#EB0028] text-3xl font-bold mb-4">Today</div>
              <h3 className="text-xl font-bold text-white mb-3">Global Platform</h3>
              <p className="text-gray-400">
                Covering all topics in 100+ languages with billions of views worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Initiatives */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">Key Initiatives</h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-[#0a0a0a] to-black border border-[#1F1F1F] rounded-2xl p-6">
              <div className="flex items-center gap-6">
                <div className="text-4xl text-white">🎬</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">TED Talks</h3>
                  <p className="text-gray-400">Free videos from the world's most inspiring thinkers</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#0a0a0a] to-black border border-[#1F1F1F] rounded-2xl p-6">
              <div className="flex items-center gap-6">
                <div className="text-4xl text-white">🎓</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">TED Conferences</h3>
                  <p className="text-gray-400">Annual flagship events featuring world-changing ideas</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#0a0a0a] to-black border border-[#1F1F1F] rounded-2xl p-6">
              <div className="flex items-center gap-6">
                <div className="text-4xl text-white">📚</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">TED-Ed</h3>
                  <p className="text-gray-400">Lessons worth sharing for youth and education</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <a 
            href="https://www.ted.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#EB0028] text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-colors duration-300 mb-8"
          >
            Visit TED.com
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <div className="pt-8 border-t border-gray-800">
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