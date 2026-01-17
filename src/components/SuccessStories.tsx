import { Star } from 'lucide-react';

export default function SuccessStories() {
  const stories = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai, India',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      story: 'After attending the masterclass, I finally broke free from years of self-doubt and limiting beliefs. Within 3 months, I manifested my dream job and attracted amazing relationships into my life. The transformation has been absolutely life-changing!'
    },
    {
      name: 'Rahul Mehta',
      location: 'Bangalore, India',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
      story: 'I was struggling with anxiety and financial stress for years. The techniques I learned helped me completely transform my mindset. Today, I wake up with clarity, my business is thriving, and I feel more abundant than ever before.'
    },
    {
      name: 'Anjali Patel',
      location: 'Delhi, India',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
      story: 'The 7-step goal achievement system changed everything for me. I healed my relationships, overcame emotional pain, and learned to truly love myself. This masterclass gave me the tools to create the life I always dreamed of living.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">
              Real Success Stories
            </h2>
            <p className="text-xl text-[#555555]">
              Join thousands who have already transformed their lives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-purple-200"
                  />
                  <div>
                    <h3 className="font-bold text-lg text-[#333333]">{story.name}</h3>
                    <p className="text-sm text-[#555555]">{story.location}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-[#555555] leading-relaxed italic">
                  "{story.story}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
