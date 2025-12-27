import { Link } from 'react-router-dom';
import { Code2, Mail, Phone, MapPin, ArrowUp, Star, Instagram } from 'lucide-react';
import { ASSETS } from '../lib/storage';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src={ASSETS.logo}
                alt="Technocrat Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Transforming ideas into exceptional digital experiences. Your trusted partner for innovative technology solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-slate-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services/web-development" className="text-slate-400 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/services/mobile-apps" className="text-slate-400 hover:text-white transition-colors">Mobile Apps</Link></li>
              <li><Link to="/services/cloud-integration" className="text-slate-400 hover:text-white transition-colors">Cloud Integration</Link></li>
              <li><Link to="/services/ai-services" className="text-slate-400 hover:text-white transition-colors">AI Solutions</Link></li>
              <li><Link to="/services/data-science" className="text-slate-400 hover:text-white transition-colors">Data Science</Link></li>
              <li><Link to="/services/ai-seo" className="text-slate-400 hover:text-white transition-colors">SEO Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:hire@technocratinc.co.uk" className="hover:text-white transition-colors break-all">
                  hire@technocratinc.co.uk
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+447778798248" className="hover:text-white transition-colors">
                  07778 798248
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <span> Office 16031, 182-184 High Street North, East Ham, E6 2JA  United Kingdom</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Tech Certified</h3>
            <div className="bg-slate-800 rounded-lg p-4 mb-4">
              <img
                src={ASSETS.certificates}
                alt="Technology Certifications"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Google Reviews</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-slate-400 text-sm">5.0 Rating</span>
              </div>
              <div id="google-reviews-embed" className="bg-slate-800 rounded-lg p-4 min-h-[200px] flex items-center justify-center">
                <p className="text-slate-500 text-sm text-center">
                  Paste your Google Reviews embed code here
                </p>
              </div>
              <a
                href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
              >
                <Star className="w-4 h-4" />
                Write a Review
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm space-y-1">
              <p>© {currentYear} Technocrat Technology Communication LTD. All rights reserved.</p>
              <p className="text-slate-500 text-xs">Company Registration No. 16859995</p>
            </div>

            <div className="flex gap-6">
              <Link to="/privacy" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>

            <div className="flex gap-4">
              <a href="https://www.facebook.com/ttctechnocrat/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://x.com/ttctechnocrat" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/ttctechnocrat/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </button>
    </footer>
  );
}
