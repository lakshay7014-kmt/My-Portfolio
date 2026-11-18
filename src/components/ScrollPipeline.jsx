import { useEffect, useState } from 'react';

export default function ScrollPipeline() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive:true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return <div className="scroll-pipeline" aria-hidden="true"><span style={{ height:`${progress}%` }}/></div>;
}
