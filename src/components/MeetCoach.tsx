import { Award, Users } from 'lucide-react';

export default function MeetCoach() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#7B2FFF] via-[#8C3BFF] to-[#C65BFF]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Meet Your Coach
            </h2>
            <p className="text-xl text-white/90">
              Learn from an experienced healing and manifestation expert
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-3xl blur-2xl"></div>
                <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border-4 border-white/30 overflow-hidden flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-purple-300 to-purple-500 opacity-40"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-2xl font-semibold">Gayathri Shivaram</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-white space-y-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                  Gayathri Shivaram
                </h3>
                <p className="text-xl opacity-90 mb-6">
                  Healing & Manifestation Coach
                </p>
              </div>

              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
                <Award className="w-8 h-8 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-lg">10+ Years Experience</p>
                  <p className="text-sm opacity-80">In Healing & Transformation</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
                <Users className="w-8 h-8 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-lg">1.5M+ Social Followers</p>
                  <p className="text-sm opacity-80">Trusted by millions worldwide</p>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-lg leading-relaxed opacity-95">
                  Gayathri Shivaram is a renowned healing and manifestation coach with over a decade of experience helping people transform their lives. With a unique blend of ancient wisdom and modern techniques, she has guided over 200,000 individuals on their journey to healing, abundance, and self-discovery. Her compassionate approach and proven methods have made her one of the most sought-after coaches in the field of personal transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
