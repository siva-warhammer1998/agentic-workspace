import React from 'react';
import { NotebookPen, ArrowUpRight, FileText } from 'lucide-react';
import Icon from './Icon';
import MediumMark from './MediumMark';

// Titles, publication dates, URLs, and excerpts verified against the author's
// public Medium feed: https://medium.com/feed/@assiva002
const articles = [
  {
    "title": "Building Multi-Agent Systems on GCP: An Architectural Patterns Framework",
    "url": "https://medium.com/@assiva002/building-multi-agent-systems-on-gcp-an-architectural-patterns-framework-81072d2d60b8",
    "date": "2025-11-25",
    "displayDate": "Nov 25, 2025",
    "excerpt": "A Technical Reference for Cloud & Platform Engineers Using Google’s Agent Development Kit"
  },
  {
    "title": "Building Robust Applications with the Google Cloud Architecture Framework",
    "url": "https://medium.com/@assiva002/building-robust-applications-with-the-google-cloud-architecture-framework-25cd873aef8d",
    "date": "2025-07-17",
    "displayDate": "Jul 17, 2025",
    "excerpt": "In today’s fast-paced and highly connected digital world, designing and operating cloud-native applications requires more than just scalable infrastructure."
  },
  {
    "title": "Creating my First Official Terraform module",
    "url": "https://medium.com/@assiva002/creating-my-first-official-terraform-module-64b04e0106ff",
    "date": "2025-03-21",
    "displayDate": "Mar 21, 2025",
    "excerpt": "By developing a Terraform module, I aimed to create a standardized, reusable solution that automates the deployment of AWS Cloud WAN components…"
  }
];

const SelectedWriting: React.FC = () => {
  return (
    <section id="selected-writing" className="selected-writing" aria-labelledby="selected-writing-heading">
      <h2 id="selected-writing-heading" className="section-heading"><Icon icon={NotebookPen} /><span>Selected Writing</span></h2>
      <ul className="writing-records" role="list">
        {articles.map((article, index) => (
          <li key={article.url} className={`writing-record${index === 0 ? ' writing-record--featured' : ''}`}>
            <div className="writing-meta">
              <Icon icon={FileText} size={index === 0 ? 'feature' : 'section'} />
              <time className="writing-date" dateTime={article.date}>{article.displayDate}</time>
            </div>
            <h3 className="title">{article.title}</h3>
            <p className="description">{article.excerpt}</p>
            <a
              className="writing-link"
              href={article.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Read ${article.title} on Medium (opens in a new tab)`}
            >
              <span>Read on Medium</span><Icon icon={ArrowUpRight} size="small" />
            </a>
          </li>
        ))}
      </ul>
      <p className="writing-footer">
        <a
          className="writing-link"
          href="https://medium.com/@assiva002"
          target="_blank"
          rel="noreferrer"
          aria-label="View all writing on Medium (opens in a new tab)"
        >
          <MediumMark /><span>View all writing on Medium</span><Icon icon={ArrowUpRight} size="small" />
        </a>
      </p>
    </section>
  );
};

export default SelectedWriting;
