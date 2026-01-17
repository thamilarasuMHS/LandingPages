import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedTestimonial from './components/FeaturedTestimonial';
import WhoShouldJoin from './components/WhoShouldJoin';
import WhatYouWillLearn from './components/WhatYouWillLearn';
import Testimonials from './components/Testimonials';
import MeetCoach from './components/MeetCoach';
import Bonuses from './components/Bonuses';
import SuccessStories from './components/SuccessStories';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import VariantControlPanel from './components/VariantControlPanel';
import { abTestConfig, ABTestConfig } from './config/abTestConfig';

function App() {
  const [variants, setVariants] = useState<ABTestConfig>(abTestConfig);

  const handleVariantChange = (updates: Partial<ABTestConfig>) => {
    setVariants((prev) => ({ ...prev, ...updates }));
  };

  const showFeaturedTestimonial = variants.socialProofPlacement === 'hero';

  return (
    <div className="min-h-screen bg-white">
      <Header variants={variants} />
      <Hero variants={variants} />
      {showFeaturedTestimonial && <FeaturedTestimonial />}
      <WhoShouldJoin />
      <WhatYouWillLearn />
      <Testimonials variants={variants} />
      <MeetCoach />
      <Bonuses />
      <SuccessStories />
      <FAQ />
      <Footer />
      <VariantControlPanel
        currentVariants={variants}
        onVariantChange={handleVariantChange}
      />
    </div>
  );
}

export default App;
