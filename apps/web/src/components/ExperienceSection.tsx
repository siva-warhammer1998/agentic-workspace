import React from 'react';
import { BriefcaseBusiness, ArrowUpRight } from 'lucide-react';
import Icon from './Icon';

const ExperienceSection: React.FC = () => {
  // Official corporate destinations verified 2026-10-06. Employer links stay
  // text-only until an official, permitted logo asset is available.
  // Display labels are fixed calendar months, independent of the viewer's timezone.
  const experiences = [
    {
      employer: 'TD Bank',
      url: 'https://www.td.com/',
      role: 'Engineer II — Cloud Platforms & Infrastructure',
      dates: {
        start: { value: '2026-02', label: 'Feb 2026' },
        end: null
      },
      description: 'Designing secure cloud connectivity, reusable infrastructure automation, and platform standards across AWS and Google Cloud.',
      impacts: [
        'Scope: AWS and Google Cloud connectivity, automation, and platform standards.',
        'Focus: reusable infrastructure patterns and developer enablement.'
      ]
    },
    {
      employer: 'BDO Digital',
      url: 'https://www.bdo.ca/',
      role: 'Cloud & Platform Engineer',
      dates: {
        start: { value: '2024-01', label: 'Jan 2024' },
        end: { value: '2026-01', label: 'Jan 2026' }
      },
      description: 'Built and automated secure multi-cloud infrastructure, Kubernetes platforms, private connectivity, and CI/CD patterns across AWS, Google Cloud, and Azure.',
      impacts: [
        'Scope: AWS, Google Cloud, Azure, Kubernetes, and private connectivity.',
        'Focus: infrastructure automation and CI/CD platform patterns.'
      ]
    },
    {
      employer: 'Canada Life',
      url: 'https://www.canadalife.com/',
      role: 'DevOps Engineering Intern',
      dates: {
        start: { value: '2023-01', label: 'Jan 2023' },
        end: { value: '2023-05', label: 'May 2023' }
      },
      description: 'Supported infrastructure automation, cloud security controls, monitoring, and production load-balancing environments.',
      impacts: [
        'Scope: infrastructure automation, cloud security, monitoring, and load balancing.',
        'Focus: operational support for production platform environments.'
      ]
    },
    {
      employer: 'Citicorp Services',
      url: 'https://www.citigroup.com/global',
      role: 'Software Engineer — Cloud-Native Platforms',
      dates: {
        start: { value: '2020-08', label: 'Aug 2020' },
        end: { value: '2022-08', label: 'Aug 2022' }
      },
      description: 'Built and supported Java services on Kubernetes, with CI/CD and production troubleshooting across application and infrastructure layers.',
      impacts: [
        'Scope: Java services, Kubernetes, CI/CD, and production support.',
        'Focus: application and infrastructure-layer troubleshooting.'
      ]
    }
  ];

  return (
    <section id="experience" className="experience" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="section-heading"><Icon icon={BriefcaseBusiness} /><span>Experience</span></h2>
      <ol className="experience-list" role="list">
        {experiences.map((exp) => (
          <li key={exp.employer} className="experience-item">
            <div className="experience-content">
              <h3 className="employer">
                <a
                  className="employer-link"
                  href={exp.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${exp.employer} official website (opens in a new tab)`}
                >
                  <span>{exp.employer}</span>
                  <Icon icon={ArrowUpRight} size="small" />
                </a>
              </h3>
              <p className="role">{exp.role}</p>
              <p className="experience-meta">
                <time dateTime={exp.dates.start.value}>{exp.dates.start.label}</time>
                {' – '}
                {exp.dates.end ? (
                  <time dateTime={exp.dates.end.value}>{exp.dates.end.label}</time>
                ) : (
                  <span>Present</span>
                )}
              </p>
              <p className="description">{exp.description}</p>
              <ul className="experience-impacts" role="list">
                {exp.impacts.map((impact) => <li key={impact}>{impact}</li>)}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default ExperienceSection;
