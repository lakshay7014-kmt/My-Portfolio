import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { portfolio } from '../data/portfolio';
import RobotImage from './RobotImage';
import WorkflowGraph from './WorkflowGraph';
import MobileFlow from './MobileFlow';

export default function HeroSection() {
  const primaryRef = useRef(null);
  const magneticMove = (event) => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    event.currentTarget.style.transform = `translate(${x * 0.10}px, ${y * 0.10}px)`;
  };
  const magneticLeave = (event) => {
    event.currentTarget.style.transform = '';
  };
  return (
    <section id="home" className="hero-section section-shell">
      <div className="hero-grid">
        <motion.div className="hero-copy" initial={{ opacity:0,y:18 }} animate={{ opacity:1,y:0 }}>
          <div className="status-pill"><span/> Open to internships</div>
          <h1>Hi, I'm <span>Lakshay Kumawat</span></h1>
          <div className="typing"><TypeAnimation sequence={['AI Engineer in the making',1600,'Python Developer',1600,'Agentic AI Builder',1600,'Data Science Learner',1600]} repeat={Infinity}/></div>
          <p className="hero-tagline">{portfolio.tagline}</p>
          <div className="hero-actions">
            <a
              ref={primaryRef}
              className="primary-button magnetic-button"
              href="#projects"
              onMouseMove={magneticMove}
              onMouseLeave={magneticLeave}
            >
              View Projects <ArrowDown size={16}/>
            </a>
            <a className="secondary-button" href={portfolio.resume}><Download size={16}/> Download Resume</a>
          </div>
          <div className="social-row">
            <a href={portfolio.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a>
            <a href={portfolio.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a>
          </div>
        </motion.div>
        <motion.div className="hero-visual" initial={{ opacity:0,x:18 }} animate={{ opacity:1,x:0 }}>
          <div className="hero-robot-panel">
            <RobotImage src={portfolio.robotImages.hero} alt="Lakshay's friendly AI assistant" className="hero-robot" eager size={460}/>
            <div className="floating-chip chip-one"><span/><b>Building AI agents</b></div>
            <div className="floating-chip chip-two"><b>NASA</b><small>Space Apps 2026</small></div>
          </div>
        </motion.div>
      </div>
      <div className="desktop-flow"><WorkflowGraph /></div>
      <MobileFlow />
    </section>
  );
}
