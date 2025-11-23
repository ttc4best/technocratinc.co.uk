import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Target, Users, Zap, Award, ArrowRight } from 'lucide-react';
import { supabase, TeamMember } from '../lib/supabase';
import Breadcrumbs from '../components/Breadcrumbs';

export default function AboutPage() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    try {
      const { data, error } = await supabase
        .from('team_members')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setTeam(data || []);
    } catch (error) {
      console.error('Error fetching team:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Breadcrumbs />

      <div className="pt-24 pb-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
            About Technocrat Inc
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're a team of passionate innovators dedicated to transforming businesses through technology
          </p>
        </div>
      </div>

      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Founded with a vision to bridge the gap between cutting-edge technology and business success,
              Technocrat Inc has been at the forefront of digital innovation for over a decade. We believe
              that technology should empower businesses, not complicate them.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our team of 50+ experts brings together diverse skills in web development, mobile applications,
              cloud computing, artificial intelligence, and data science. We've successfully delivered 150+
              projects across various industries, maintaining a 98% client satisfaction rate.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full filter blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl text-center hover:bg-white/10 transition-all duration-500">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
              <p className="text-gray-400">
                We strive for excellence in every project, delivering quality that exceeds expectations.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl text-center hover:bg-white/10 transition-all duration-500">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Collaboration</h3>
              <p className="text-gray-400">
                We work closely with our clients, ensuring their vision is at the heart of every solution.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl text-center hover:bg-white/10 transition-all duration-500">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
              <p className="text-gray-400">
                We embrace cutting-edge technologies to create solutions that drive real business value.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl text-center hover:bg-white/10 transition-all duration-500">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-orange-600 to-amber-600 mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Integrity</h3>
              <p className="text-gray-400">
                We build lasting relationships through transparency, honesty, and ethical practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {team.length > 0 && (
        <section className="py-16 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Meet Our Team
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div key={member.id} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-center hover:bg-white/10 transition-all duration-500">
                  {member.photo_url ? (
                    <img
                      src={member.photo_url}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white text-3xl font-bold">
                      {member.name.charAt(0)}
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-gradient font-medium mb-3">{member.position}</p>
                  <p className="text-gray-400 text-sm line-clamp-3">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl"></div>
        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Ready to take your business to the next level? Get in touch with our team today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
