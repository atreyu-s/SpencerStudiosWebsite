import { Link } from 'react-router-dom'
import billyImg from '../assets/billy.jpg'
import './ProjectsPage.css'

const projects = [
  {
    name: 'Barback',
    status: 'In Development',
    platforms: ['iOS', 'Android'],
    description: [
      'Barback is a professional cocktail reference tool built for working bartenders. The app gives bartenders instant access to a structured, searchable library of classic and contemporary recipes — organized the way a professional thinks, not a hobbyist.',
      'The goal is a distraction-free tool that holds up behind the bar: fast lookup, clean presentation, and the depth a professional actually needs. No clutter, no social features — just reliable reference when it matters.',
    ],
    partner: null,
  },
  {
    name: 'RepVault',
    status: 'In Development',
    platforms: ['iOS', 'Android'],
    description: [
      'RepVault is a workout logging app built around training data — not just tracking sets and reps, but giving athletes a meaningful view of their progress over time. The app visualizes strength trends, running data, and volume across training cycles so athletes and coaches can make informed decisions instead of guessing.',
      'The project is being developed in close collaboration with Billy Cavalieri - a personal trainer, performance enhancement specialist, and triathlete with over 25 years of experience coaching athletes at every level - to ensure the tool reflects how serious athletes and coaches actually think about training data.',
    ],
    partner: {
      name: 'Billy Cavalieri',
      role: 'Personal Trainer & Performance Enhancement Specialist',
      photo: billyImg,
      bio: 'Billy Cavalieri is a seasoned personal trainer, strength coach, and triathlete with over 25 years of dedicated weight lifting experience. His deep passion for the sport laid the foundation for a career built on discipline, knowledge, and results. Since 2007, Billy has channeled that expertise into coaching athletes, helping them unlock their potential and reach peak performance. His hands-on approach and decades of firsthand strengthening and conditioning experience give him a unique edge in understanding both the physical and mental demands of athletic development. Billy\'s commitment to the craft has made him a trusted mentor to athletes across all levels, from beginners finding their footing to competitors chasing elite goals.',
    },
  },
  {
    name: 'AI Impact Index',
    status: 'In Development',
    platforms: ['Web', 'Newsletter'],
    description: [
      'AI Impact Index is a research and publishing platform documenting the quantifiable environmental and social costs of artificial intelligence. It is built for people who want to use AI responsibly and push for realistic, actionable reform.',
      'The platform aggregates data from academic institutions, regulatory bodies, and corporate sustainability disclosures to produce transparent, methodology-driven assessments of the AI industry\'s footprint - covering energy consumption, water usage, carbon emissions, labor practices, political influence, and misinformation risk.',
    ],
    partner: null,
  },
  {
    name: 'BirdCam',
    status: 'Portfolio Project',
    platforms: ['Raspberry Pi', 'ASP.NET', 'Blazor'],
    description: [
      'BirdCam is an edge AI system for real-time bird species identification, running inference on a Raspberry Pi and streaming results to a web dashboard. The system processes live camera input locally, classifies species using a trained model, and pushes events to a Blazor front end over a lightweight ASP.NET backend.',
      'The project was built to explore the practical constraints of running machine learning workloads on resource-limited hardware - latency, model size tradeoffs, and the logistics of deploying a reliable always-on system outside of a cloud environment.',
    ],
    partner: null,
  },
]

function PartnerCard({ partner }) {
  return (
    <div className="partner-card">
      <div className="partner-card-header">
        {partner.photo && (
          <img src={partner.photo} alt={partner.name} className="partner-photo" />
        )}
        <div>
          <h3 className="partner-name">{partner.name}</h3>
          <p className="partner-role">{partner.role}</p>
        </div>
      </div>
      <p className="partner-bio">{partner.bio}</p>
    </div>
  )
}

function ProjectDetail({ project }) {
  return (
    <div className="project-detail">
      <div className="project-detail-header">
        <h2 className="project-detail-name">{project.name}</h2>
        <div className="project-detail-badges">
          {project.platforms.map((p) => (
            <span key={p} className="badge badge-platform">{p}</span>
          ))}
          {project.status && (
            <span className="badge badge-status">{project.status}</span>
          )}
        </div>
      </div>
      <div className="project-detail-body">
        {project.description.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
      {project.partner && (
        <div className="project-detail-partner">
          <h4 className="partner-section-label">Industry Partner</h4>
          <PartnerCard partner={project.partner} />
        </div>
      )}
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <div className="projects-page-inner">
        <div className="projects-page-header">
          <h1 className="projects-page-title">Projects</h1>
          <p className="projects-page-subtitle">
            A closer look at what Spencer Studios is building and the people involved.
          </p>
        </div>

        <div className="project-details-list">
          {projects.map((project) => (
            <ProjectDetail key={project.name} project={project} />
          ))}
        </div>

        <div className="projects-page-footer">
          <Link to="/" className="back-link">← Back to Home</Link>
          <a href="/#contact" className="btn btn-terracotta">Get In Touch</a>
        </div>
      </div>
    </main>
  )
}
