import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle } from 'lucide-react';
import { supabase, CaseStudy } from '../lib/supabase';
import Breadcrumbs from '../components/Breadcrumbs';

export default function PortfolioDetail() {
  const { slug } = useParams();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchCaseStudy();
    }
  }, [slug]);

  const fetchCaseStudy = async () => {
    try {
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();

      if (error) throw error;
      setCaseStudy(data);
    } catch (error) {
      console.error('Error fetching case study:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Breadcrumbs />
        <div className="pt-24 pb-16 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="animate-pulse">
              <div className="h-12 bg-white/10 rounded w-1/2 mb-6"></div>
              <div className="h-6 bg-white/10 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (!caseStudy) {
    return (
      <>
        <Breadcrumbs />
        <div className="pt-24 pb-32 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              Case Study Not Found
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              The case study you're looking for doesn't exist or has been removed.
            </p>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </>
    );
  }

  const resultPoints = caseStudy.result?.split('•').filter(point => point.trim());

  return (
    <>
      <Breadcrumbs />

      <div className="pt-24 pb-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full filter blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-8">
            <span className="text-gradient text-lg font-semibold">
              {caseStudy.client}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-white max-w-4xl">
            {caseStudy.title}
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mb-8">
            {caseStudy.description}
          </p>

          {caseStudy.services && caseStudy.services.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-8">
              {caseStudy.services.map((service, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-white/10 text-white rounded-full font-medium border border-white/20"
                >
                  {service}
                </span>
              ))}
            </div>
          )}

          {caseStudy.project_url && (
            <a
              href={caseStudy.project_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-semibold hover:text-gradient transition-all"
            >
              Visit Project
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {caseStudy.image_url && (
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="relative rounded-3xl overflow-hidden border border-white/10">
              <img
                src={caseStudy.image_url}
                alt={caseStudy.title}
                className="w-full h-auto max-h-[600px] object-cover"
              />
            </div>
          </div>
        </section>
      )}

      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {caseStudy.challenge && (
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">
                  The Challenge
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {caseStudy.challenge}
                </p>
              </div>
            )}

            {caseStudy.solution && (
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Our Solution
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {caseStudy.solution}
                </p>
              </div>
            )}
          </div>

          {resultPoints && resultPoints.length > 0 && (
            <div className="mt-16 bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-8 text-center">
                Results & Impact
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resultPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-200 text-lg">
                      {point.trim()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {caseStudy.technologies && caseStudy.technologies.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-4 justify-center">
                {caseStudy.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-6 py-3 bg-white/10 text-white rounded-full font-medium border border-white/20 text-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full filter blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Ready to Start Your
            <br />
            <span className="text-gradient">Success Story?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Let's discuss how we can help transform your business with cutting-edge technology
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
    </>
  );
}
