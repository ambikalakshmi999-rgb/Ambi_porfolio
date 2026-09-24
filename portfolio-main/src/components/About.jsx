import ambikaPhoto from '../assets/MYphoto.jpeg';
import EngineeringTelemetry from './EngineeringTelemetry';
import Timeline from './Timeline';
import MaskedTitle from './MaskedTitle';

export default function About() {
  return (
    <div className="about-page-wrapper">
      <section id="about" className="container about-intro-section">
        <div className="about-grid">
          <div className="gsap-reveal">
            <MaskedTitle number="1." text="About Me" />
            <div className="divider" />
            <p className="text-gray about-text">
              I’m Ambika Lakshmi Katta, a B.Tech Cyber Security undergraduate with hands-on internship and lab exposure across security analysis, vulnerability assessment, network monitoring, web application security, and AWS cloud environments.
            </p>
            <div className="font-mono text-gray skill-list text-sm">
              <p>Security Analysis & Vulnerability Assessment</p>
              <p>Network Traffic Analysis & Security Monitoring</p>
              <p>Web Application Security & OWASP Top 10</p>
              <p>AWS Cloud Security & User Access Management</p>
            </div>
          </div>

          <div className="abstract-box hoverable gsap-reveal">
            <div className="about-photo-wrapper">
              <img
                src={ambikaPhoto}
                alt="Ambika Lakshmi Katta"
                className="about-photo-img"
                loading="eager"
              />
            </div>
          </div>
        </div>

        <EngineeringTelemetry />
      </section>

      <Timeline />
    </div>
  );
}
