import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { AnimatePresence,motion } from 'framer-motion';
import AgentConsole from './AgentConsole';

export default function ChatFab(){
  const [open,setOpen]=useState(false);
  return (
    <>
      <AnimatePresence>{open&&<motion.aside className="chat-panel" role="dialog" aria-label="LakshAI chat" initial={{x:'100%',opacity:0}} animate={{x:0,opacity:1}} exit={{x:'100%',opacity:0}}><button className="chat-close" type="button" onClick={()=>setOpen(false)} aria-label="Close chat"><X size={18}/></button><AgentConsole panel/></motion.aside>}</AnimatePresence>
      <button className="chat-fab" type="button" onClick={()=>setOpen(!open)} aria-label="Open LakshAI chat"><MessageCircle size={20}/><span>Ask LakshAI</span></button>
    </>
  );
}
