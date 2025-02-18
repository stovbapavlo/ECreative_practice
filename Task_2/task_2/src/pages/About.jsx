import React from 'react';
import AboutHero from '../components/AboutHero';
import WhoWeAre from '../components/WhoWeAre';
import Process from '../components/Process';
import MissionVision from '../components/MissionVision';
import Benefits from '../components/Benefits';
import Team from '../components/Team';

const About = () => {
  return (
    <div>
      <AboutHero />
      <WhoWeAre />
      <Process />
      <MissionVision />
      <Benefits />
      <Team />
      {/* Інші секції About тут */}
    </div>
  );
};

export default About;
