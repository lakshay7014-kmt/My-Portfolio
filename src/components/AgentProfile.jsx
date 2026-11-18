import { motion } from 'framer-motion';
import { portfolio } from '../data/portfolio';
import RobotImage from './RobotImage';
import SectionHeading from './SectionHeading';

export default function AgentProfile() {
  return (
    <section id="about" className="section-shell content-section">
      <SectionHeading eyebrow="01 / Agent Profile" title="Configured for learning and building." description="A profile of how I work, what I know, and where I am going." />
      <div className="agent-grid">
        <motion.div className="agent-config card" initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}>
          <div className="config-row"><span>name</span><b>{portfolio.name}</b></div>
          <div className="config-row"><span>role</span><b>{portfolio.title}</b></div>
          <div className="config-row"><span>model</span><b>{portfolio.education.field} · {portfolio.education.specialization}</b></div>
          <div className="config-row"><span>memory</span><b>{portfolio.education.university} · {portfolio.education.degree}</b></div>
          <div className="config-row"><span>tools</span><div className="chip-list">{portfolio.skills.tools.map((tool)=><i key={tool}>{tool}</i>)}</div></div>
          <div className="config-row"><span>goals</span><b>Build useful AI systems and become a dependable engineer.</b></div>
          <div className="config-row status-row"><span>status</span><b><i/> Learning and building</b></div>
        </motion.div>
        <div className="profile-side">
          <div className="about-robot-frame"><RobotImage src={portfolio.robotImages.about} alt="Lakshay's agent profile assistant" size={360}/></div>
          <motion.div
            className="stat-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><strong>3+</strong><span>Projects</span></motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><strong>2</strong><span>Courses in progress</span></motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}><strong>1</strong><span>Hackathon</span></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
