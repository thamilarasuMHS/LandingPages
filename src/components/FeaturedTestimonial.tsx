import { Play } from 'lucide-react';

export default function FeaturedTestimonial() {
  return (
    <section className="py-12 bg-gradient-to-br from-[#7B2FFF]/5 to-[#C65BFF]/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-[#333333]">
              See What Our Participants Say
            </h3>
          </div>

          <div className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="aspect-video bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-10 h-10 ml-1" fill="white" />
                </div>
                <p className="text-lg font-semibold">Featured Success Story</p>
                <p className="text-sm opacity-90 mt-2">
                  Watch how this technique transformed their life
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
