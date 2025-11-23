import { Lightbulb, FileCode, Rocket, HeadphonesIcon } from 'lucide-react';

const steps = [
  {
    icon: Lightbulb,
    title: 'Discovery & Strategy',
    description: 'We begin by understanding your vision, goals, and challenges. Our team conducts thorough research to craft a strategic roadmap tailored to your needs.',
    step: '01',
  },
  {
    icon: FileCode,
    title: 'Design & Development',
    description: 'Our expert designers and developers bring your vision to life with elegant, scalable solutions built using cutting-edge technologies and best practices.',
    step: '02',
  },
  {
    icon: Rocket,
    title: 'Testing & Launch',
    description: 'Rigorous quality assurance ensures flawless performance. We handle deployment with precision, ensuring a smooth launch that exceeds expectations.',
    step: '03',
  },
  {
    icon: HeadphonesIcon,
    title: 'Support & Growth',
    description: 'Our partnership doesn\'t end at launch. We provide ongoing support, maintenance, and optimization to ensure your continued success and growth.',
    step: '04',
  },
];

export default function Process() {
  const gradients = [
    'from-blue-600 to-cyan-600',
    'from-purple-600 to-pink-600',
    'from-emerald-600 to-teal-600',
    'from-orange-600 to-amber-600'
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Our Process
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A proven methodology that delivers exceptional results every time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:bg-white/10 transition-all duration-500 group">
                  <div className="text-6xl font-bold text-white/10 mb-4 group-hover:text-white/20 transition-colors">
                    {step.step}
                  </div>

                  <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${gradients[index]} mb-6`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transform -translate-y-1/2 z-10 opacity-30">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 max-w-3xl">
            <h3 className="text-2xl font-bold text-white mb-6">
              Why Choose Technocrat Inc?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">10+</div>
                <div className="text-gray-400">Years of Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">50+</div>
                <div className="text-gray-400">Expert Professionals</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">98%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
