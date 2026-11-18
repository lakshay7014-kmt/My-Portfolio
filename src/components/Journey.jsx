import { motion } from 'framer-motion';
import { Check, Circle } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import SectionHeading from './SectionHeading';

export default function Journey() {
  return (
    <section id="journey" className="section-shell content-section">
      <SectionHeading eyebrow="04 / Run History" title="A timeline of learning and building." description="Recent milestones, experiments and courses in progress."/>
      <motion.div
        className="run-history"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.18 } } }}
      >
        {portfolio.timeline.map((item,index)=>(
          <motion.article
            key={item.title}
            className="run-row"
            variants={{
              hidden: { opacity: 0, y: 22, scale: 0.985 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            <div className={`run-node ${item.status}`}>
              {item.status==='completed'
                ? <Check size={16}/>
                : <span className="run-node-core"><Circle size={11}/></span>}
            </div>
            <motion.div className="run-card card" whileHover={{ x: 5 }}>
              <div className="run-card-top">
                <span className="run-id">RUN_0{index + 1}</span>
                <small>{item.year}</small>
              </div>
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
              {item.status==='progress'
                ? <span className="progress-badge"><i/> In progress</span>
                : <span className="completed-badge"><Check size={12}/> Completed</span>}
              <span className="run-scan" aria-hidden="true"/>
            </motion.div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
