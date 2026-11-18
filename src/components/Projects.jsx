import { motion } from 'framer-motion';
import { portfolio } from '../data/portfolio';
import ProjectCard from './ProjectCard';
import SectionHeading from './SectionHeading';
import RobotImage from './RobotImage';

export default function Projects() {
  return (
    <section id="projects" className="section-shell content-section">
      <div className="projects-heading">
        <SectionHeading eyebrow="03 / Deployed Workflows" title="Selected projects, from trigger to outcome." description="Small systems that turn ideas, data and AI into useful working tools." />
        <RobotImage src={portfolio.robotImages.projects} alt="Projects assistant robot" className="projects-robot" size={190}/>
      </div>
      <motion.div
        className="project-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
      >
        {portfolio.projects.map(project => <ProjectCard project={project} key={project.id} />)}
      </motion.div>
    </section>
  );
}
