import Marquee from './Marquee';

export default function TechStack() {
  const technologies = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS',
    'Google Cloud', 'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL',
    'GraphQL', 'TensorFlow', 'PyTorch', 'Supabase', 'Vercel'
  ];

  const firstRow = technologies.slice(0, Math.ceil(technologies.length / 2));
  const secondRow = technologies.slice(Math.ceil(technologies.length / 2));

  return (
    <section className="py-24 bg-black border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-4">
          Powered By Innovation
        </h2>
        <p className="text-xl text-gray-400 text-center max-w-2xl mx-auto">
          We leverage cutting-edge technologies to build exceptional digital products
        </p>
      </div>

      <div className="space-y-6">
        <Marquee speed="normal">
          {firstRow.map((tech, index) => (
            <div
              key={index}
              className="px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full whitespace-nowrap"
            >
              <span className="text-lg font-semibold text-white">{tech}</span>
            </div>
          ))}
        </Marquee>

        <Marquee reverse speed="normal">
          {secondRow.map((tech, index) => (
            <div
              key={index}
              className="px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full whitespace-nowrap"
            >
              <span className="text-lg font-semibold text-white">{tech}</span>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold text-gradient mb-2">100%</div>
            <div className="text-gray-400">Code Quality</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-gradient mb-2">24/7</div>
            <div className="text-gray-400">Technical Support</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-gradient mb-2">99.9%</div>
            <div className="text-gray-400">Uptime Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
}
