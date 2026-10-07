import React from 'react';
import { Award } from 'lucide-react';
import Icon from './Icon';

const CredentialsSection: React.FC = () => {
  return (
    <section id="credentials" className="credentials-section" aria-labelledby="credentials-heading">
      <h2 id="credentials-heading" className="section-heading"><Icon icon={Award} /><span>Certifications</span></h2>
      <ul className="credentials-list" role="list">
        <li>
          <span className="issuer">Google Cloud</span>
          {' — '}
          <span className="credential-name">Professional Cloud Network Engineer</span>
        </li>
        <li>
          <span className="issuer">Microsoft</span>
          {' — '}
          <span className="credential-name">Azure Fundamentals</span>
        </li>
      </ul>
    </section>
  );
};

export default CredentialsSection;
