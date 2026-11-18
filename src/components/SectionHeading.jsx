import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, description, id }) {
  return (
    <motion.div
      className="section-heading"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id ? `${id}-title` : undefined}>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}
