import { useState } from 'react';
import BootSequence from './components/BootSequence';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function App() {
  const [booted, setBooted] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground font-mono relative overflow-x-hidden p-6 md:p-12">
      <div className="scanline"></div>

      {!booted ? (
        <BootSequence onComplete={() => setBooted(true)} />
      ) : (
        <div className="max-w-4xl mx-auto w-full animate-fade-in relative z-10">
          <Header />
          <About />
          <Projects />

          <footer className="mt-20 pt-4 border-t border-dashed border-[#555] text-sm text-[#888] pb-12">
            <p>End of file. SYSTEM HALTED.</p>
            <div className="mt-2 flex">
              <span>C:\&gt; _</span>
              <span className="blinking-cursor">█</span>
            </div>
          </footer>
        </div>
      )}
    </main>
  );
}
