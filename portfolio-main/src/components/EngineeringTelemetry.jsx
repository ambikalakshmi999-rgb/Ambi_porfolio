import { useAudio } from '../hooks/useAudio';
import ambikaphoto from '../assets/MYphoto.jpeg';

export default function EngineeringTelemetry() {
  const { playHoverSound, playClickSound } = useAudio();

  return (
    <div className="telemetry-command-deck gsap-reveal font-mono">
      <div className="telemetry-header">
        <div className="telemetry-header-left">
          <span className="telemetry-live-dot" />
          <span className="telemetry-hud-tag">Current Activity & Profiles</span>
        </div>
        <span className="telemetry-hud-status">Cybersecurity • Open for Opportunities</span>
      </div>

      <div className="telemetry-grid">
        <div className="telemetry-card hoverable">
          <div className="telemetry-card-top">
            <span className="card-badge">CURRENT FOCUS</span>
            <span className="card-indicator">Active</span>
          </div>
          <h3 className="telemetry-card-title">Cybersecurity & Cloud Security</h3>
          <p className="telemetry-card-text text-gray">
            Building practical experience in security analysis, vulnerability assessment, network monitoring, web application security, and AWS environments.
          </p>
          <div className="telemetry-meta-row text-gray">
            <span>CORE TOOLS:</span>
            <span className="meta-highlight">Wireshark, Kali Linux, Nmap, Burp Suite, Nessus/OpenVAS, AWS</span>
          </div>
        </div>

        <div className="telemetry-card hoverable">
          <div className="telemetry-card-top">
            <span className="card-badge">TECHNICAL PRACTICE</span>
            <span className="card-indicator"></span>
          </div>
          <h3 className="telemetry-card-title">Security Labs & Projects</h3>
          <p className="telemetry-card-text text-gray">
            Practical work includes network traffic analysis, vulnerability assessment and web security labs, plus a Python and SQL crop recommendation project.
          </p>
          <div className="telemetry-actions-list">
            <a
              href="https://github.com/ambikalakshmi999-rgb"
              target="_blank"
              rel="noopener noreferrer"
              className="telemetry-btn hoverable"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
            >
              <span>View GitHub Repositories</span>
              <span className="telemetry-arrow">↗</span>
            </a>
          </div>
        </div>

        <div className="telemetry-card telemetry-card-comms hoverable">
          <div className="telemetry-card-top">
            <span className="card-badge">PROFESSIONAL PROFILE</span>
            <span className="card-indicator">Open to Roles</span>
          </div>

          <div className="linkedin-profile-preview">
            <img src={ambikaphoto} alt="Ambika Lakshmi" className="linkedin-preview-avatar" />
            <div className="linkedin-preview-info">
              <div className="linkedin-preview-name">
                <span>Ambika Lakshmi Katta</span>
              </div>
              <div className="linkedin-preview-role text-gray">
                Cybersecurity Undergraduate • Security Analysis
              </div>
            </div>
          </div>

          <p className="telemetry-card-text text-gray" style={{ marginBottom: '1rem' }}>
            Interested in Cybersecurity Analyst, SOC, Network Security, and Cloud Security opportunities.
          </p>

          <div className="telemetry-actions-list">
            <a
              href="https://www.linkedin.com/in/ambika-lakshmi-katta-697563351/"
              target="_blank"
              rel="noopener noreferrer"
              className="telemetry-btn hoverable"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
            >
              <span>Connect on LinkedIn</span>
              <span className="telemetry-arrow">↗</span>
            </a>

            <a
              href="https://wa.me/919392510846?text=Hi%20Ambika,%20saw%20your%20portfolio%20and%20wanted%20to%20connect!"
              target="_blank"
              rel="noopener noreferrer"
              className="telemetry-btn telemetry-btn-ping hoverable"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
            >
              <span>Chat on WhatsApp</span>
              <span className="telemetry-arrow">💬</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
