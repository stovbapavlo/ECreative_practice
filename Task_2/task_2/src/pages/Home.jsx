import React from 'react';
import Hero from '../components/Hero';
import HowWeWork from '../components/HowWeWork';
import Projects from '../components/Projects';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import ContactPanel from '../components/ContactPanel';
import BlogSection from '../components/BlogSection';

export default function Home() {
  return (
    <div>
      <Hero />
      <HowWeWork />
      <Projects />
      <Features />
      <Testimonials />
      <FAQ />
      <ContactPanel />
      <BlogSection />
    </div>
  );
}
