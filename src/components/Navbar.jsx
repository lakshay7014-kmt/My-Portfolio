import { useEffect, useState } from 'react';
import { Moon, Sun, Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolio } from '../data/portfolio';

const links = [
  ['about','About'], ['skills','Skills'], ['projects','Projects'], ['journey','Journey'], ['console','Ask LakshAI'], ['contact','Contact'],
];

export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('about');
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id));
    }, { rootMargin: '-30% 0px -55%' });
    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return (
    <header className="navbar">
      <nav className="nav-inner" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Lakshay home"><span className="brand-node" />Lakshay</a>
        <div className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(([id, label]) => <a key={id} className={active === id ? 'active' : ''} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
        </div>
        <div className="nav-actions">
          <button className="icon-button" type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            {theme === 'dark' ? <Sun size={17}/> : <Moon size={17}/>}
          </button>
          <a className="primary-button nav-talk" href="#contact">Let's talk <ArrowUpRight size={15}/></a>
          <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
        </div>
      </nav>
    </header>
  );
}
