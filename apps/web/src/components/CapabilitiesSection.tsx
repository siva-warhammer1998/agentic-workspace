import React from 'react';
import { Blocks, Container, Network, ShieldCheck, Workflow } from 'lucide-react';
import Icon from './Icon';

const capabilityAreas = [
  {
    title: 'Cloud Networking & Connectivity',
    description: 'Designing secure, scalable paths between cloud environments, applications, and hybrid networks.',
    icon: Network,
    capabilities: [
      'AWS Cloud WAN',
      'Transit Gateway',
      'VPC/VNet',
      'PrivateLink / Private Endpoints',
      'Direct Connect',
      'VPN',
      'BGP',
      'DNS',
      'Load Balancing',
      'Network Segmentation',
    ],
  },
  {
    title: 'Infrastructure Automation & Delivery',
    description: 'Codifying repeatable infrastructure changes and dependable delivery workflows across cloud platforms.',
    icon: Workflow,
    capabilities: [
      'Terraform',
      'Go',
      'Python',
      'Bicep',
      'Ansible',
      'GitHub Actions',
      'GitLab CI/CD',
      'Jenkins',
      'GitHub OIDC',
    ],
  },
  {
    title: 'Platforms & Reliability',
    description: 'Building and operating platform foundations that support reliable workloads and practical production response.',
    icon: Container,
    capabilities: [
      'Kubernetes',
      'EKS',
      'GKE',
      'CloudWatch',
      'Datadog',
      'Dynatrace',
      'Production Troubleshooting',
      'Platform Standards',
    ],
  },
  {
    title: 'Cloud Security & Identity',
    description: 'Applying identity, network, and connectivity controls to support secure cloud platform patterns.',
    icon: ShieldCheck,
    capabilities: [
      'IAM',
      'Workload Identity',
      'GitHub OIDC',
      'Network Security',
      'Palo Alto NGFW',
      'Secure Connectivity Patterns',
    ],
  },
];

const CapabilitiesSection: React.FC = () => (
  <section id="capabilities" className="capabilities" aria-labelledby="capabilities-heading">
    <h2 id="capabilities-heading" className="section-heading">
      <Icon icon={Blocks} />
      <span>Capabilities</span>
    </h2>
    <ul className="capability-areas" role="list">
      {capabilityAreas.map((area) => (
        <li key={area.title} className="capability-area">
          <div className="capability-intro">
            <h3 className="capability-heading">
              <Icon icon={area.icon} size="small" />
              <span>{area.title}</span>
            </h3>
            <p className="capability-description">{area.description}</p>
          </div>
          <ul className="capability-labels" role="list">
            {area.capabilities.map((capability) => (
              <li key={capability}>{capability}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </section>
);

export default CapabilitiesSection;
