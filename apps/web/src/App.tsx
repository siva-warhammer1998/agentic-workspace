import React, { useEffect, useState } from 'react';
import { Award, Blocks, BriefcaseBusiness, MessageSquare, NotebookPen, UserRound } from 'lucide-react';
import Icon from './components/Icon';
import ThemeToggle from './components/ThemeToggle';
import { BrandMark, RailTopology } from './components/RailArtwork';
import CapabilitiesSection from './components/CapabilitiesSection';
import ExperienceSection from './components/ExperienceSection';
import CredentialsSection from './components/CredentialsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import SelectedWriting from './components/SelectedWriting';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('experience');
  const [hasEntered, setHasEntered] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main > section[id]'));
    let frame = 0;

    const updateActiveSection = () => {
      frame = 0;
      const readingLine = Math.min(window.innerHeight * 0.3, 240);
      let current = sections[0];

      for (const section of sections) {
        if (section.getBoundingClientRect().top > readingLine) break;
        current = section;
      }

      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        current = sections[sections.length - 1];
      }

      if (current) setActiveSection(current.id);
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection);
    };

    // Keep the indicator aligned with the reading position, including font reflow.
    const observer = new ResizeObserver(scheduleUpdate);
    const main = document.getElementById('main-content');
    if (main) observer.observe(main);
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    window.addEventListener('hashchange', scheduleUpdate);
    updateActiveSection();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      window.removeEventListener('hashchange', scheduleUpdate);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      className={`app-layout${hasEntered ? ' has-entered' : ''}`}
      onFocusCapture={() => setHasEntered(true)}
    >
      <aside className="left-rail" aria-label="Introduction">
        <RailTopology />
        <div className="rail-content">
          <div className="rail-identity">
            <div className="rail-tools">
              <BrandMark />
              <ThemeToggle />
            </div>
            <h1 className="name">Siva Varman</h1>
            <p className="role">Cloud & Security Infrastructure Engineer</p>
            <p className="value-prop">
              I design secure cloud platforms, automate infrastructure, and enable
              developers through reliable connectivity and repeatable patterns.
            </p>
          </div>
          <nav className="rail-nav" aria-label="Portfolio sections">
            <a href="#experience" aria-current={activeSection === 'experience' ? 'location' : undefined}><Icon icon={BriefcaseBusiness} size="small" /><span>Experience</span></a>
            <a href="#credentials" aria-current={activeSection === 'credentials' ? 'location' : undefined}><Icon icon={Award} size="small" /><span>Certifications</span></a>
            <a href="#selected-writing" aria-current={activeSection === 'selected-writing' ? 'location' : undefined}><Icon icon={NotebookPen} size="small" /><span>Writing</span></a>
            <a href="#capabilities" aria-current={activeSection === 'capabilities' ? 'location' : undefined}><Icon icon={Blocks} size="small" /><span>Capabilities</span></a>
            <a href="#about" aria-current={activeSection === 'about' ? 'location' : undefined}><Icon icon={UserRound} size="small" /><span>About</span></a>
            <a href="#contact" aria-current={activeSection === 'contact' ? 'location' : undefined}><Icon icon={MessageSquare} size="small" /><span>Contact</span></a>
          </nav>
        </div>
      </aside>
      <main
        id="main-content"
        className="right-content"
        tabIndex={-1}
        onAnimationEnd={(event) => {
          if (event.target === event.currentTarget && event.animationName === 'editorial-entrance') {
            setHasEntered(true);
          }
        }}
      >
        <ExperienceSection />
        <CredentialsSection />
        <SelectedWriting />
        <CapabilitiesSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default App;
