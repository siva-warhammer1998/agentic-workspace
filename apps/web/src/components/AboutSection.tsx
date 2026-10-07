import React from 'react';
import { UserRound } from 'lucide-react';
import Icon from './Icon';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <h2 id="about-heading" className="section-heading"><Icon icon={UserRound} /><span>About Me</span></h2>
      <p>
        I build infrastructure at the intersection of cloud platforms, networking, security, and developer enablement. My work centers on designing reliable connectivity, codifying repeatable infrastructure patterns, and solving complex production issues across application, Kubernetes, network, and cloud layers.
      </p>
    </section>
  );
};

export default AboutSection;
