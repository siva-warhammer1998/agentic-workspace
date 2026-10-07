import React from 'react';
import { MessageSquare } from 'lucide-react';
import Icon from './Icon';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="section-heading"><Icon icon={MessageSquare} /><span>Contact</span></h2>
      <a
        href="https://www.linkedin.com/in/siva-varman"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-link"
      >
        LinkedIn
      </a>
    </section>
  );
};

export default ContactSection;
