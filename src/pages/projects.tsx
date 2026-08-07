import { projects } from "../projectsData";

export default function Projects() {

  return (
    <>
      <h1>Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-4)]">

        {/* PROJECT CARDS WITH NAVIGATION */}
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
          >

            {/* IMAGE */}
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            {/* CONTENT */}
            <div className="project-content">

              {/* TITLE */}
              <h3 className="title-row">{project.title}</h3>

              <p>{project.description}</p>

              {/* TAGS */}
              <div className="tag-group">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <hr className="divider" />

              {/* LINK */}
              <div className="tag-group">
              <a
                href = {project.github}
                target="_blank"
                rel="noopener noreferrer"
                className= "tagbutton"
              >
                GitHub
              </a>


              {project.website && (
                <a
                  href= {project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tagbutton"
                >
                  Website
                </a>
              )}
              </div>

            </div>

          </div>
        ))}
      </div>
    </>
  );
}