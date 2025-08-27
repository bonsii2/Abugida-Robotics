import React from 'react'
import MissionSection from "./OurMission";
import FounderSection from "./Founder";
import ManagerSection from "./manager";
import InstructorsSection from "./OurInstructor";

function About() {
  return (
    <div className='bg-white'>
      <MissionSection />
      <FounderSection />
      <ManagerSection />
      <InstructorsSection />
    </div>
  );
}

export default About