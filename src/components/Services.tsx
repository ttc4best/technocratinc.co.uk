import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Globe,
  ShoppingCart,
  Smartphone,
  Monitor,
  Cloud,
  BarChart3,
  Workflow,
  MessageSquare,
  Database,
  Sparkles,
  TrendingUp,
  ArrowUpRight
} from 'lucide-react';
import { supabase, Service } from '../lib/supabase';

const iconMap: Record<string, any> = {
  globe: Globe,
  'shopping-cart': ShoppingCart,
  smartphone: Smartphone,
  monitor: Monitor,
  cloud: Cloud,
  'bar-chart': BarChart3,
  workflow: Workflow,
  'message-square': MessageSquare,
  database: Database,
  sparkles: Sparkles,
  'trending-up': TrendingUp,
};

const gradientMap: Record<string, string> = {
  'blue': 'from-blue-600 to-cyan-600',
  'purple': 'from-purple-600 to-pink-600',
  'emerald': 'from-emerald-600 to-teal-600',
  'orange': 'from-orange-600 to-amber-600',
  'violet': 'from-violet-600 to-purple-600',
  'pink': 'from-pink-600 to-rose-600',
};

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true })
        .limit(6);

      if (error) throw error;
      setServices(data || []);
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  const getGradient = (index: number) => {
    const gradients = ['blue', 'purple', 'emerald', 'orange', 'violet', 'pink'];
    return gradientMap[gradients[index % gradients.length]];
  };

  if (loading) {
    return (
      <section id="services" className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-pink-600/10 rounded-full filter blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              What We Do Best
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              End-to-end digital solutions designed to transform your vision into reality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl animate-pulse">
                <div className="h-16 w-16 bg-white/10 rounded-2xl mb-6"></div>
                <div className="h-7 bg-white/10 rounded mb-4"></div>
                <div className="h-4 bg-white/10 rounded mb-2"></div>
                <div className="h-4 bg-white/10 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-pink-600/10 rounded-full filter blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            What We Do Best
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            End-to-end digital solutions designed to transform your vision into reality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Sparkles;
            const gradient = getGradient(index);

            return (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:scale-105 block"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.short_description}
                </p>

                <div className="flex items-center gap-2 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
          >
            View All Services
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
