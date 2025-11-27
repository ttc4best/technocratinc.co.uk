import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { supabase, CaseStudy } from '../lib/supabase';

export default function Portfolio() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const fetchCaseStudies = async () => {
    try {
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .order('display_order', { ascending: true })
        .limit(6);

      if (error) throw error;
      setCaseStudies(data || []);
    } catch (error) {
      console.error('Error fetching case studies:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return null;
  }

  if (caseStudies.length === 0) {
    return null;
  }

  return (
    <section id="portfolio" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Featured Work
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our portfolio of successful projects and digital transformations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              to={`/portfolio/${study.slug || study.id}`}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 block"
            >
              <div className="relative h-64 bg-gradient-to-br from-purple-900/20 to-pink-900/20 overflow-hidden">
                {study.image_url ? (
                  <img
                    src={study.image_url}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <ExternalLink className="w-16 h-16 text-slate-600" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <div className="text-sm font-semibold text-gradient mb-2">
                  {study.client}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all">
                  {study.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {study.description}
                </p>

                {study.services && study.services.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.services.slice(0, 3).map((service, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 bg-white/10 text-gray-300 rounded-full font-medium"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                )}

                {study.result && (
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-sm text-gray-300 font-medium">
                      {study.result}
                    </p>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
