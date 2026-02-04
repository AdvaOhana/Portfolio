import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  ExternalLink,
  Code2,
  Database,
  Layout,
  Server,
  Terminal,
  Cpu,
  Briefcase,
  User,
  ChevronDown,
  Download,
  Settings
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  const skills = [
    { category: "Frontend", icon: <Layout size={24} />, items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"] },
    { category: "Backend", icon: <Server size={24} />, items: ["Node.js", "Express.js", "C", "C++", "C#", "REST API"] },
    { category: "Database", icon: <Database size={24} />, items: ["MongoDB", "MySQL", "SQL"] },
    { category: "DevOps & Tools", icon: <Terminal size={24} />, items: ["Git", "Docker", "OCI (Oracle Cloud)", "GitHub Actions", "Postman", "Arduino"] }
  ];

  const features = [
    { icon: <Code2 size={32} />, title: "Full Stack Development", desc: "Building end-to-end systems from database design to UI.", color: "#3b82f6" },
    { icon: <Cpu size={32} />, title: "IoT & Cloud", desc: "Experience with real-time telemetry and cloud deployment.", color: "#a855f7" },
    { icon: <Settings size={32} />, title: "Problem Solver", desc: "Demonstrated analytical thinking in finding efficient solutions to complex technical challenges.", color: "#22c55e" },
    { icon: <Briefcase size={32} />, title: "Team Player", desc: "Collaborative development and leadership experience.", color: "#f97316" }
  ];

  const projects = [
    {
      title: "sBin - Smart Waste Management",
      description: "Smart Bin is an intelligent waste management system with sensors and cloud analytics that monitors fill levels, sorts waste, and alerts when bins need emptying.",
      tags: ["Node.js", "Express.js", "React", "Docker", "MQTT", "Gemini AI", "OCI", "Leaflet", "shadcn-ui", "Mongoose"],
      image: "https://placehold.co/600x400/2563eb/ffffff?text=sBin+System",
      github: "https://github.com/Atshmuel/s-bin",
      live: "https://s-bins.duckdns.org/login?email=GuestAdmin@sbin.com"
    },
    {
      title: "CRM - Customer Management System",
      description: "A web-based CRM application for managing customers. The system allows adding, editing, and deleting clients, viewing client details, and managing communication efficiently.",
      tags: ["Express.js", "JWT", "RBAC", "Cloud Infrastructure"],
      image: "https://placehold.co/600x400/059669/ffffff?text=CRM+System",
      github: "https://github.com/AdvaOhana/CRM",
      live: "#"
    }
  ];

  const experience = [
    {
      role: "Full Stack Developer",
      company: "Kinneret Technology College",
      period: "June 2023 - Present",
      description: "Developing end-to-end systems using Node.js, React, and MongoDB. Independently leading features from planning to deployment."
    },
    {
      role: "Meeting Coordinator & Team Leader",
      company: "Meitav Investment House",
      period: "2019 - 2023",
      description: "Managed high-level communication, coordinated with government departments, and supervised team members in a fast-paced environment."
    }
  ];

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <div dir="ltr" className="app-shell">
      <style>{`
        :root {
          --primary-color: #2563eb;
          --primary-hover: #1d4ed8;
          --bg-light: #f8fafc;
          --text-main: #0f172a;
          --text-muted: #475569;
          --border-ui: #e2e8f0;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', system-ui, sans-serif; background: var(--bg-light); color: var(--text-main); line-height: 1.6; }
        
        .container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }
        .section-padding { padding: 5rem 0; }
        
        .navbar { position: fixed; top: 0; width: 100%; z-index: 1000; transition: all 0.3s; background: transparent; }
        .navbar.scrolled { background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(10px); box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
        .nav-content { height: 80px; display: flex; align-items: center; justify-content: space-between; }
        
        .gradient-text { cursor: pointer; font-size: 1.5rem; font-weight: 800; background: linear-gradient(45deg, #2563eb, #9333ea); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        
        .desktop-menu { display: flex; gap: 1.5rem; align-items: center; }
        .btn { padding: 0.6rem 1.2rem; border-radius: 8px; font-weight: 500; cursor: pointer; transition: 0.2s; border: none; display: flex; align-items: center; gap: 0.5rem; text-decoration: none; }
        .btn-nav { background: transparent; color: var(--text-muted); }
        .btn-nav:hover { color: var(--primary-color); }
        .btn-primary { background: var(--primary-color); color: white; }
        .btn-primary:hover { background: var(--primary-hover); transform: translateY(-2px); }
        .btn-outline { border: 1px solid var(--border-ui); background: white; color: var(--text-muted); }

        .mobile-menu-btn { display: none; background: none; border: none; cursor: pointer; color: var(--text-main); }
        
        .hero { min-height: 100vh; display: flex; align-items: center; position: relative; padding-top: 80px; overflow: hidden; }
        .hero-bg { position: absolute; top: -10%; left: -10%; width: 40%; height: 40%; background: radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%); z-index: -1; }
        .badge { background: #dbeafe; color: #1e40af; padding: 0.4rem 1rem; border-radius: 20px; font-size: 0.9rem; font-weight: 600; display: inline-block; margin-bottom: 1.5rem; }
        h1 { font-size: 4rem; font-weight: 800; margin-bottom: 1.5rem; line-height: 1.1; }
        .description { font-size: 1.25rem; color: var(--text-muted); max-width: 700px; margin-bottom: 2.5rem; }
        .hero-buttons { display: flex; gap: 1rem; }
        .bounce-arrow { margin-top: 3rem; animation: bounce 2s infinite; color: var(--text-muted); text-align: center; }
        @keyframes bounce { 0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 40% {transform: translateY(-10px);} 60% {transform: translateY(-5px);} }

        .section-header { text-align: center; margin-bottom: 4rem; }
        .section-header h2 { font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; }
        .section-title-line { width: 60px; height: 4px; background: var(--primary-color); margin: 0 auto; border-radius: 2px; }

        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; }
        .features-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
        .feature-card { background: white; padding: 1.5rem; border-radius: 12px; border: 1px solid var(--border-ui); transition: 0.3s; }
        .feature-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.05); }

        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; }
        .skill-card { background: white; padding: 2rem; border-radius: 12px; border: 1px solid var(--border-ui); }
        .skill-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; }
        .skill-icon-wrapper { color: var(--primary-color); background: #eff6ff; padding: 0.75rem; border-radius: 8px; }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .skill-tag { background: var(--bg-light); padding: 0.3rem 0.8rem; border-radius: 6px; font-size: 0.85rem; font-weight: 500; border: 1px solid var(--border-ui); }

        .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem; }
        .project-card { background: white; border-radius: 12px; overflow: hidden; border: 1px solid var(--border-ui); transition: 0.3s; }
        .project-card:hover { transform: translateY(-10px); box-shadow: 0 20px 30px rgba(0,0,0,0.1); }
        .project-image-container { position: relative; height: 200px; }
        .project-image { width: 100%; height: 100%; object-fit: cover; }
        .project-overlay { position: absolute; inset: 0; background: rgba(15, 23, 42, 0.8); display: flex; justify-content: center; align-items: center; gap: 1rem; opacity: 0; transition: 0.3s; }
        .project-card:hover .project-overlay { opacity: 1; }
        .icon-btn { padding: 0.75rem; border-radius: 50%; display: flex; color: white; border: 1px solid rgba(255,255,255,0.2); transition: 0.2s; }
        .icon-btn:hover { background: white; color: var(--text-main); }
        .project-content { padding: 1.5rem; }
        .project-tag { font-size: 0.75rem; background: #eff6ff; color: var(--primary-color); padding: 0.2rem 0.6rem; border-radius: 4px; font-weight: 600; margin-right: 0.5rem; display: inline-block; margin-top: 0.5rem; }

        .timeline-container { position: relative; max-width: 800px; margin: 0 auto; }
        .timeline-line { position: absolute; left: 20px; top: 0; bottom: 0; width: 2px; background: var(--border-ui); }
        .timeline-item { position: relative; padding-left: 60px; margin-bottom: 3rem; }
        .timeline-icon-container { position: absolute; left: 0; width: 40px; height: 40px; background: white; border: 2px solid var(--primary-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--primary-color); z-index: 2; }
        .timeline-card h3 { font-size: 1.2rem; margin-bottom: 0.2rem; }

        .contact-card { background: white; padding: 4rem; border-radius: 24px; text-align: center; border: 1px solid var(--border-ui); box-shadow: 0 10px 40px rgba(0,0,0,0.05); }
        .social-links { display: flex; justify-content: center; gap: 2rem; margin-top: 2rem; }
        .social-link { color: var(--text-muted); transition: 0.2s; }
        .social-link:hover { color: var(--primary-color); transform: translateY(-3px); }

        @media (max-width: 768px) {
          h1 { font-size: 2.5rem; }
          .desktop-menu { display: none; }
          .mobile-menu-btn { display: block; }
          .about-grid { grid-template-columns: 1fr; }
          .hero-buttons { flex-direction: column; }
          .navbar { background: white; }
          .mobile-menu { position: absolute; top: 80px; left: 0; width: 100%; background: white; padding: 1.5rem; box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
          .mobile-link { display: block; width: 100%; text-align: left; padding: 1rem; background: none; border: none; font-size: 1.1rem; border-bottom: 1px solid #f1f5f9; }
        }
      `}</style>

      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-content">
            <div className="gradient-text" onClick={() => scrollToSection('hero')}>
              Adva Ohana
            </div>

            <div className="desktop-menu">
              {navItems.map((item) => (
                <button key={item.name} onClick={() => scrollToSection(item.id)} className="btn btn-nav">
                  {item.name}
                </button>
              ))}
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="mobile-menu-btn">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            {navItems.map((item) => (
              <button key={item.name} onClick={() => scrollToSection(item.id)} className="mobile-link">
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>

      <section id="hero" className="hero">
        <div className="hero-bg"></div>
        <div className="container">
          <div className="badge">🚀 Available for FullStack Roles</div>
          <h1>
            Building  <span style={{ color: 'var(--primary-color)' }}>Scalable, high-performance </span>
            Web applications
            <br />
          </h1>
          <p className='description'>
            I'm a FullStack Developer who enjoys bringing ideas to life using Node.js, React, and Docker.I love the process of turning complex problems into clean, efficient code.
            I'm currently looking for an opportunity to join a dynamic team and contribute to cutting-edge projects. Let's connect and create something great!
          </p>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
              View Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn btn-outline">
              Let's Talk
            </button>
          </div>
          <div className="bounce-arrow">
            <ChevronDown size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header">
            <h2>About Me</h2>
            <div className="section-title-line"></div>
          </div>

          <div className="about-grid">
            <div>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Motivated Full Stack Developer with a strong foundation in server-side logic and client-side interactivity.
                Dedicated team player with experience in designing maintainable components and solving complex algorithmic challenges.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
                Certified Excellence in first-year studies at Kinneret College with an average grade of 98. Passionate about modern development, asynchronous programming, and building secure, performant applications.
              </p>
            </div>

            <div className="features-grid">
              {features.map((item, idx) => (
                <div key={idx} className="feature-card">
                  <div style={{ color: item.color, marginBottom: '0.5rem' }}>{item.icon}</div>
                  <h3 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2>Technical Stack</h2>
            <div className="section-title-line"></div>
          </div>

          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <div className="skill-icon-wrapper">{skillGroup.icon}</div>
                  <h3>{skillGroup.category}</h3>
                </div>
                <div className="skill-tags">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <div className="section-title-line"></div>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <a href={project.github} className="icon-btn" target="_blank" rel="noreferrer"><Github size={20} /></a>
                    <a href={project.live} className="icon-btn"><ExternalLink size={20} /></a>
                  </div>
                </div>
                <div className="project-content">
                  <h3 style={{ marginBottom: '0.5rem' }}>{project.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', height: '80px', overflow: 'hidden' }}>{project.description}</p>
                  <div>
                    {project.tags.map((tag, i) => (
                      <span key={i} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2>Journey</h2>
            <div className="section-title-line"></div>
          </div>

          <div className="timeline-container">
            <div className="timeline-line"></div>
            {experience.map((job, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-icon-container">
                  <Briefcase size={18} />
                </div>
                <div className="timeline-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <h3 style={{ color: 'var(--text-main)' }}>{job.role}</h3>
                    <span className="project-tag">{job.period}</span>
                  </div>
                  <div style={{ color: 'var(--primary-color)', fontWeight: '600', marginBottom: '0.5rem' }}>{job.company}</div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div className="contact-card">
            <h2>Let's Connect</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>
              I am currently seeking my next challenge as a Full Stack Developer.
            </p>
            <div className="social-links">
              <a href="https://github.com/AdvaOhana" className="social-link" target="_blank" rel="noreferrer"><Github size={32} /></a>
              <a href="https://www.linkedin.com/in/adva-ohana-80a603326/" className="social-link" target="_blank" rel="noreferrer"><Linkedin size={32} /></a>
              <a href="mailto:adva1230@gmail.com" className="social-link"><Mail size={32} /></a>
            </div>
            <p style={{ marginTop: '2rem', fontSize: '1.2rem', fontWeight: '600', color: 'var(--primary-color)' }}>
              +972-52-657-8915
            </p>
          </div>
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-ui)' }}>
        © {new Date().getFullYear()} Adva Ohana | Built with React & Passion
      </footer>
    </div>
  );
};

export default App;