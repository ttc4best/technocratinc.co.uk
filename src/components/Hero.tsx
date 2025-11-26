import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import CodeSlider from './CodeSlider';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      <div className="absolute inset-0 bg-gradient-radial"></div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 text-center z-10">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-gray-300">Providing prompt and optimal tech solution to minimize cost and maximize profit</span>
          </div>

          <CodeSlider />

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 mt-12 leading-[1.1] tracking-tight">
            We Refuse To
            <br />
            <span className="text-gradient">
              Blend In
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Crafting extraordinary digital experiences that push boundaries and drive real business impact
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="group px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105 flex items-center gap-2"
            >
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/portfolio"
              className="px-8 py-4 bg-white/5 backdrop-blur-xl text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>

        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
            <div className="text-5xl font-bold text-white mb-2 text-gradient">150+</div>
            <div className="text-gray-400 text-sm">Projects Delivered</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
            <div className="text-5xl font-bold text-white mb-2 text-gradient">98%</div>
            <div className="text-gray-400 text-sm">Client Satisfaction</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
            <div className="text-5xl font-bold text-white mb-2 text-gradient">50+</div>
            <div className="text-gray-400 text-sm">Expert Team</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
            <div className="text-5xl font-bold text-white mb-2 text-gradient">10+</div>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
