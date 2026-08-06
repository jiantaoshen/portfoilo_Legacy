import { useNavigate } from "react-router-dom";
import { projects } from "../projectMetaData/projectsData";
import card from "../styles/components/card.module.css";
import button from "../styles/components/event.module.css";

export default function Home() {
  const navigate = useNavigate();
  
  return (
    <>
      {/* HERO CONTENT */}
      <div className="flex items-start justify-between w-full">
        <div className="flex-1 max-w-[650px]">
          <h3>Hello, I'm</h3>

          <h1>JIANTAO SHEN</h1>

          <div className="flex items-center gap-[var(--space-2)]">
            <h2>Full Stack Developer</h2>
            <div className="w-1 h-[var(--font-h2)] bg-[var(--color-primary)] rounded-full mt-[var(--space-3)] mb-[var(--space-2)]"></div>
          </div>

          <p className="max-w-[600px]">
            I design and build modern, cost-effective webpage with a focus on clean code, scalable architecture, and high-performance APIs.
          </p>

          <div className="button-group">
            <button className={button["primary-button"]} onClick={() => navigate("/projects")}>
              View My Work
            </button>
          </div>
        </div>

         <div className="w-[400px] flex flex-col gap-[var(--space-3)]">
          <h3>Featured Projects</h3>

        {/* PROJECT CARDS WITH NAVIGATION */}
        {projects.slice(-1).map((project) => (
          <div
            key={project.id}
            className={card["project-card"]}
          >

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
              
            </div>

          </div>
        ))}
        </div>
      </div>
    </>
  );
}
