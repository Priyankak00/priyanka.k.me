/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  BrainCircuit, 
  Terminal, 
  ChevronRight, 
  Download, 
  Award, 
  GraduationCap, 
  Briefcase, 
  FileText,
  FileSpreadsheet,
  Smartphone,
  Server,
  Activity,
  BarChart3,
  Sun,
  Moon,
  Cpu,
  Layers,
  LineChart,
  Search,
  Cloud,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  Headphones,
  Star,
  Coffee,
  Heart,
  Music,
  Sparkles,
  Ghost
} from 'lucide-react';
import { 
  SiPython, 
  SiPostgresql, 
  SiPandas, 
  SiScikitlearn, 
  SiNumpy, 
  SiDjango, 
  SiOpenjdk, 
  SiCplusplus, 
  SiC, 
  SiMysql, 
  SiGooglecloud,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiGithub,
  SiApachemaven,
  SiLinux,
  SiJupyter,
  SiMongodb,
  SiRedis,
  SiPostman,
  SiExpress,
  SiSocketdotio,
  SiSpringboot,
  SiLeetcode
} from 'react-icons/si';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Lenis from '@studio-freight/lenis';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Theme Context ---
const ThemeContext = createContext<{ theme: 'dark' | 'light'; toggleTheme: () => void }>({
  theme: 'dark',
  toggleTheme: () => {},
});

// --- Components ---

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyber-blue pointer-events-none z-[10000] hidden md:block"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isHovering ? 2.5 : isClicking ? 0.8 : 1,
          backgroundColor: isHovering ? "rgba(0, 243, 255, 0.1)" : "rgba(0, 243, 255, 0)",
          borderWidth: isHovering ? 1 : 2,
          mixBlendMode: isHovering ? "normal" : "difference"
        }}
        style={{ mixBlendMode: isHovering ? "normal" : "difference" } as any}
        transition={{ type: "spring", damping: 25, stiffness: 250, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-cyber-blue rounded-full pointer-events-none z-[10001] hidden md:block"
        animate={{
          x: position.x - 3,
          y: position.y - 3,
        }}
        transition={{ type: "spring", damping: 35, stiffness: 450, mass: 0.2 }}
      />
    </>
  );
};

const Magnetic = ({ children, strength = 0.5 }: { children: React.ReactNode; strength?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * strength;
    const y = (clientY - (top + height / 2)) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", damping: 15, stiffness: 150, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <footer className={cn(
      "py-12 px-6 border-t transition-colors",
      theme === 'dark' ? "border-white/10 bg-obsidian" : "border-black/10 bg-white"
    )}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-display uppercase tracking-tight">Priyanka Kumari</span>
          <span className="text-xs font-mono text-white/40">© 2024 All Rights Reserved</span>
        </div>
        
        <div className="flex gap-8">
          {[
            { name: 'LinkedIn', url: 'https://linkedin.com/in/priyanka-kumari-01' },
            { name: 'GitHub', url: 'https://github.com/priyanka01-kri' },
            { name: 'Twitter', url: '#' }
          ].map((link) => (
            <Magnetic key={link.name}>
              <a 
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:text-cyber-blue transition-colors"
              >
                {link.name}
              </a>
            </Magnetic>
          ))}
        </div>
        
        <div className="text-xs font-mono text-white/20">
          Engineered with Precision
        </div>
      </div>
    </footer>
  );
};

const Background = () => {
  const { theme } = useContext(ThemeContext);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const codeSnippets = [
    "const data = await fetch('/api/v1/insights');",
    "model.predict(input_tensor);",
    "SELECT * FROM users WHERE status = 'active';",
    "git commit -m 'feat: neural architecture';",
    "docker-compose up -d --build",
    "export default function NeuralNet() {",
    "while(true) { innovate(); }",
    "01010110 01001001 01010011 01001001 01001111 01001110",
  ];

  return (
    <div className={cn(
      "fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none transition-colors duration-500",
      theme === 'dark' ? "bg-obsidian" : "bg-light-bg"
    )}>
      <div className="noise" />
      {/* Dynamic Spotlight */}
      <motion.div 
        className={cn(
          "absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-30 transition-colors duration-500",
          theme === 'dark' ? "bg-cyber-blue/20" : "bg-cyber-blue/25"
        )}
        animate={{
          x: mousePos.x - 300,
          y: mousePos.y - 300,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      />

      {/* Radial Mask for Content Clarity */}
      <div className={cn(
        "absolute inset-0 z-10",
        theme === 'dark' 
          ? "bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.8)_100%)]" 
          : "bg-[radial-gradient(circle_at_center,transparent_0%,rgba(248,250,252,0.8)_100%)]"
      )} />

      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Floating Code Snippets with Layering */}
      {codeSnippets.map((code, i) => (
        <motion.div
          key={`code-${i}`}
          className={cn(
            "absolute font-mono text-[12px] whitespace-nowrap transition-colors",
            theme === 'dark' ? "text-cyber-blue/40" : "text-cyber-blue/60"
          )}
          initial={{ 
            x: Math.random() * 100 + '%', 
            y: Math.random() * 100 + '%',
            opacity: 0
          }}
          animate={{ 
            x: [null, `${Math.random() * 100}%`],
            y: [null, `${Math.random() * 100}%`],
            opacity: [0, 0.4, 0],
            translateX: (mousePos.x - window.innerWidth / 2) * (0.02 + i * 0.01),
            translateY: (mousePos.y - window.innerHeight / 2) * (0.02 + i * 0.01),
          }}
          transition={{ 
            duration: Math.random() * 30 + 30, 
            repeat: Infinity, 
            ease: "linear",
            translateX: { type: "spring", damping: 50 },
            translateY: { type: "spring", damping: 50 }
          }}
          style={{
            filter: `blur(${Math.abs(i - 4) * 0.5}px)`,
            scale: 0.8 + Math.random() * 0.4
          }}
        >
          {code}
        </motion.div>
      ))}

      {/* Moving Data Graphs */}
      {[...Array(4)].map((_, i) => (
        <svg 
          key={`graph-${i}`}
          className={cn(
            "absolute w-full h-64 transition-opacity",
            theme === 'dark' ? "opacity-[0.2]" : "opacity-[0.4]"
          )}
          style={{ top: `${15 + i * 20}%`, left: 0 }}
        >
          <motion.path
            d={`M 0 ${50 + Math.random() * 50} Q ${200 + Math.random() * 200} ${Math.random() * 100} ${400 + Math.random() * 200} ${50 + Math.random() * 50} T 1000 ${50 + Math.random() * 50} T 2000 ${50 + Math.random() * 50}`}
            fill="none"
            stroke={theme === 'dark' ? "#00f3ff" : "#00f3ff"}
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.8, 0],
              x: [0, -150]
            }}
            transition={{ 
              duration: 12 + i * 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </svg>
      ))}

      {/* Binary Stream Columns */}
      {[...Array(12)].map((_, i) => (
        <div 
          key={`binary-${i}`}
          className="absolute top-0 bottom-0 w-px bg-white/[0.03] overflow-hidden"
          style={{ left: `${8 + i * 8}%` }}
        >
          <motion.div
            className={cn(
              "flex flex-col gap-4 font-mono text-[10px]",
              theme === 'dark' ? "text-cyber-blue/20" : "text-cyber-blue/30"
            )}
            animate={{ y: ['-100%', '100%'] }}
            transition={{ 
              duration: Math.random() * 15 + 15, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 10
            }}
          >
            {[...Array(40)].map((_, j) => (
              <span key={j}>{Math.round(Math.random())}</span>
            ))}
          </motion.div>
        </div>
      ))}

      {/* Floating Data Points (Constellation Effect) */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={`point-${i}`}
          className={cn(
            "absolute w-1.5 h-1.5 rounded-full z-20",
            theme === 'dark' ? "bg-cyber-blue/40 shadow-[0_0_8px_rgba(0,240,255,0.3)]" : "bg-cyber-blue/30"
          )}
          initial={{ 
            x: Math.random() * 100 + '%', 
            y: Math.random() * 100 + '%',
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{ 
            y: [null, '-30%', '30%', null],
            opacity: [0.1, 0.5, 0.1],
            scale: [1, 1.2, 1],
            translateX: (mousePos.x - window.innerWidth / 2) * 0.05,
            translateY: (mousePos.y - window.innerHeight / 2) * 0.05,
          }}
          transition={{ 
            duration: Math.random() * 12 + 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            translateX: { type: "spring", damping: 40 },
            translateY: { type: "spring", damping: 40 }
          }}
        />
      ))}

      {/* Neural Network Connections (Subtle SVG Lines) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.15] z-0">
        {[...Array(10)].map((_, i) => (
          <motion.line
            key={`line-${i}`}
            x1={`${10 + Math.random() * 80}%`}
            y1={`${10 + Math.random() * 80}%`}
            x2={`${10 + Math.random() * 80}%`}
            y2={`${10 + Math.random() * 80}%`}
            stroke={theme === 'dark' ? "#00f3ff" : "#00f3ff"}
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.5, 0],
              translateX: (mousePos.x - window.innerWidth / 2) * 0.03,
              translateY: (mousePos.y - window.innerHeight / 2) * 0.03,
            }}
            transition={{ 
              duration: 10 + Math.random() * 10, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </svg>
    </div>
  );
};

const Sticker = ({ icon: Icon, color, initialPos, interaction }: { icon: any, color: string, initialPos: { x: string, y: string }, interaction: () => void }) => {
  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.1}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9, rotate: -5 }}
      onClick={interaction}
      style={{ left: initialPos.x, top: initialPos.y }}
      className={cn(
        "fixed z-[60] cursor-grab active:cursor-grabbing p-4 rounded-2xl glass border-2 shadow-2xl",
        "flex items-center justify-center transition-colors duration-300",
        color
      )}
    >
      <Icon size={24} />
    </motion.div>
  );
};

const StickerSystem = () => {
  const [isLofiPlaying, setIsLofiPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [starRotation, setStarRotation] = useState(0);
  const [isSteaming, setIsSteaming] = useState(false);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'); // Placeholder lofi-ish track
    audioRef.current.loop = true;
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const toggleLofi = () => {
    if (isLofiPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play().catch(e => console.log("Audio play blocked", e));
    }
    setIsLofiPlaying(!isLofiPlaying);
  };

  const spinStar = () => setStarRotation(prev => prev + 360);
  const toggleSteam = () => {
    setIsSteaming(true);
    setTimeout(() => setIsSteaming(false), 2000);
  };
  const triggerFlash = () => {
    setFlash(true);
    setTimeout(() => setFlash(false), 150);
  };

  return (
    <>
      <AnimatePresence>
        {flash && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-[100] pointer-events-none"
          />
        )}
      </AnimatePresence>

      <Sticker 
        icon={isLofiPlaying ? Music : Headphones} 
        color={isLofiPlaying ? "bg-accent-primary/20 border-accent-primary text-accent-primary" : "border-white/10 text-white/40"}
        initialPos={{ x: '5%', y: '15%' }}
        interaction={toggleLofi}
      />

      <motion.div animate={{ rotate: starRotation }} transition={{ type: "spring", stiffness: 100 }}>
        <Sticker 
          icon={Star} 
          color="border-yellow-400/20 text-yellow-400"
          initialPos={{ x: '85%', y: '10%' }}
          interaction={spinStar}
        />
      </motion.div>

      <div className="relative">
        <AnimatePresence>
          {isSteaming && (
            <motion.div 
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: [0, 1, 0], y: -50 }}
              className="fixed z-[61] text-white/20 pointer-events-none"
              style={{ left: '12%', top: '75%' }}
            >
              <Cloud size={20} />
            </motion.div>
          )}
        </AnimatePresence>
        <Sticker 
          icon={Coffee} 
          color="border-orange-400/20 text-orange-400"
          initialPos={{ x: '10%', y: '80%' }}
          interaction={toggleSteam}
        />
      </div>

      <Sticker 
        icon={Zap} 
        color="border-cyan-400/20 text-cyan-400"
        initialPos={{ x: '90%', y: '70%' }}
        interaction={triggerFlash}
      />

      <Sticker 
        icon={Heart} 
        color="border-pink-400/20 text-pink-400"
        initialPos={{ x: '80%', y: '40%' }}
        interaction={() => {}} // Just draggable for now
      />

      {isLofiPlaying && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 glass px-6 py-3 rounded-full flex items-center gap-4 border border-accent-primary/30"
        >
          <div className="flex gap-1">
            {[1, 2, 3, 4].map(i => (
              <motion.div
                key={i}
                animate={{ height: [8, 20, 8] }}
                transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                className="w-1 bg-accent-primary rounded-full"
              />
            ))}
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-accent-primary">Lofi Mode Active</span>
        </motion.div>
      )}
    </>
  );
};

const FloatingShape = () => {
  const { theme } = useContext(ThemeContext);
  const { scrollYProgress } = useScroll();
  const scrollY1 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const scrollRotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scrollScale1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1]);
  
  const scrollY2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const scrollRotate2 = useTransform(scrollYProgress, [0, 1], [0, -360]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        style={{
          y: scrollY1,
          rotate: scrollRotate1,
          scale: scrollScale1,
        }}
        className="absolute top-1/4 -right-20"
      >
        <motion.div
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={cn(
            "w-96 h-96 blur-3xl border transition-colors rounded-full",
            theme === 'dark' 
              ? "bg-accent-primary/10 border-accent-primary/20" 
              : "bg-accent-primary/20 border-accent-primary/30"
          )}
        />
      </motion.div>
      
      <motion.div
        style={{
          y: scrollY2,
          rotate: scrollRotate2,
        }}
        className="absolute bottom-1/4 -left-20"
      >
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={cn(
            "w-80 h-80 blur-3xl border transition-colors rounded-full",
            theme === 'dark' 
              ? "bg-accent-primary/10 border-accent-primary/20" 
              : "bg-accent-primary/20 border-accent-primary/30"
          )}
        />
      </motion.div>
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-8",
      scrolled ? "py-4 glass" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display uppercase tracking-tight flex items-center gap-3"
        >
          <div className="w-10 h-10 bg-accent-primary flex items-center justify-center rounded-lg">
            <Terminal size={20} className="text-obsidian" />
          </div>
          <span className={cn(
            "transition-colors",
            theme === 'dark' ? "text-white" : "text-ink"
          )}>PRIYANKA.K</span>
        </motion.div>
        
        <div className="flex items-center gap-12">
          <div className="hidden md:flex gap-12 text-[10px] font-mono uppercase tracking-[0.3em] font-bold">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact', 'Resume'].map((item) => (
              <a 
                key={item} 
                href={item === 'Resume' ? "https://drive.google.com/file/d/1gnb5f6TlAX9X1PM3i5DqQ4u52HnDv0Go/view?usp=sharing" : `#${item.toLowerCase()}`}
                target={item === 'Resume' ? "_blank" : undefined}
                rel={item === 'Resume' ? "noopener noreferrer" : undefined}
                className={cn(
                  "transition-all relative group",
                  theme === 'dark' ? "text-white/40 hover:text-accent-primary" : "text-ink/40 hover:text-accent-primary"
                )}
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-accent-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <button 
            onClick={toggleTheme}
            className={cn(
              "p-3 glass transition-all hover:scale-110 active:scale-90",
              theme === 'dark' ? "text-white" : "text-ink"
            )}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  
  const { scrollYProgress: heroScroll } = useScroll();
  const xBg = useTransform(heroScroll, [0, 1], ['0%', '-50%']);
  
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full pt-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-6">
            <div className="h-px w-20 bg-accent-primary" />
            <span className="text-accent-primary font-mono tracking-[0.4em] text-lg md:text-xl uppercase font-bold">
              Hii, I'm
            </span>
          </div>
        </motion.div>

        <div className="relative mb-20">
          <motion.h1 
            className="text-[18vw] md:text-[14vw] font-display leading-[0.9] tracking-tighter uppercase"
            initial={{ opacity: 0, y: 100, skewY: 10 }}
            animate={{ opacity: 1, y: 0, skewY: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          >
            Priyanka<br />
            <span className="text-accent-primary italic">Kumari</span>
          </motion.h1>
          
          <motion.div 
            className="absolute -right-4 top-0 md:top-1/4 w-32 md:w-48 h-32 md:h-48 rounded-full border border-accent-primary/30 flex items-center justify-center animate-spin-slow"
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.5, type: "spring" }}
          >
            <div className="text-[8px] md:text-[10px] font-mono uppercase tracking-[0.2em] text-accent-primary/60 p-4 text-center">
              DATA SCIENTIST • ML ENGINEER • DATA ARCHITECT • ANALYST • 
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7">
            <motion.p 
              className={cn(
                "text-2xl md:text-4xl font-light leading-[1.1] tracking-tight",
                theme === 'dark' ? "text-white" : "text-ink"
              )}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I architect <span className="italic font-serif text-accent-primary">intelligent systems</span> and craft data-driven solutions that live at the intersection of <span className="font-bold">data science</span> and <span className="font-bold">machine learning</span>.
            </motion.p>
          </div>

          <div className="md:col-span-5 flex flex-col gap-8">
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Magnetic>
                <a 
                  href="#projects"
                  className={cn(
                    "group relative px-10 py-5 border-2 font-black uppercase tracking-widest rounded-none overflow-hidden transition-all hover:-translate-y-1 active:translate-y-0",
                    theme === 'dark' 
                      ? "border-emerald-green text-emerald-green bg-transparent" 
                      : "border-emerald-green/80 text-emerald-green/90 bg-transparent"
                  )}
                >
                  <span className="relative z-10 flex items-center gap-2 group-hover:text-obsidian transition-colors duration-300">
                    Explore Work <ChevronRight size={18} />
                  </span>
                  <div className="absolute inset-0 bg-emerald-green translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)]">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:4px_4px]" />
                  </div>
                </a>
              </Magnetic>
              
              <Magnetic>
                <a 
                  href="#contact"
                  className={cn(
                    "group relative px-10 py-5 border-2 font-black uppercase tracking-widest rounded-none overflow-hidden transition-all hover:-translate-y-1 active:translate-y-0",
                    theme === 'dark'
                      ? "border-cyber-blue text-cyber-blue bg-transparent"
                      : "border-cyber-blue/80 text-cyber-blue/90 bg-transparent"
                  )}
                >
                  <span className="relative z-10 flex items-center gap-2 group-hover:text-obsidian transition-colors duration-300">
                    Let's Connect <Mail size={18} />
                  </span>
                  <div className="absolute inset-0 bg-cyber-blue -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)]">
                    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(transparent_2px,#000_2px)] [background-size:100%_4px]" />
                  </div>
                </a>
              </Magnetic>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Background Large Text - Horizontal Parallax */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 pointer-events-none overflow-hidden opacity-[0.02] select-none">
        <motion.div 
          style={{ x: xBg }}
          className="text-[40vw] font-display leading-none whitespace-nowrap"
        >
          Innovation • Data • Code • Innovation • Data • Code • 
        </motion.div>
      </div>
    </section>
  );
};

const MarqueeSection = () => {
  const skills = ["Machine Learning", "Backend Architecture", "Data Science", "Neural Networks", "Deep Learning", "System Design", "Cloud Computing"];
  
  return (
    <div className="py-12 bg-accent-primary overflow-hidden skew-up">
      <div className="unskew flex">
        <div className="marquee">
          <div className="marquee-content">
            {skills.concat(skills).map((skill, i) => (
              <div key={i} className="text-obsidian text-4xl md:text-6xl font-display flex items-center gap-8">
                <span>{skill}</span>
                <span className="w-3 h-3 bg-obsidian rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const { theme } = useContext(ThemeContext);
  const [isActive, setIsActive] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const [stats, setStats] = useState<{ leetcode: number | null, github: number | null }>({ 
    leetcode: null, 
    github: null 
  });
  const [isFetching, setIsFetching] = useState(false);

  const fetchStats = async () => {
    if (isFetching) return;
    setIsFetching(true);
    
    fetch('/api/stats/github/Priyankak00')
      .then(res => res.json())
      .then(data => {
        if (data && typeof data.public_repos === 'number') {
          setStats(prev => ({ ...prev, github: data.public_repos }));
        }
      })
      .catch(err => console.error(err));

    fetch('/api/stats/leetcode/pRiZDSA')
      .then(res => res.json())
      .then(data => {
        if (data && typeof data.totalSolved === 'number') {
          setStats(prev => ({ ...prev, leetcode: data.totalSolved }));
        }
      })
      .catch(err => console.error(err));

    setIsFetching(false);
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <section id="about" ref={targetRef} className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="md:col-span-5 relative"
        >
          <div className="aspect-[3/4] overflow-hidden relative z-10 group bg-charcoal">
            <img 
              src="https://lh3.googleusercontent.com/d/1oR7mJTeNUSGWWGBKLAksLlbkO4HOZCpo" 
              alt="Priyanka Kumari" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://picsum.photos/seed/tech-portrait/800/800";
              }}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border-[20px] border-accent-primary/20 pointer-events-none" />
          </div>
          
          {/* Floating Label */}
          <motion.div 
            className="absolute -bottom-10 -right-10 bg-accent-primary p-8 hidden lg:block"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="text-obsidian font-display text-4xl uppercase leading-none">
              Priyanka<br />Kumari
            </span>
          </motion.div>
        </motion.div>

        <div className="md:col-span-7 space-y-12">
          <motion.div
            onViewportEnter={() => setIsActive(true)}
            className="space-y-4"
          >
            <div className="flex justify-between items-end">
              <span className="text-accent-primary font-mono text-sm uppercase tracking-widest">Introduction</span>
              <button 
                onClick={() => fetchStats()}
                disabled={isFetching}
                className="text-[10px] font-mono uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity flex items-center gap-2"
              >
                <Zap size={10} className={cn(isFetching && "animate-pulse")} />
                {isFetching ? "Updating..." : "Refresh Stats"}
              </button>
            </div>
            <div className={cn("reveal-text", isActive && "active")}>
              <h2 className="text-6xl md:text-8xl font-display tracking-tight leading-none">
                <span>The Vision</span>
              </h2>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={cn(
              "space-y-8 text-xl md:text-2xl leading-tight font-light",
              theme === 'dark' ? "text-white/80" : "text-ink/80"
            )}
          >
            <p className="indent-20">
              I am <span className="font-bold text-accent-primary uppercase">Priyanka Kumari</span>, a technical architect focused on the seamless integration of high-performance backend systems and data-driven intelligence.
            </p>
            <p>
              Currently engineering at <span className="underline decoration-accent-primary underline-offset-8">Lovely Professional University</span>, I build architectures that don't just process data—they understand it. My work is a constant pursuit of technical elegance and operational scalability.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-accent-primary/20 pt-12 gap-8">
            <div>
              <span className="block text-xs font-mono uppercase opacity-40 mb-2">Current CGPA</span>
              <span className="text-4xl font-display text-accent-primary">7.7 CGPA</span>
            </div>
            
            <a 
              href="https://leetcode.com/u/pRiZDSA/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block"
            >
              <span className="flex items-center gap-2 text-xs font-mono uppercase opacity-40 mb-2 group-hover:text-accent-primary transition-colors">
                <SiLeetcode size={14} /> LeetCode Solved
              </span>
              <span className="text-4xl font-display text-accent-primary group-hover:scale-110 transition-transform inline-block origin-left">
                {stats.leetcode !== null ? stats.leetcode : (
                  <span className="animate-pulse opacity-50">...</span>
                )}
              </span>
            </a>

            <a 
              href="https://github.com/Priyankak00?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block"
            >
              <span className="flex items-center gap-2 text-xs font-mono uppercase opacity-40 mb-2 group-hover:text-accent-primary transition-colors">
                <SiGithub size={14} /> GitHub Repos
              </span>
              <span className="text-4xl font-display text-accent-primary group-hover:scale-110 transition-transform inline-block origin-left">
                {stats.github !== null ? stats.github : (
                  <span className="animate-pulse opacity-50">...</span>
                )}
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Mixed Scroll Text Layers */}
      <div className="absolute top-1/4 left-0 w-full pointer-events-none opacity-[0.03] select-none z-0">
        <motion.div style={{ x: x1 }} className="text-[20vw] font-display whitespace-nowrap leading-none">
          DATA ARCHITECT • ML ENGINEER • DATA ARCHITECT • ML ENGINEER
        </motion.div>
      </div>
      <div className="absolute bottom-1/4 left-0 w-full pointer-events-none opacity-[0.03] select-none z-0">
        <motion.div style={{ x: x2 }} className="text-[20vw] font-display whitespace-nowrap leading-none">
          PROBLEM SOLVER • INNOVATOR • PROBLEM SOLVER • INNOVATOR
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  const [isActive, setIsActive] = useState(false);

  const categories = [
    {
      title: "Data Intelligence",
      icon: <BrainCircuit className="text-accent-secondary" />,
      skills: ["Machine Learning", "Deep Learning", "Data Visualization", "Statistical Analysis", "Python", "SQL", "Pandas", "Scikit-learn", "Numpy", "Jupyter", "Excel", "Power BI", "Hadoop"],
      direction: -50
    },
    {
      title: "Core Architecture",
      icon: <Server className="text-accent-primary" />,
      skills: ["Server Architecture", "API Design", "Django", "Java", "C++", "C", "MySQL", "NoSQL", "AWS", "GCP", "DSA", "Linux", "Git", "GitHub", "Docker", "Maven"],
      direction: 50
    }
  ];

  const getSkillIcon = (skill: string) => {
    const iconSize = 24;
    switch (skill.toLowerCase()) {
      case 'python': return <SiPython size={iconSize} />;
      case 'sql': return <SiPostgresql size={iconSize} />;
      case 'pandas': return <SiPandas size={iconSize} />;
      case 'scikit-learn': return <SiScikitlearn size={iconSize} />;
      case 'numpy': return <SiNumpy size={iconSize} />;
      case 'jupyter': return <SiJupyter size={iconSize} />;
      case 'excel': return <FileSpreadsheet size={iconSize} />;
      case 'power bi': return <BarChart3 size={iconSize} />;
      case 'hadoop': return <Database size={iconSize} />;
      case 'django': return <SiDjango size={iconSize} />;
      case 'java': return <SiOpenjdk size={iconSize} />;
      case 'c++': return <SiCplusplus size={iconSize} />;
      case 'c': return <SiC size={iconSize} />;
      case 'mysql': return <SiMysql size={iconSize} />;
      case 'aws': return <Cloud size={iconSize} />;
      case 'gcp': return <SiGooglecloud size={iconSize} />;
      case 'linux': return <SiLinux size={iconSize} />;
      case 'git': return <SiGit size={iconSize} />;
      case 'github': return <SiGithub size={iconSize} />;
      case 'docker': return <SiDocker size={iconSize} />;
      case 'maven': return <SiApachemaven size={iconSize} />;
      case 'machine learning': return <BrainCircuit size={iconSize} />;
      case 'deep learning': return <Cpu size={iconSize} />;
      case 'data visualization': return <LineChart size={iconSize} />;
      case 'statistical analysis': return <Activity size={iconSize} />;
      case 'server architecture': return <Server size={iconSize} />;
      case 'api design': return <Zap size={iconSize} />;
      case 'nosql': return <Database size={iconSize} />;
      case 'dsa': return <Code2 size={iconSize} />;
      default: return null;
    }
  };

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          onViewportEnter={() => setIsActive(true)}
          className="mb-32 text-center"
        >
          <span className="text-accent-primary font-mono text-sm uppercase tracking-widest">Expertise</span>
          <div className={cn("reveal-text", isActive && "active")}>
            <h2 className="text-7xl md:text-9xl font-display tracking-tight leading-none">
              <span>Technical Arsenal</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-accent-primary/20 border border-accent-primary/20 overflow-hidden">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, x: cat.direction }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className={cn(
                "p-12 md:p-20 transition-colors",
                theme === 'dark' ? "bg-obsidian hover:bg-charcoal" : "bg-paper hover:bg-white"
              )}
            >
              <div className="flex items-center gap-6 mb-12">
                <div className="p-4 bg-accent-primary/10 text-accent-primary">
                  {cat.icon}
                </div>
                <h3 className="text-4xl font-display">{cat.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {cat.skills.map((skill) => (
                  <div 
                    key={skill} 
                    className="flex items-center gap-3 group cursor-default"
                  >
                    <div className="text-accent-primary opacity-40 group-hover:opacity-100 transition-opacity">
                      {getSkillIcon(skill) || <div className="w-1.5 h-1.5 bg-accent-primary group-hover:scale-150 transition-transform" />}
                    </div>
                    <span className="text-sm font-mono uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const [isActive, setIsActive] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-300vw"]);

  const projects = [
    {
      id: "01",
      title: "SkillLink",
      subtitle: "Freelance Ecosystem",
      description: "A real-time marketplace connecting expertise with demand. Engineered with high-concurrency socket architectures and robust data persistence.",
      tech: ["Python", "Django", "Django Channels"],
      link: "https://github.com/Priyankak00/SkillLink",
      image: "https://lh3.googleusercontent.com/d/1HXtP3LBWIu69AeDC49_ytPrzbop5tewu"
    },
    {
      id: "02",
      title: "Accident Predictor",
      subtitle: "Predictive Analytics",
      description: "Leveraging machine learning to decode traffic risk patterns. A deep dive into statistical modeling and high-risk variable analysis.",
      tech: ["Python", "Scikit-learn", "Pandas", "ML"],
      link: "https://github.com/Priyankak00/Traffic-safety-predictor",
      demo: "https://traffic-safety-predictor-ckwyn5jccvs2zkz7yuzsgn.streamlit.app/",
      image: "https://lh3.googleusercontent.com/d/1619Eb7fVSHgzm3v4EDlYoC6kkeZ7Etx7"
    },
    {
      id: "03",
      title: "Expense Tracker",
      subtitle: "Financial Logic",
      description: "A robust management system built on solid OOP principles. Integrating Java with relational databases for precise financial tracking.",
      tech: ["Java", "OOP", "MySQL", "JDBC"],
      link: "https://github.com/Priyankak00/Expense-Tracker-Application",
      image: "https://lh3.googleusercontent.com/d/1ghYLQiHM4e42vQunR7PH14RP66G5p8Vn"
    },
    {
      id: "04",
      title: "Anime Review",
      subtitle: "Interactive Analytics",
      description: "An interactive Power BI dashboard analyzing anime datasets to uncover trends in ratings, genres, and popularity through advanced data visualization.",
      tech: ["Power BI", "Excel"],
      link: "https://github.com/Priyankak00/Anime-Review",
      image: "https://images.unsplash.com/photo-1551288049-bbda38a5f922?auto=format&fit=crop&q=80&w=1000",
      video: "https://github.com/user-attachments/assets/f64e3900-9e00-4788-952e-db5e396177f4"
    }
  ];

  const getTechIcon = (tech: string) => {
    const iconSize = 18;
    switch (tech.toLowerCase()) {
      case 'react': return <SiReact size={iconSize} className="text-accent-primary" />;
      case 'git': return <SiGit size={iconSize} className="text-accent-primary" />;
      case 'github': return <SiGithub size={iconSize} className="text-accent-primary" />;
      case 'docker': return <SiDocker size={iconSize} className="text-accent-primary" />;
      case 'maven': return <SiApachemaven size={iconSize} className="text-accent-primary" />;
      case 'express': return <SiExpress size={iconSize} className="text-accent-primary" />;
      case 'mongodb': return <SiMongodb size={iconSize} className="text-accent-primary" />;
      case 'socket.io': return <SiSocketdotio size={iconSize} className="text-accent-primary" />;
      case 'python': return <SiPython size={iconSize} className="text-accent-primary" />;
      case 'django': return <SiDjango size={iconSize} className="text-accent-primary" />;
      case 'django channels': return <Zap size={iconSize} className="text-accent-primary" />;
      case 'daphne': return <Server size={iconSize} className="text-accent-primary" />;
      case 'celery': return <Activity size={iconSize} className="text-accent-primary" />;
      case 'postgresql': return <SiPostgresql size={iconSize} className="text-accent-primary" />;
      case 'scikit-learn': return <SiScikitlearn size={iconSize} className="text-accent-primary" />;
      case 'pandas': return <SiPandas size={iconSize} className="text-accent-primary" />;
      case 'java': return <SiOpenjdk size={iconSize} className="text-accent-primary" />;
      case 'mysql': return <SiMysql size={iconSize} className="text-accent-primary" />;
      case 'ml': return <BrainCircuit size={iconSize} className="text-accent-primary" />;
      case 'oop': return <Layers size={iconSize} className="text-accent-primary" />;
      case 'jdbc': return <Database size={iconSize} className="text-accent-primary" />;
      case 'excel': return <FileSpreadsheet size={iconSize} className="text-accent-primary" />;
      case 'power bi': return <BarChart3 size={iconSize} className="text-accent-primary" />;
      case 'hadoop': return <Database size={iconSize} className="text-accent-primary" />;
      default: return null;
    }
  };

  return (
    <section id="projects" ref={targetRef} className="relative h-[500vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="w-full">
          <div className="px-6 max-w-7xl mx-auto mb-12">
            <motion.div onViewportEnter={() => setIsActive(true)}>
              <span className="text-accent-primary font-mono text-sm uppercase tracking-widest">Selected Work</span>
              <div className={cn("reveal-text", isActive && "active")}>
                <h2 className="text-7xl md:text-9xl font-display tracking-tight leading-none">
                  <span>Projects</span>
                </h2>
              </div>
            </motion.div>
          </div>

          <motion.div style={{ x }} className="flex">
            {projects.map((project, idx) => (
              <div
                key={project.title}
                className="min-w-screen flex items-center px-6 md:px-24 relative group/project"
              >
                {/* Vertical Division Line */}
                {idx !== 0 && (
                  <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-accent-primary/10" />
                )}

                <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
                  <div className="relative">
                    {/* Project Number Division */}
                    <div className="absolute -top-16 left-0 flex items-center gap-4">
                      <span className="text-7xl font-display text-accent-primary/10 group-hover/project:text-accent-primary/30 transition-colors">{project.id}</span>
                      <div className="h-px w-32 bg-accent-primary/10" />
                    </div>

                    <a 
                      href={project.demo || project.link} 
                      target="_blank"
                      className="relative group overflow-hidden bg-charcoal aspect-video border border-accent-primary/10 shadow-2xl block"
                    >
                      {project.video ? (
                        <video 
                          src={project.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-100"
                        />
                      ) : (
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-100"
                          referrerPolicy="no-referrer"
                        />
                      )}
                      <div className="absolute inset-0 bg-accent-primary/5 mix-blend-overlay" />
                    </a>
                  </div>
                  
                  <div className="space-y-8 md:pl-12 border-l border-accent-primary/5">
                    <div className="space-y-2">
                      <span className="text-accent-primary font-mono text-xs uppercase tracking-widest block">{project.subtitle}</span>
                      <h3 className="text-6xl font-display">{project.title}</h3>
                    </div>
                    
                    <p className="text-xl opacity-60 leading-relaxed max-w-md font-light italic">
                      "{project.description}"
                    </p>

                    <div className="flex flex-wrap gap-3 pt-4">
                      {project.tech.map(t => (
                        <span key={t} className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-tighter px-3 py-1.5 border border-accent-primary/10 bg-accent-primary/5 rounded-full">
                          {getTechIcon(t)}
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-10 flex flex-wrap gap-8">
                      <a 
                        href={project.link} 
                        target="_blank"
                        className="group/link inline-flex items-center gap-6 text-sm font-mono uppercase tracking-[0.2em] text-accent-primary hover:text-white transition-all"
                      >
                        <span className="relative">
                          GitHub Repo
                          <span className="absolute -bottom-2 left-0 w-0 h-px bg-white transition-all group-hover/link:w-full" />
                        </span>
                        <div className="w-12 h-12 rounded-full border border-accent-primary/30 flex items-center justify-center group-hover/link:border-white group-hover/link:bg-white group-hover/link:text-black transition-all">
                          <Github size={20} />
                        </div>
                      </a>

                      {project.demo && (
                        <a 
                          href={project.demo} 
                          target="_blank"
                          className="group/link inline-flex items-center gap-6 text-sm font-mono uppercase tracking-[0.2em] text-accent-secondary hover:text-white transition-all"
                        >
                          <span className="relative">
                            Live Demo
                            <span className="absolute -bottom-2 left-0 w-0 h-px bg-white transition-all group-hover/link:w-full" />
                          </span>
                          <div className="w-12 h-12 rounded-full border border-accent-secondary/30 flex items-center justify-center group-hover/link:border-white group-hover/link:bg-white group-hover/link:text-black transition-all">
                            <ExternalLink size={20} />
                          </div>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const { theme } = useContext(ThemeContext);
  const [isActive, setIsActive] = useState(false);
  
  const education = [
    {
      title: 'B.Tech - Computer Science',
      org: 'Lovely Professional University',
      period: '2023 - 2027',
      desc: 'Focusing on Data Science and Backend Engineering. Building a strong foundation in algorithms, data structures, and software architecture. Current CGPA: 7.7'
    },
    {
      title: 'Intermediate / 12th Grade',
      org: 'CBSE / State Board',
      period: '2021 - 2023',
      desc: 'Focused on Physics, Chemistry, and Mathematics (PCM). Developed strong analytical and problem-solving skills during senior secondary education.'
    },
    {
      title: 'Matriculation / 10th Grade',
      org: 'CBSE / State Board',
      period: '2021',
      desc: 'Foundation years with a focus on science and analytical skills. Graduated with a strong academic record.'
    }
  ];

  const training = [
    {
      title: 'Java Application Development',
      org: 'LPU Training & Internship',
      period: '2025',
      desc: 'Comprehensive training in enterprise Java development. Mastered JDBC, JSP, Servlets, and MySQL architectures to build scalable web applications.',
      certificate: 'https://drive.google.com/file/d/1MS82twBS3FWYxn2hggLR3VIBjUClGQM_/view?usp=sharing',
      image: 'https://lh3.googleusercontent.com/d/1MS82twBS3FWYxn2hggLR3VIBjUClGQM_'
    },
    {
      title: 'NPTEL Certification',
      org: 'IIIT Hyderabad',
      period: '2025',
      desc: 'Completed specialized technical training through the NPTEL program in collaboration with IIIT Hyderabad, focusing on core engineering and computing principles.',
      certificate: 'https://drive.google.com/file/d/1Sv2N7KgLR9vK0rTbMd_1dK8DtTSLzEFB/view?usp=sharing',
      image: 'https://lh3.googleusercontent.com/d/1Sv2N7KgLR9vK0rTbMd_1dK8DtTSLzEFB'
    },
    {
      title: 'Computational Theory: Language Principle & Finite Automata Theory',
      org: 'Infosys Springboard',
      period: '2025',
      desc: 'Mastered the principles of computational theory, focusing on language principles and finite automata theory through the Infosys Springboard platform.',
      certificate: 'https://drive.google.com/file/d/1Ho8rJgs41urhn-rPWzCwywzQw_f2JoRO/view?usp=sharing',
      image: 'https://lh3.googleusercontent.com/d/1Ho8rJgs41urhn-rPWzCwywzQw_f2JoRO'
    },
    {
      title: 'ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM',
      org: 'Infosys Springboard',
      period: '2025',
      desc: 'Specialized training in prompt engineering for ChatGPT-4, exploring the capabilities of Generative AI and Large Language Models.',
      certificate: 'https://drive.google.com/file/d/1Ho8rJgs41urhn-rPWzCwywzQw_f2JoRO/view?usp=sharing',
      image: 'https://lh3.googleusercontent.com/d/1Ho8rJgs41urhn-rPWzCwywzQw_f2JoRO'
    },
    {
      title: 'Build Generative AI Apps and Solutions with No-Code Tools',
      org: 'Infosys Springboard',
      period: '2025',
      desc: 'Learned to build and deploy Generative AI applications using no-code tools, streamlining the development of AI-driven solutions.',
      certificate: 'https://drive.google.com/file/d/1Ho8rJgs41urhn-rPWzCwywzQw_f2JoRO/view?usp=sharing',
      image: 'https://lh3.googleusercontent.com/d/1Ho8rJgs41urhn-rPWzCwywzQw_f2JoRO'
    },
    {
      title: 'Mastering Generative AI and Generative AI Tools',
      org: 'Udemy on Infosys Springboard',
      period: '2025',
      desc: 'Comprehensive course on mastering Generative AI and its associated tools, delivered through Udemy via the Infosys Springboard platform.',
      certificate: 'https://drive.google.com/file/d/1Ho8rJgs41urhn-rPWzCwywzQw_f2JoRO/view?usp=sharing',
      image: 'https://lh3.googleusercontent.com/d/1Ho8rJgs41urhn-rPWzCwywzQw_f2JoRO'
    }
  ];

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div onViewportEnter={() => setIsActive(true)} className="mb-32">
          <span className="text-accent-primary font-mono text-sm uppercase tracking-widest">Timeline</span>
          <div className={cn("reveal-text", isActive && "active")}>
            <h2 className="text-7xl md:text-9xl font-display tracking-tight leading-none">
              <span>The Journey</span>
            </h2>
          </div>
        </motion.div>

        {/* Education Section */}
        <div className="mb-32">
          <div className="flex items-center gap-6 mb-16">
            <GraduationCap className="text-accent-primary" size={32} />
            <h3 className="text-3xl font-display uppercase tracking-widest">Education</h3>
            <div className="h-px flex-grow bg-accent-primary/20" />
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-accent-primary/20 border border-accent-primary/20">
            {education.map((exp, idx) => (
              <div key={idx} className={cn(
                "p-12 transition-colors flex flex-col h-full",
                theme === 'dark' ? "bg-obsidian hover:bg-charcoal" : "bg-paper hover:bg-white"
              )}>
                <span className="text-accent-primary font-mono text-xs uppercase tracking-[0.3em] mb-6 block">{exp.period}</span>
                <h4 className="text-3xl font-display mb-4">{exp.title}</h4>
                <p className="text-accent-secondary font-mono text-[10px] uppercase mb-8">{exp.org}</p>
                <p className="text-base opacity-60 leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Training Section */}
        <div>
          <div className="flex items-center gap-6 mb-12">
            <Award className="text-accent-primary" size={24} />
            <h3 className="text-xl font-display uppercase tracking-widest">Training & Certifications</h3>
            <div className="h-px flex-grow bg-accent-primary/20" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {training.map((exp, idx) => (
              <div key={idx} className={cn(
                "p-4 border border-accent-primary/10 transition-all duration-300 flex flex-col gap-4 group",
                theme === 'dark' ? "bg-obsidian hover:bg-charcoal" : "bg-paper hover:bg-white"
              )}>
                {exp.image && (
                  <div className="relative overflow-hidden border border-accent-primary/10 aspect-[1.414/1] bg-charcoal">
                    <img 
                      src={exp.image} 
                      alt="Certificate" 
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-accent-primary/5 group-hover:bg-transparent transition-colors" />
                  </div>
                )}

                <div className="space-y-3 flex-grow">
                  <div className="space-y-1">
                    <span className="text-accent-primary font-mono text-[9px] uppercase tracking-[0.2em] block">{exp.period}</span>
                    <h4 className="text-lg font-display group-hover:text-accent-primary transition-colors leading-tight">{exp.title}</h4>
                    <p className="text-accent-secondary font-mono text-[9px] uppercase">{exp.org}</p>
                  </div>
                  <p className="text-xs opacity-60 leading-relaxed line-clamp-3">{exp.desc}</p>
                </div>

                {exp.certificate && (
                  <a 
                    href={exp.certificate} 
                    target="_blank" 
                    className="inline-flex items-center gap-2 text-[9px] font-mono uppercase tracking-widest text-accent-primary hover:text-white transition-colors mt-auto"
                  >
                    <ExternalLink size={10} />
                    Verify Certificate
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const [isActive, setIsActive] = useState(false);

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div onViewportEnter={() => setIsActive(true)} className="mb-32">
          <span className="text-accent-primary font-mono text-sm uppercase tracking-widest">Contact</span>
          <div className={cn("reveal-text", isActive && "active")}>
            <h2 className="text-7xl md:text-9xl font-display tracking-tight leading-none">
              <span>Let's Connect</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-20">
          <div className="space-y-12">
            <p className="text-4xl font-display leading-tight">
              Have a project in mind? <br />
              <span className="text-accent-primary">Let's build something extraordinary.</span>
            </p>
            
            <div className="space-y-6">
              <a href="mailto:pk7673072@gmail.com" className="block text-2xl font-mono hover:text-accent-primary transition-colors">pk7673072@gmail.com</a>
              <div className="flex gap-8">
                <a href="https://linkedin.com/in/priyankak16/" target="_blank" className="text-xs font-mono uppercase tracking-[0.3em] hover:text-accent-primary transition-colors">LinkedIn</a>
                <a href="https://github.com/Priyankak00" target="_blank" className="text-xs font-mono uppercase tracking-[0.3em] hover:text-accent-primary transition-colors">GitHub</a>
              </div>
            </div>
          </div>

          <form className="space-y-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="border-b border-accent-primary/20 pb-4">
                <label className="block text-[10px] font-mono uppercase tracking-widest opacity-40 mb-2">Name</label>
                <input type="text" className="w-full bg-transparent outline-none text-lg" placeholder="John Doe" />
              </div>
              <div className="border-b border-accent-primary/20 pb-4">
                <label className="block text-[10px] font-mono uppercase tracking-widest opacity-40 mb-2">Email</label>
                <input type="email" className="w-full bg-transparent outline-none text-lg" placeholder="john@example.com" />
              </div>
            </div>
            <div className="border-b border-accent-primary/20 pb-4">
              <label className="block text-[10px] font-mono uppercase tracking-widest opacity-40 mb-2">Message</label>
              <textarea rows={4} className="w-full bg-transparent outline-none text-lg resize-none" placeholder="Tell me about your project..."></textarea>
            </div>
            <button className="px-12 py-6 bg-accent-primary text-obsidian font-display text-xl hover:bg-white transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50); // 100 * 50ms = 5000ms (5 seconds)
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-obsidian flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative mb-12"
      >
        <div className="w-24 h-24 border-2 border-cyber-blue/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
          <Terminal size={40} className="text-cyber-blue" />
          <motion.div 
            className="absolute inset-0 bg-cyber-blue/10"
            animate={{ y: ['100%', '0%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyber-blue rounded-full animate-ping" />
      </motion.div>

      <div className="w-full max-w-xs">
        <div className="flex justify-between items-end mb-2 font-mono text-xs tracking-widest text-cyber-blue">
          <span>Initializing System</span>
          <span>{progress}%</span>
        </div>
        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-cyber-blue shadow-[0_0_10px_rgba(0,243,255,0.5)]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mt-8 font-mono text-[10px] text-white/20 uppercase tracking-[0.3em] animate-pulse">
        Establishing Secure Connection...
      </div>
    </div>
  );
};

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5500); // Slightly more than 5s to ensure progress reaches 100%
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={cn(
        "min-h-screen transition-colors duration-500 selection:bg-accent-primary selection:text-obsidian",
        theme === 'dark' ? "dark bg-obsidian text-white" : "light bg-paper text-ink"
      )}>
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-accent-primary z-[100] origin-left"
          style={{ scaleX }}
        />
        <CustomCursor />
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div key="loader" exit={{ opacity: 0, scale: 1.1 }} transition={{ duration: 0.5 }}>
              <LoadingScreen />
            </motion.div>
          ) : (
            <motion.div 
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative"
            >
              <Background />
              <FloatingShape />
              <StickerSystem />
              <Navbar />
              <main>
                <Hero />
                <MarqueeSection />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
              </main>
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeContext.Provider>
  );
}
