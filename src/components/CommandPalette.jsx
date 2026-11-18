import { useEffect,useState } from 'react';
import { Command } from 'cmdk';
import { portfolio } from '../data/portfolio';

export default function CommandPalette({theme,setTheme}){
  const [open,setOpen]=useState(false);
  useEffect(()=>{const key=e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();setOpen(v=>!v)}};window.addEventListener('keydown',key);return()=>window.removeEventListener('keydown',key)},[]);
  const run=(action)=>{action();setOpen(false)};
  const jump=id=>run(()=>document.querySelector(`#${id}`)?.scrollIntoView({behavior:'smooth'}));
  if(!open)return null;
  return <div className="command-backdrop" onMouseDown={()=>setOpen(false)}><Command className="command-palette" onMouseDown={e=>e.stopPropagation()}><Command.Input placeholder="Jump to..."/><Command.List><Command.Empty>No commands found.</Command.Empty><Command.Group heading="Navigate">{[['home','Home'],['about','About'],['skills','Skills'],['projects','Projects'],['journey','Journey'],['console','Ask LakshAI'],['contact','Contact']].map(([id,label])=><Command.Item key={id} onSelect={()=>jump(id)}>{label}</Command.Item>)}</Command.Group><Command.Group heading="Actions"><Command.Item onSelect={()=>run(()=>navigator.clipboard?.writeText(portfolio.email))}>Copy email</Command.Item><Command.Item onSelect={()=>run(()=>window.open(portfolio.socials.linkedin,'_blank'))}>Open LinkedIn</Command.Item><Command.Item onSelect={()=>run(()=>window.open(portfolio.socials.github,'_blank'))}>Open GitHub</Command.Item><Command.Item onSelect={()=>run(()=>window.open(portfolio.resume,'_blank'))}>Download resume</Command.Item><Command.Item onSelect={()=>run(()=>setTheme(theme==='dark'?'light':'dark'))}>Toggle theme</Command.Item></Command.Group></Command.List></Command></div>;
}
