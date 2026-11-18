import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

export default function ProjectCard({ project }) {
  const spotlight = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
  };
  return (
    <motion.article
      className="project-card card"
      onMouseMove={spotlight}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      whileHover={{ y: -7 }}
      transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="project-visual">
        <div className="project-window"><div className="window-dots"><i/><i/><i/></div><span>{project.title}</span></div>
        <div className="mini-flow" aria-label={`${project.title} workflow preview`}>
          {project.flow.map(([label,type], index)=>(
            <div className="mini-node" key={`${label}-${index}`}><i className={index===0?'':index===project.flow.length-1?'output':''}/><small>{type}</small><b>{label}</b>{index<project.flow.length-1&&<span className="mini-edge"/>}</div>
          ))}
        </div>
      </div>
      <div className="project-body">
        <div className="project-status"><span/><b>{project.status}</b></div>
        <h3>{project.title}</h3><p>{project.description}</p>
        <div className="tag-list">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noreferrer"><Github size={15}/> GitHub</a>
          <a href={project.live} target="_blank" rel="noreferrer">Live Demo <ArrowUpRight size={15}/></a>
        </div>
      </div>
    </motion.article>
  );
}
