import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Copy, Github, Linkedin, Mail, Check } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import RobotImage from './RobotImage';
import SectionHeading from './SectionHeading';

export default function Contact() {
  const [loading,setLoading]=useState(false);
  const [notice,setNotice]=useState('');
  const copyEmail=async()=>{await navigator.clipboard?.writeText(portfolio.email);setNotice('Email copied to clipboard');setTimeout(()=>setNotice(''),2200)};
  const submit=async(event)=>{
    event.preventDefault();
    const form=event.currentTarget;
    if(!form.checkValidity()){form.reportValidity();return;}
    setLoading(true);
    try{
      if(import.meta.env.VITE_EMAILJS_SERVICE_ID){
        await emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID,import.meta.env.VITE_EMAILJS_TEMPLATE_ID,form,{publicKey:import.meta.env.VITE_EMAILJS_PUBLIC_KEY});
      }
      setNotice('Webhook received ✓');
      form.reset();
    }catch{setNotice('Delivery failed. Please email lakshay7014@gmail.com.')}
    finally{setLoading(false)}
  };
  return (
    <section id="contact" className="section-shell content-section">
      <SectionHeading eyebrow="06 / Trigger a conversation" title="Let's build something useful." description="Have a project, a question or an opportunity? Send it through."/>
      <div className="contact-grid">
        <aside className="contact-panel card">
          <RobotImage src={portfolio.robotImages.contact} alt="Lakshay's contact assistant" size={280}/>
          <p>I’m always glad to meet curious people and discuss thoughtful ideas in AI, data and software.</p>
          <div className="contact-links">
            <a href={portfolio.socials.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/>LinkedIn</a>
            <a href={portfolio.socials.github} target="_blank" rel="noreferrer"><Github size={16}/>GitHub</a>
            <a href={`mailto:${portfolio.email}`}><Mail size={16}/>Email</a>
            <button type="button" onClick={copyEmail}><Copy size={16}/>Copy email</button>
          </div>
        </aside>
        <form className="contact-form card" onSubmit={submit}>
          <label>Name<input name="from_name" required placeholder="Ada Lovelace"/></label>
          <label>Email<input name="reply_to" type="email" required placeholder="ada@example.com"/></label>
          <label>Message<textarea name="message" required placeholder="Tell me about the idea..."/></label>
          <button className="primary-button" type="submit" disabled={loading}>{loading?'Routing...':'Send message'} {!loading&&<ArrowIcon/>}</button>
          {notice&&<div className="webhook-toast" role="status"><Check size={16}/>{notice}</div>}
        </form>
      </div>
    </section>
  );
}
function ArrowIcon(){return <span aria-hidden="true">↗</span>}
