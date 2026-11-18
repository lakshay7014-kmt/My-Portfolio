import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export default function Footer(){
  return (
    <footer className="footer">
      <div className="footer-inner"><a className="brand" href="#home"><span className="brand-node"/>Lakshay</a><p>Built with React & AI-assisted tools</p><div className="footer-socials"><a href={portfolio.socials.github} aria-label="GitHub"><Github size={17}/></a><a href={portfolio.socials.linkedin} aria-label="LinkedIn"><Linkedin size={17}/></a></div><button type="button" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} aria-label="Back to top"><ArrowUp size={17}/></button></div>
    </footer>
  );
}
