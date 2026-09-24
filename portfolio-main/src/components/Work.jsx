import { useMemo, useState } from 'react';
import ProjectModal from './ProjectModal';
import MaskedTitle from './MaskedTitle';

export default function Work() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(null);

  const projects = useMemo(
    () => [
      {
        bgClass: 'bg-1',
        shortTitle: 'Network Traffic Analysis',
        category: 'CYBERSECURITY • NETWORK MONITORING',
        tagline: 'Network Traffic Analysis & Security Monitoring',
        description:
          'A practical security lab focused on analyzing captured network traffic to understand protocols, endpoints, ports, source and destination addressing, and communication flows.',
        problem:
          'Security monitoring requires understanding normal network communication and recognizing activity that may indicate a security concern.',
        solution:
          'Used Wireshark and Linux-based tooling to inspect packets and communication flows, building practical understanding of network traffic analysis and packet-level security monitoring.',
        techStack: ['Wireshark', 'TCP/IP', 'HTTP', 'Linux'],
        features: [
          'Protocol and endpoint analysis',
          'Packet-level inspection',
          'Port and addressing analysis',
          'Network communication monitoring'
        ],
        architectureFlow: [
          { step: '01', title: 'Capture', tech: 'Network Traffic', desc: 'Work with captured communication data for security analysis.' },
          { step: '02', title: 'Inspect', tech: 'Wireshark', desc: 'Review packets, protocols, ports, and addressing information.' },
          { step: '03', title: 'Analyze', tech: 'TCP/IP • HTTP', desc: 'Understand communication flows and network behavior.' },
          { step: '04', title: 'Monitor', tech: 'Security Analysis', desc: 'Use packet-level observations to identify potential security concerns.' }
        ],
        architectureDetails: [
          { title: 'Packet Analysis', desc: 'Inspected captured traffic to understand network activity at packet level.' },
          { title: 'Protocol Understanding', desc: 'Analyzed common communication protocols, endpoints, ports, and addressing.' },
          { title: 'Security Monitoring', desc: 'Applied traffic-analysis concepts to build practical security monitoring skills.' }
        ],
        metrics: [
          { label: 'Focus', value: 'Traffic Analysis' },
          { label: 'Tool', value: 'Wireshark' },
          { label: 'Environment', value: 'Linux' },
          { label: 'Protocol', value: 'TCP/IP • HTTP' }
        ],
        title: 'Network Traffic Analysis & Security Monitoring'
      },
      {
        bgClass: 'bg-2',
        shortTitle: 'Vulnerability Assessment Lab',
        category: 'CYBERSECURITY • WEB SECURITY',
        tagline: 'Vulnerability Assessment & Web Security Lab',
        description:
          'A hands-on cybersecurity lab covering vulnerability scanning, web application risks, identity controls, patch management, and remediation concepts.',
        problem:
          'Security teams need to identify vulnerabilities, understand their categories, and connect findings with practical remediation and security controls.',
        solution:
          'Practiced vulnerability scanning with Nessus/OpenVAS and studied web application risks through OWASP Top 10, along with authentication, authorization, MFA, patch management, and remediation workflows.',
        techStack: ['Kali Linux', 'Nessus/OpenVAS', 'OWASP Top 10', 'Burp Suite'],
        features: [
          'Vulnerability scanning',
          'OWASP Top 10 study',
          'Authentication and authorization',
          'MFA and remediation concepts'
        ],
        architectureFlow: [
          { step: '01', title: 'Assess', tech: 'Nessus • OpenVAS', desc: 'Perform foundational vulnerability scanning exercises.' },
          { step: '02', title: 'Classify', tech: 'Vulnerability Categories', desc: 'Review vulnerability types and security implications.' },
          { step: '03', title: 'Secure', tech: 'OWASP Top 10', desc: 'Study common web application security risks and identity controls.' },
          { step: '04', title: 'Remediate', tech: 'Patch Management', desc: 'Connect findings with mitigation, patching, and remediation workflows.' }
        ],
        architectureDetails: [
          { title: 'Vulnerability Assessment', desc: 'Practiced scanning and reviewed vulnerability categories and mitigation concepts.' },
          { title: 'Web Security', desc: 'Studied common web application risks using the OWASP Top 10 framework.' },
          { title: 'Identity Controls', desc: 'Explored authentication, authorization, MFA, and cryptography fundamentals.' }
        ],
        metrics: [
          { label: 'Focus', value: 'Vulnerability Assessment' },
          { label: 'Tools', value: 'Nessus/OpenVAS' },
          { label: 'Web Standard', value: 'OWASP Top 10' },
          { label: 'Platform', value: 'Kali Linux' }
        ],
        title: 'Vulnerability Assessment & Web Security Lab'
      },
      {
        bgClass: 'bg-3',
        shortTitle: 'Precision Farming',
        category: 'PYTHON • SQL • APPLICATION PROJECT',
        tagline: 'Precision Farming – Crop Recommendation System',
        description:
          'A recommendation-based application using environmental and soil-related inputs to support crop selection, with data processing and recommendation logic implemented using Python and SQL.',
        problem:
          'Crop selection can benefit from structured analysis of environmental and soil-related inputs.',
        solution:
          'Developed a recommendation-based application that processes environmental and soil-related inputs and applies recommendation logic to support crop selection.',
        techStack: ['Python', 'SQL'],
        features: [
          'Environmental input processing',
          'Soil-related data handling',
          'Recommendation logic',
          'Python and SQL implementation'
        ],
        architectureFlow: [
          { step: '01', title: 'Input', tech: 'Soil • Environment', desc: 'Collect environmental and soil-related inputs.' },
          { step: '02', title: 'Process', tech: 'Python', desc: 'Process the supplied data for recommendation logic.' },
          { step: '03', title: 'Query', tech: 'SQL', desc: 'Use SQL for structured data handling.' },
          { step: '04', title: 'Recommend', tech: 'Crop Selection', desc: 'Generate crop recommendations from the processed inputs.' }
        ],
        architectureDetails: [
          { title: 'Data Processing', desc: 'Implemented processing logic for environmental and soil-related inputs.' },
          { title: 'Recommendation Logic', desc: 'Built application logic to support crop selection.' },
          { title: 'Programming & Database', desc: 'Used Python and SQL as the core implementation technologies.' }
        ],
        metrics: [
          { label: 'Domain', value: 'Precision Farming' },
          { label: 'Language', value: 'Python' },
          { label: 'Database', value: 'SQL' },
          { label: 'Output', value: 'Crop Recommendation' }
        ],
        title: 'Precision Farming – Crop Recommendation System'
      }
    ],
    []
  );

  const activeProject = activeProjectIndex === null ? null : projects[activeProjectIndex];

  return (
    <section id="work" className="container work-page-section">
      <div className="gsap-reveal work-header">
        <MaskedTitle number="2." text="Featured Work" />
        <div className="divider" />
      </div>

      <div className="work-grid">
        {projects.map((proj, index) => (
          <div
            key={proj.title}
            className="project-card hoverable gsap-work-card"
            role="button"
            tabIndex={0}
            onClick={() => setActiveProjectIndex(index)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setActiveProjectIndex(index);
            }}
            aria-label={`Open project: ${proj.title}`}
          >
            <div className={`project-bg ${proj.bgClass}`} />
            <div className="project-overlay" />
            <div className="project-info">
              <p className="font-mono project-category text-gray uppercase">{proj.category}</p>
              <h3 className="project-title text-glow uppercase">{proj.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal
        open={activeProjectIndex !== null}
        onClose={() => setActiveProjectIndex(null)}
        project={activeProject}
      />
    </section>
  );
}
