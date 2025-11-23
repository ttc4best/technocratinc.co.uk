import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { supabase, CaseStudy } from '../lib/supabase';
import Breadcrumbs from '../components/Breadcrumbs';

export default function PortfolioPage() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const fetchCaseStudies = async () => {
    try {
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setCaseStudies(data || []);
    } catch (error) {
      console.error('Error fetching case studies:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = ['all', ...Array.from(new Set(caseStudies.flatMap(cs => cs.services)))];
  const filteredStudies = filter === 'all'
    ? caseStudies
    : caseStudies.filter(cs => cs.services.includes(filter));

  return (
    <>
      <Breadcrumbs />

      <div className="pt-24 pb-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our portfolio of successful projects and digital transformations
          </p>
        </div>
      </div>

      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {categories.length > 1 && (
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    filter === category
                      ? 'bg-white text-black shadow-lg shadow-purple-500/20'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          )}

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden animate-pulse">
                  <div className="h-64 bg-white/5"></div>
                  <div className="p-6">
                    <div className="h-6 bg-white/10 rounded mb-3"></div>
                    <div className="h-4 bg-white/10 rounded w-2/3"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredStudies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStudies.map((study) => (
                <Link
                  key={study.id}
                  to={`/portfolio/${study.slug || study.id}`}
                  className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105"
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
                        <ExternalLink className="w-16 h-16 text-gray-600" />
                      </div>
                    )}
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
                      <div className="flex flex-wrap gap-2">
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
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No projects found for this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
