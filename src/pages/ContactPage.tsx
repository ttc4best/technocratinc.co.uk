import Contact from '../components/Contact';
import Breadcrumbs from '../components/Breadcrumbs';

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs />

      <div className="pt-24 pb-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to start your project? Let's discuss how we can help you achieve your goals
          </p>
        </div>
      </div>

      <Contact />
    </>
  );
}
