import card from "../styles/components/card.module.css";
import { projects } from "../projectMetaData/projectsData";

export default function Projects() {

  return (
    <>
      <h1>Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-4)]">

        {/* PROJECT CARDS WITH NAVIGATION */}
        {projects.map((project) => (
          <div
            key={project.id}
            className={card["project-card"]}
          >

            {/* IMAGE */}
            <div className={card["project-image"]}>
              <img src={project.image} alt={project.title} />
            </div>

            {/* CONTENT */}
            <div className={card["project-content"]}>

              {/* TITLE */}
              <h3 className={card["title-row"]}>{project.title}</h3>

              <p>{project.description}</p>

              {/* TAGS */}
              <div className={card["tag-group"]}>
                {project.tags.map((tag) => (
                  <span key={tag} className={card["tag"]}>
                    {tag}
                  </span>
                ))}
              </div>

              <hr className={card["divider"]} />

              {/* LINK */}
              <div className={card["tag-group"]}>
              <a
                href = {project.github}
                target="_blank"
                rel="noopener noreferrer"
                className= {card["tagbutton"]}
              >
                GitHub
              </a>


              {project.website && (
                <a
                  href= {project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className= {card["tagbutton"]}
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