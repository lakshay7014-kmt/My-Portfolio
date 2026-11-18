import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import HeroSection from './components/HeroSection';
import ScrollPipeline from './components/ScrollPipeline';
import AgentProfile from './components/AgentProfile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatFab from './components/ChatFab';
import CommandPalette from './components/CommandPalette';
import AgentConsole from './components/AgentConsole';

export default function App() {
  const [loading, setLoading] = useState(sessionStorage.getItem('agentflow-loader') !== 'shown');
  const [theme, setTheme] = useState(() => localStorage.getItem('agentflow-theme') || 'light');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('agentflow-theme', theme);
  }, [theme]);

  useEffect(() => {
    if (!loading) return;
    const timer = setTimeout(() => {
      sessionStorage.setItem('agentflow-loader', 'shown');
      setLoading(false);
    }, 1100);
    return () => clearTimeout(timer);
  }, [loading]);

  if (loading) return <Loader />;
  return (
    <div className="app">
      <ScrollPipeline />
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <HeroSection />
        <AgentProfile />
        <Skills />
        <Projects />
        <Journey />
        <AgentConsole />
        <Contact />
      </main>
      <Footer />
      <ChatFab />
      <CommandPalette theme={theme} setTheme={setTheme} />
    </div>
  );
}
