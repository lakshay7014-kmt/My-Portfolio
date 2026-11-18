import { motion } from 'framer-motion';
import { Braces, Bot, Boxes } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import RobotImage from './RobotImage';
import SectionHeading from './SectionHeading';

export default function Skills() {
  const groups = [
    { title:'Languages', icon:<Braces/>, items:portfolio.skills.languages, tone:'indigo' },
    { title:'AI & Agents', icon:<Bot/>, items:portfolio.skills.focus, tone:'emerald' },
    { title:'Platforms & Tools', icon:<Boxes/>, items:portfolio.skills.tools, tone:'amber' },
  ];
  return (
    <section id="skills" className="section-shell content-section">
      <div className="skills-title-row">
        <SectionHeading eyebrow="02 / Tools & Capabilities" title="Skills, connected to real work." description="A growing toolkit for building intelligent applications and practical agent workflows." />
        <RobotImage src={portfolio.robotImages.skills} alt="Skills assistant robot" className="skills-robot" size={210}/>
      </div>
      <div className="skills-grid">
        {groups.map((group,index)=>(
          <motion.article className="skill-card card" key={group.title} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.08}}>
            <div className={`skill-icon ${group.tone}`}>{group.icon}</div><h3>{group.title}</h3>
            <div className="skill-chips">{group.items.map(item=><button type="button" key={item} title={`Used in relevant projects: ${item}`}>{item}</button>)}</div>
          </motion.article>
        ))}
      </div>
      <div className="tool-marquee" aria-label="Tools">
        <div>{[...portfolio.skills.tools,...portfolio.skills.tools].map((tool,index)=><span key={`${tool}-${index}`}><i/> {tool}</span>)}</div>
      </div>
    </section>
  );
}
