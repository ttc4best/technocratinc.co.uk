import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import TechStack from '../components/TechStack';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Process from '../components/Process';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <TechStack />
      <Services />
      <Portfolio />
      <Testimonials />
      <Process />

      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Ready to Build Something
            <br />
            <span className="text-gradient">Extraordinary?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Let's transform your vision into reality with cutting-edge technology and exceptional design
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
