// pages/About/AboutTedxPage.tsx
import { Link } from 'react-router-dom';

export default function AboutTedxPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="text-white">TED</span>
            <span className="text-[#EB0028]">x</span>
            <span className="text-white ml-4">: Independently Organized</span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience.
          </p>
        </div>

        {/* Definition Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">What is TEDx?</h2>
          <div className="bg-[#0E0E0E] border border-[#1F1F1F] rounded-2xl p-8">
            <p className="text-xl text-gray-300">
              TEDx events are independently organized under a free license granted by TED. 
              These events bring the spirit of TED to local communities around the globe.
            </p>
          </div>
        </div>

        {/* TED vs TEDx */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">TED vs TEDx</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* TED */}
            <div className="bg-[#0E0E0E] border border-[#1F1F1F] rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-[#EB0028] mb-6">TED</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#EB0028] mr-2">•</span>
                  <span className="text-gray-300">Organized directly by TED</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#EB0028] mr-2">•</span>
                  <span className="text-gray-300">Global conferences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#EB0028] mr-2">•</span>
                  <span className="text-gray-300">Speakers invited by TED</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#EB0028] mr-2">•</span>
                  <span className="text-gray-300">Paid attendance</span>
                </li>
              </ul>
            </div>
            
            {/* TEDx */}
            <div className="bg-[#0E0E0E] border border-[#1F1F1F] rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-6">
                <span className="text-white">TED</span>
                <span className="text-[#EB0028]">x</span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span className="text-gray-300">Independently organized</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span className="text-gray-300">Local community events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span className="text-gray-300">Volunteer-organized</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span className="text-gray-300">Often free or low-cost</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Licensing */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">Licensing & Rules</h2>
          <div className="bg-gradient-to-r from-[#0a0a0a] to-black border border-[#1F1F1F] rounded-2xl p-8">
            <p className="text-xl text-gray-300 mb-6">
              TEDx events are operated under license from TED. Organizers agree to follow strict guidelines to ensure quality and consistency with TED values.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Key Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-[#EB0028] mr-2">✓</span>
                    <span className="text-gray-300">Non-commercial nature</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#EB0028] mr-2">✓</span>
                    <span className="text-gray-300">Official TEDx branding</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#EB0028] mr-2">✓</span>
                    <span className="text-gray-300">All talks recorded & shared</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Prohibited</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-gray-500 mr-2">✗</span>
                    <span className="text-gray-300">Political/religious agendas</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-gray-500 mr-2">✗</span>
                    <span className="text-gray-300">Pseudoscience content</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-gray-500 mr-2">✗</span>
                    <span className="text-gray-300">Individual talk sponsorship</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <a 
            href="https://www.ted.com/participate/organize-a-local-tedx-event"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border-2 border-[#EB0028] text-white px-8 py-3 rounded-full font-bold hover:bg-[#EB0028] transition-colors duration-300 mb-8"
          >
            Learn About Organizing TEDx
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