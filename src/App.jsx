import { useEffect, useState } from 'react';
import './App.css';

const projects = [
  {
    id: 1,
    title: 'Content Review & Publishing System',
    product: 'Gamer Rya Bot',
    category: 'professional',
    type: 'Workflow Automation',
    description:
      'A content review, scheduling and publishing workflow built for a large online gaming community.',
    overview:
      'Implemented a redesigned content review and publishing workflow based on requirements from the community team. The system helps staff review submissions, manage content and automate parts of the publishing process.',
    contribution: [
      'Implemented the new review workflow and supporting Discord commands.',
      'Replaced the previous manual publishing workflow with an automated publishing system.',
      'Built an automatic review system for regular content, including submission posting, batch tracking and reminders.',
      'Added tools for editing review reasons and moving submissions between review workflows.',
      'Worked with Google Sheets integration and added handling for API quota errors.',
      'Implemented and improved scheduling workflows for regular content, themed content and other scheduled posts.',
      'Added manual posting and cancellation tools for cases where staff need direct control.',
    ],
    details: [
      {
        title: 'Reliability',
        text:
          'While implementing the system, I added recovery behavior for scheduled content so that a bot restart would not cause queued content to be lost or leave its scheduling state broken.',
      },
    ],
    technologies: [
      'JavaScript',
      'Node.js',
      'Discord.js',
      'Google Sheets API',
      'MariaDB',
      'Git',
    ],
    sourcePrivate: true,
  },

  {
    id: 2,
    title: '9th Anniversary Lottery System',
    product: 'Halpie Bot',
    category: 'professional',
    type: 'Event System',
    description:
      'Commands, permissions, logging and staff tooling for a community-wide anniversary lottery event.',
    overview:
      'Contributed to the development and ongoing maintenance of a ticket-based lottery system for the community’s 9th Anniversary event, focusing on the commands, staff tools, permissions and logging needed to operate the event.',
    contribution: [
      'Built commands for managing and operating the lottery.',
      'Implemented role- and channel-based command permissions for different staff responsibilities.',
      'Built logging for important lottery actions.',
      'Added staff tools including balance lookups and leaderboards.',
      'Updated existing lottery logic when new requirements and edge cases appeared.',
      'Maintained and adjusted the system as requirements changed during the event.',
    ],
    details: [
      {
        title: 'Ongoing Development',
        text:
          'The event requirements continued evolving after the initial implementation, so I maintained the commands and supporting systems, fixed edge cases and adapted functionality when new needs appeared.',
      },
    ],
    technologies: [
      'JavaScript',
      'Node.js',
      'Discord.js',
      'MariaDB',
      'Git',
    ],
    sourcePrivate: true,
  },

  {
    id: 3,
    title: 'Moderation Logging Systems',
    product: 'Halpo Police Bot',
    category: 'professional',
    type: 'Moderation Tooling',
    description:
      'Logging tools for tracking important moderation activity and keeping a clear history of changes.',
    overview:
      'Built two logging features for an existing moderation bot to help staff keep track of important changes and voting activity.',
    contribution: [],
    details: [
      {
        title: 'Nickname Change Logging',
        text:
          'Built a system that tracks nickname changes for members with a specific role, recording the member, previous nickname, new nickname and time of the change.',
      },
      {
        title: 'Ban Appeal Vote Logging',
        text:
          'Built a system that tracks staff votes on ban appeals, including who voted, their choice, when they voted and a link to the original message. The system also detects when someone changes their vote and records both the previous and new choice.',
      },
    ],
    technologies: [
      'JavaScript',
      'Node.js',
      'Discord.js',
      'MariaDB',
      'Git',
    ],
    sourcePrivate: true,
  },

  {
    id: 4,
    title: 'Birthday Adventure Game',
    product: 'Personal Project',
    category: 'personal',
    type: 'Game Development',
    description:
      'A short 2D exploration game designed and developed as a personalized birthday gift.',
    overview:
      'A short 2D exploration game I created as a birthday gift for a friend. The player explores a colorful world, interacts with characters and collects the items needed to progress and eventually reach the birthday celebration.',
    contribution: [
      'Developed the game using Unity and C#.',
      'Designed the game concept, progression and overall player experience.',
      'Implemented exploration, character interactions and item collection.',
      'Created the progression leading to the final birthday area.',
      'Built the project into a complete playable game.',
    ],
    details: [
      {
        title: 'Art & Assets',
        text:
          'The 2D artwork uses third-party assets sourced online during the original development of the project.',
      },
    ],
    technologies: [
      'C#',
      'Unity',
      '2D Game Development',
    ],
    images: {
      main: '/images/birthday-map.png',
      gallery: [
        '/images/birthday-gameplay.png',
        '/images/birthday-dialogue.png',
      ],
    },
    sourcePrivate: false,
  },
];

function ProjectModal({ project, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        if (selectedImage) {
          setSelectedImage(null);
        } else {
          onClose();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, selectedImage]);

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div
        className="project-modal"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close project"
        />

        <span className="project-type">{project.type}</span>

        <h2>{project.title}</h2>

        <p className="modal-product">{project.product}</p>

        {project.images && (
          <div className="project-gallery">
            <button
              className="project-image-button project-main-image-button"
              onClick={() => setSelectedImage(project.images.main)}
              aria-label="Open main screenshot"
            >
              <img
                className="project-main-image"
                src={project.images.main}
                alt={`${project.title} gameplay`}
              />
            </button>

            <div className="project-gallery-row">
              {project.images.gallery.map((image, index) => (
                <button
                  className="project-image-button"
                  key={image}
                  onClick={() => setSelectedImage(image)}
                  aria-label={`Open screenshot ${index + 1}`}
                >
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="modal-section">
          <h3>Overview</h3>
          <p>{project.overview}</p>
        </div>

        {project.contribution.length > 0 && (
          <div className="modal-section">
            <h3>My Contribution</h3>

            <ul>
              {project.contribution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {project.details?.map((detail) => (
          <div className="modal-section" key={detail.title}>
            <h3>{detail.title}</h3>
            <p>{detail.text}</p>
          </div>
        ))}

        <div className="modal-section">
          <h3>Technologies</h3>

          <div className="technology-list">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>

        {project.sourcePrivate && (
          <p className="private-source">
            Source code is private as this work was contributed to existing community-owned projects.
          </p>
        )}

        {selectedImage && (
          <div
            className="image-preview-backdrop"
            onMouseDown={() => setSelectedImage(null)}
          >
            <div
              className="image-preview"
              onMouseDown={(event) => event.stopPropagation()}
            >
              <button
                className="image-preview-close"
                onClick={() => setSelectedImage(null)}
                aria-label="Close image preview"
              />

              <img
                src={selectedImage}
                alt="Expanded project screenshot"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  const [projectCategory, setProjectCategory] = useState('professional');
  const [selectedProject, setSelectedProject] = useState(null);

  const visibleProjects = projects.filter(
    (project) => project.category === projectCategory,
  );

  return (
    <>
      <header className="navigation">
        <a className="logo" href="#home">
          H. Ivanova 
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">FULL-STACK DEVELOPER IN TRAINING</p>

            <h1>Hi, I'm Hristiana Ivanova.</h1>

            <p className="hero-description">
              I enjoy building practical software, solving problems 
              and turning ideas into working solutions.
            </p>

            <div className="hero-buttons">
              <a className="button primary-button" href="#projects">
                View my work
              </a>

              <a className="button secondary-button" href="#contact">
                Contact me
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <p className="section-label">ABOUT</p>

          <h2>A little about me.</h2>

          <p className="large-paragraph">
            I'm a developer based in Riga, Latvia, currently studying
            full-stack development while gaining hands-on experience as a
            volunteer Discord Bot Developer. I enjoy taking an idea or
            requirement and figuring out how to turn it into a practical, finished solution.
          </p>

          <p className="large-paragraph about-second-paragraph">
            Most of my recent work has been with JavaScript and Node.js,
            building and maintaining features for a large gaming community.
            I'm now expanding further into frontend development and I'm
            particularly interested in interactive products and games.
          </p>
        </section>

        <section className="section" id="experience">
          <p className="section-label">EXPERIENCE</p>

          <h2>Where I've worked.</h2>

          <div className="experience-card">
            <div className="experience-heading">
              <div>
                <h3>Discord Bot Developer</h3>
                <p>
                  Volunteer · Mobile Legends: Bang Bang Community
                </p>
              </div>

              <span>May 2026 — Present</span>
            </div>

            <p className="experience-description">
              Contribute to the development and maintenance of Discord
              applications supporting an online gaming community of
              approximately 600,000 members.
            </p>

            <ul className="experience-list">
              <li>
                Turn requirements from community teams into working bot
                features and internal tools.
              </li>

              <li>
                Develop new functionality while maintaining and improving
                existing production systems.
              </li>

              <li>
                Debug issues, handle changing requirements and make updates to
                features already being used by the community and staff.
              </li>

              <li>
                Collaborate with other developers using Git-based workflows and
                deploy changes to remotely hosted bots.
              </li>
            </ul>
          </div>
        </section>

        <section className="section" id="projects">
          <p className="section-label">PROJECTS</p>

          <div className="project-heading">
            <div>
              <h2>Selected work.</h2>

              <p>
                A few projects and features I've built or contributed to.
              </p>
            </div>

            <div className="project-tabs">
              <button
                className={
                  projectCategory === 'professional' ? 'active-tab' : ''
                }
                onClick={() => setProjectCategory('professional')}
              >
                Professional Work
              </button>

              <button
                className={
                  projectCategory === 'personal' ? 'active-tab' : ''
                }
                onClick={() => setProjectCategory('personal')}
              >
                Personal Projects
              </button>
            </div>
          </div>

          <div className="project-grid">
            {visibleProjects.map((project) => (
              <button
                className="project-card"
                key={project.id}
                onClick={() => setSelectedProject(project)}
              >
                <div>
                  <span className="project-type">{project.type}</span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>
                </div>

                <span className="view-project">
                  View project →
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <p className="section-label">SKILLS</p>

          <h2>What I work with.</h2>

          <div className="skills-grid">
            <div className="skill-group">
              <h3>Languages & Web</h3>

              <p>JavaScript</p>
              <p>TypeScript</p>
              <p>C#</p>
              <p>SQL</p>
              <p>HTML & CSS</p>
            </div>

            <div className="skill-group">
              <h3>Development</h3>

              <p>Node.js</p>
              <p>Express</p>
              <p>React</p>
              <p>Discord.js</p>
              <p>Sequelize</p>
            </div>

            <div className="skill-group">
              <h3>Databases & APIs</h3>

              <p>MongoDB</p>
              <p>MariaDB</p>
              <p>REST APIs</p>
              <p>Google Sheets API</p>
            </div>

            <div className="skill-group">
              <h3>Tools & Platforms</h3>

              <p>Git & GitHub</p>
              <p>Linux / VPS</p>
              <p>VS Code</p>
              <p>Claude Code</p>
              <p>Unity</p>
            </div>
          </div>
        </section>

        <section className="section learning-section">
          <p className="section-label">CURRENTLY LEARNING</p>

          <h2>What I'm learning next.</h2>

          <p className="large-paragraph">
            I'm currently working through Code with Mosh's Full-Stack
            Developer learning path, continuing to strengthen my JavaScript
            and Node.js skills while expanding into frontend development.
            My next areas of focus include deepening my knowledge of React
            and learning Angular.
          </p>
        </section>

        <section className="section contact-section" id="contact">
          <p className="section-label">CONTACT</p>

          <h2>Let's connect.</h2>

          <p>
            I'm interested in opportunities where I can continue learning,
            solve problems and contribute to products and features people
            enjoy using.
          </p>

          <div className="contact-links">
            <a href="mailto:chrissyi.1389@gmail.com">
              Email
            </a>

            <a
              href="https://github.com/bluberryc"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Hristiana Ivanova</p>
      </footer>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

export default App;