import { useState } from 'react';
import { Send } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import { askLakshAI } from '../services/ai';
import RobotImage from './RobotImage';
import SectionHeading from './SectionHeading';

const suggestions=['What are your skills?','Tell me about LunarSight','How can I contact you?','Are you open to internships?'];

export default function AgentConsole({ panel=false }) {
  const [messages,setMessages]=useState([{role:'bot',text:'Hello. I’m LakshAI, Lakshay’s local portfolio agent.'}]);
  const [text,setText]=useState('');
  const [typing,setTyping]=useState(false);
  const answer=async(question)=>{
    setMessages(items=>[...items,{role:'user',text:question}]);setTyping(true);setText('');
    let reply='I can answer questions about Lakshay’s skills, projects, journey and contact details.';
    const lower=question.toLowerCase();
    const local=portfolio.chatbot.find(item=>item.keys.some(key=>lower.includes(key)));
    if(local) reply=local.answer;
    try{const remote=await askLakshAI(question);if(remote)reply=remote}catch{}
    setTimeout(()=>{setMessages(items=>[...items,{role:'bot',text:reply}]);setTyping(false)},500);
  };
  return (
    <section id={panel?undefined:'console'} className={panel?'console-panel panel-mode':'console-section section-shell content-section'}>
      {!panel&&<SectionHeading eyebrow="05 / Agent Console" title="Ask LakshAI." description="A small portfolio agent, connected to everything in this site."/>}
      <div className="console-card card">
        <div className="console-header"><RobotImage src={portfolio.robotImages.sleepy} alt="LakshAI assistant" size={54}/><div><b>LakshAI</b><span><i/> Local agent · ready</span></div></div>
        <div className="chat-log" aria-live="polite">
          {messages.map((message,index)=><div className={`chat-message ${message.role}`} key={index}>{message.text}</div>)}
          {typing&&<div className="typing-indicator"><i/><i/><i/></div>}
        </div>
        <div className="suggestion-row">{suggestions.map(chip=><button type="button" key={chip} onClick={()=>answer(chip)}>{chip}</button>)}</div>
        <form className="chat-form" onSubmit={event=>{event.preventDefault();if(text.trim())answer(text.trim())}}>
          <input value={text} onChange={event=>setText(event.target.value)} placeholder="Ask about Lakshay..." aria-label="Chat message"/>
          <button type="submit" aria-label="Send message"><Send size={16}/></button>
        </form>
      </div>
    </section>
  );
}
