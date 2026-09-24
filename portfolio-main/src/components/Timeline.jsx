import { useState, useEffect, useRef, useCallback } from 'react';
import { useAudio } from '../hooks/useAudio';
import { WebArchitectureCanvas } from './TimelineVisualizers';
import MaskedTitle from './MaskedTitle';

export default function Timeline() {
  const { playHoverSound, playClickSound } = useAudio();
  const [activeEpochIndex, setActiveEpochIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const epochs = [
    {
      epoch: '01',
      date: '05 MAY 2026 – 30 JUN 2026',
      stageLabel: 'EXPERIENCE 01',
      category: 'CYBER SECURITY INTERNSHIP',
      dockLabel: 'SECURITY',
      title: 'Cyber Security Intern',
      headline: 'Security Analysis • Vulnerability Assessment • Network Monitoring',
      summary:
        'Worked on foundational cybersecurity concepts, vulnerability assessment and penetration-testing exercises, network traffic analysis, monitoring, and web application security using industry-standard concepts and tools.',
      metrics: [
        { label: 'Organization', value: 'APP Genesis Soft Solutions' },
        { label: 'Focus', value: 'Security Analysis' },
        { label: 'Tools', value: 'Wireshark • Kali • Nessus/OpenVAS' }
      ],
      techStack: ['Wireshark', 'Kali Linux', 'Nessus/OpenVAS', 'OWASP Top 10', 'Burp Suite'],
      Visualizer: WebArchitectureCanvas
    },
    {
      epoch: '02',
      date: '05 MAY 2026 – 30 JUN 2026',
      stageLabel: 'EXPERIENCE 02',
      category: 'AWS WITH AI INTERNSHIP',
      dockLabel: 'AWS',
      title: 'AWS with AI Intern',
      headline: 'Cloud Resources • Access Management • AWS Security Foundations',
      summary:
        'Worked with AWS EC2, S3, IAM, and VPC while building foundational understanding of cloud resource management, user access management, cloud security practices, and AI/ML concepts on AWS.',
      metrics: [
        { label: 'Organization', value: 'APP Genesis Soft Solutions' },
        { label: 'Cloud', value: 'AWS EC2 • S3 • IAM • VPC' },
        { label: 'Focus', value: 'Cloud Security' }
      ],
      techStack: ['AWS EC2', 'AWS S3', 'AWS IAM', 'AWS VPC', 'Cloud Security'],
      Visualizer: WebArchitectureCanvas
    },
    {
      epoch: '03',
      date: 'ACADEMIC LAB',
      stageLabel: 'PROJECT 01',
      category: 'NETWORK & WEB SECURITY',
      dockLabel: 'SECURITY LAB',
      title: 'Security Labs',
      headline: 'Traffic Analysis • Vulnerability Assessment • OWASP',
      summary:
        'Built practical cybersecurity understanding through network traffic analysis and security monitoring, vulnerability scanning, web application security study, and identity-control exercises.',
      metrics: [
        { label: 'Network', value: 'TCP/IP • HTTP' },
        { label: 'Scanning', value: 'Nessus/OpenVAS' },
        { label: 'Web Security', value: 'OWASP Top 10' }
      ],
      techStack: ['Wireshark', 'Nmap', 'Burp Suite', 'Kali Linux', 'Nessus/OpenVAS'],
      Visualizer: WebArchitectureCanvas
    },
    {
      epoch: '04',
      date: 'ACADEMIC PROJECT',
      stageLabel: 'PROJECT 02',
      category: 'PYTHON • SQL',
      dockLabel: 'PRECISION FARMING',
      title: 'Crop Recommendation System',
      headline: 'Environmental & Soil Inputs → Crop Recommendation',
      summary:
        'Developed a recommendation-based application using environmental and soil-related inputs, implementing data processing and recommendation logic with Python and SQL.',
      metrics: [
        { label: 'Language', value: 'Python' },
        { label: 'Database', value: 'SQL' },
        { label: 'Domain', value: 'Precision Farming' }
      ],
      techStack: ['Python', 'SQL', 'Data Processing', 'Recommendation Logic'],
      Visualizer: WebArchitectureCanvas
    }
  ];

  // Auto-running loop across 4 stages (pauses on hover so user can read)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveEpochIndex((prev) => (prev + 1) % epochs.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, epochs.length]);

  // Move button controls (loops infinitely in both directions)
  const handleNext = useCallback(() => {
    playClickSound();
    setActiveEpochIndex((prev) => (prev + 1) % epochs.length);
  }, [epochs.length, playClickSound]);

  const handlePrev = useCallback(() => {
    playClickSound();
    setActiveEpochIndex((prev) => (prev - 1 + epochs.length) % epochs.length);
  }, [epochs.length, playClickSound]);

  const goToEpoch = useCallback((targetIndex) => {
    if (targetIndex < 0 || targetIndex >= epochs.length) return;
    playClickSound();
    setActiveEpochIndex(targetIndex);
  }, [epochs.length, playClickSound]);

  // Keyboard Arrow navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  return (
    <section className="container timeline-section" id="experience">
      {/* Aligned Section Header matching #about, #work, #skills */}
      <div className="timeline-header">
        <div className="gsap-reveal">
          <MaskedTitle text="Engineering Journey" />
          <div className="divider" />
        </div>
        <div className="timeline-header-meta font-mono">
          <div className="timeline-meta-pill">
            <span className={`meta-pulse-dot ${isPaused ? 'is-paused' : ''}`} />
            <span className="meta-pill-text">
              STAGE 0{activeEpochIndex + 1}/04 • {isPaused ? 'INTERACTIVE' : 'AUTO-RUNNING'}
            </span>
          </div>
          <div className="timeline-jump-strip">
            {epochs.map((ep, i) => (
              <button
                key={ep.epoch}
                type="button"
                onClick={() => goToEpoch(i)}
                onMouseEnter={playHoverSound}
                className={`timeline-jump-pill hoverable ${activeEpochIndex === i ? 'is-active' : ''}`}
                aria-label={`Jump to stage 0${i + 1}`}
              >
                0{i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Stage Slider with Side Navigation Arrows & Auto-running Loop */}
      <div
        className="timeline-stage-wrapper"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button
          type="button"
          className="timeline-side-arrow timeline-arrow-prev hoverable font-mono"
          onClick={handlePrev}
          onMouseEnter={playHoverSound}
          aria-label="Previous phase"
          title="Previous stage"
        >
          ‹
        </button>

        <div className="timeline-carousel-shell">
          <div
            className="timeline-cards-track"
            style={{ transform: `translateX(-${activeEpochIndex * 100}%)` }}
          >
            {epochs.map((item, idx) => {
              const Visualizer = item.Visualizer;
              const isActive = activeEpochIndex === idx;

              return (
                <div
                  key={item.epoch}
                  className={`timeline-card-slide ${isActive ? 'is-active' : ''}`}
                  onMouseEnter={() => {
                    if (!isActive) playHoverSound();
                  }}
                >
                  {/* Stage Container Card */}
                  <div className="timeline-stage-card hoverable">
                    {/* Left Pane: Narrative & Technical Telemetry */}
                    <div className="timeline-narrative-pane">
                      <div className="stage-topbar font-mono">
                        <div className="stage-topbar-left">
                          <span className="stage-badge uppercase">{item.category}</span>
                          <span className="stage-date uppercase">{item.date}</span>
                        </div>
                        <span className="stage-step-tag text-gray">{item.stageLabel}</span>
                      </div>

                      <div className="stage-title-wrap">
                        <h3 className="stage-title uppercase text-glow">{item.title}</h3>
                        <div className="stage-headline font-mono text-gray uppercase">{item.headline}</div>
                      </div>

                      <p className="stage-summary text-gray">{item.summary}</p>

                      {/* Telemetry Metrics Grid */}
                      <div className="stage-metrics-grid font-mono">
                        {item.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="stage-metric-box">
                            <span className="metric-lbl text-gray">{m.label}</span>
                            <span className="metric-val">{m.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Pills matching .skill-pill */}
                      <div className="stage-tech-pills font-mono">
                        {item.techStack.map((tech, tIdx) => (
                          <span key={tIdx} className="stage-pill">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Pane: 2D Live Visualizer Canvas */}
                    <div className="timeline-simulation-pane">
                      <div className="terminal-canvas-wrapper">
                        <Visualizer isActive={isActive} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          className="timeline-side-arrow timeline-arrow-next hoverable font-mono"
          onClick={handleNext}
          onMouseEnter={playHoverSound}
          aria-label="Next phase"
          title="Next stage"
        >
          ›
        </button>
      </div>
    </section>
  );
}
