import useTextScramble from '../hooks/useTextScramble';

function ScrambleLink({ href, children, className, ...props }) {
  const { displayText, onMouseEnter, onMouseLeave } = useTextScramble(children);
  return (
    <a 
      href={href} 
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      {displayText}
    </a>
  );
}

export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner font-mono text-gray">
        <p>© 2026 BUILT & DEVELEOPED BY AMBIKA LAKSHMI KATTA & THE ONE.</p>
        <div className="social-links uppercase">
          <ScrambleLink href="https://github.com/ambikalakshmi999-rgb" className="hoverable" target="_blank" rel="noopener noreferrer">Github</ScrambleLink>
          <ScrambleLink href="https://www.linkedin.com/in/ambika-lakshmi-katta-697563351" className="hoverable" target="_blank" rel="noopener noreferrer">LinkedIn</ScrambleLink>
          <ScrambleLink href="https://wa.me/919392510846" className="hoverable" target="_blank" rel="noopener noreferrer">WhatsApp</ScrambleLink>
        </div>
      </div>
    </footer>
  );
}
