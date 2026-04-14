import { Link } from 'react-router-dom'
import './Projects.css'
import stoicImg from '../assets/stoic.png'

const inProgress = [
  {
    name: 'Barback Pro',
    description: 'Professional cocktail reference for bartenders.',
    platforms: ['iOS', 'Android'],
    status: 'In Development',
    detailHref: '/projects#barback-pro',
  },
  {
    name: 'RepVault',
    description: 'Workout logging with training data visualization across strength and cardio, developed alongside a personal trainer.',
    platforms: ['iOS', 'Android'],
    status: 'In Development',
    detailHref: '/projects#repvault',
  },
  {
    name: 'AI Impact Index',
    description: 'Research and publishing platform documenting the quantifiable environmental and social costs of AI - energy, water, carbon, labor, and misinformation risk.',
    platforms: ['Web', 'Newsletter'],
    status: 'In Development',
    detailHref: '/projects#ai-impact-index',
  },
  {
    name: 'BirdCam',
    description: 'Edge AI system for real-time bird species identification, from Raspberry Pi to web dashboard.',
    platforms: ['Raspberry Pi', 'ASP.NET', 'Blazor'],
    status: 'Portfolio Project',
    detailHref: '/projects#birdcam',
  },
]

const pastProjects = [
  {
    name: 'Stoic Banner',
    description: 'Daily Stoic quotes for your browser and home screen.',
    platforms: ['iOS', 'Chrome'],
    image: stoicImg,
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/us/app/stoic-banner/id6760270893' },
    ],
  },
  {
    name: 'Automated Greenhouse',
    description: 'Automated climate control system for a commercial greenhouse - sensor integration, actuation, and remote monitoring.',
    platforms: ['Embedded', 'IoT'],
    status: 'Consulting',
  },
]

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className={`project-card-top${project.image ? ' project-card-top--media' : ''}`}>
        {project.image && (
          <img src={project.image} alt={project.name} className="project-image" />
        )}
        <div className="project-card-body">
        <h3 className="project-name">{project.name}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-badges">
          {project.platforms.map((p) => (
            <span key={p} className="badge badge-platform">{p}</span>
          ))}
          {project.status && (
            <span className="badge badge-status">{project.status}</span>
          )}
        </div>
        </div>
      </div>
      {(project.links || project.detailHref) && (
        <div className="project-links">
          {project.links && project.links.map((link) => (
            <a key={link.label} href={link.href} className="project-link" target="_blank" rel="noopener noreferrer">
              {link.label} &rarr;
            </a>
          ))}
          {project.detailHref && (
            <Link to={project.detailHref} className="project-link">Details &rarr;</Link>
          )}
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-inner">
        <h2 className="section-title">Work</h2>

        <h3 className="projects-group-title">In Progress</h3>
        <div className="projects-grid">
          {inProgress.map((p) => <ProjectCard key={p.name} project={p} />)}
        </div>

        <h3 className="projects-group-title">Past Projects</h3>
        <div className="projects-grid">
          {pastProjects.map((p) => <ProjectCard key={p.name} project={p} />)}
        </div>

        <div className="projects-more">
          <Link to="/projects" className="projects-more-link">View full project details &rarr;</Link>
        </div>
      </div>
    </section>
  )
}
