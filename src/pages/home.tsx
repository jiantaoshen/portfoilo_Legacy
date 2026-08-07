import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation("home");
  const { t: tProject } = useTranslation("project");

  type Project = {
    id: number;
    slug: string;
    title: string;
    image: string;
    description: string;
    tags: string[];
    github: string;
    website?: string;
  };

  const translatedProjects = tProject("myprojects", {
    returnObjects: true,
  }) as Project[];

  return (
    <>
      {/* HERO CONTENT */}
      <div className="flex items-start justify-between w-full">
        <div className="flex-1 max-w-[650px]">
          <h3>{t("hello")}</h3>

          <h1>{t("name")}</h1>

          <div className="flex items-center gap-[var(--space-2)]">
            <h2>{t("jobTitle")}</h2>
            <div className="w-1 h-[var(--font-h2)] bg-[var(--color-primary)] rounded-full mt-[var(--space-3)] mb-[var(--space-2)]"></div>
          </div>

          <p className="max-w-[600px]">
            {t("description")}
          </p>

          <div className="button-group">
            <button className="primary-button" onClick={() => navigate("/projects")}>
              {t("button")}
            </button>
          </div>
        </div>

         <div className="w-[400px] flex flex-col gap-[var(--space-3)]">
          <h3>{t("showcase")}</h3>

        {/* PROJECT CARDS WITH NAVIGATION */}
        {translatedProjects.slice(-1).map((project) => (
          <div
            key={project.id}
            className= "project-card"
          >

            {/* CONTENT */}
            <div className= "project-content">

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
            </div>
          </div>
        ))}
        </div>
      </div>
    </>
  );
}
