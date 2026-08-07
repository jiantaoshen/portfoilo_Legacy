import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation("about");

  const frontendSkills = t("frontendSkills", {
    returnObjects: true,
  }) as string[];

  const backendSkills = t("backendSkills", {
    returnObjects: true,
  }) as string[];

  const toolsSkills = t("toolsSkills", {
    returnObjects: true,
  }) as string[];

  const MLSkills = t("MLSkills", {
    returnObjects: true,
  }) as string[];

  const languagesSkills = t("languagesSkills", {
    returnObjects: true,
  }) as string[];

  const educationDetails = t("educationDetails", {
    returnObjects: true,
  }) as { description: string }[];

  return (
    <>
      {/* ABOUT */}
      <h1>{t("about")}</h1>

      <p>{t("description")}</p>

      {/* SKILLS TEXT */}
      <h2>{t("skills")}</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
        <div>
            <h3>{t("frontend")}</h3>
            <ul className="list-disc mt-[var(--space-1)] pl-[var(--space-2)] space-y-[var(--space-1)]">
              {frontendSkills.map((skill) => (
                <li key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
        </div>

        <div>
            <h3>{t("backend")}</h3>
            <ul className="list-disc mt-[var(--space-1)] pl-[var(--space-2)] space-y-[var(--space-1)]">
              {backendSkills.map((skill) => (
                <li key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
        </div>

        <div>
          <h3>{t("ML")}</h3>
          <ul className="list-disc mt-[var(--space-1)] pl-[var(--space-2)] space-y-[var(--space-1)]">
            {MLSkills.map((skill) => (
              <li key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>{t("tools")}</h3>
          <ul className="list-disc mt-[var(--space-1)] pl-[var(--space-2)] space-y-[var(--space-1)]">
            {toolsSkills.map((skill) => (
              <li key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>{t("Languages")}</h3>
          <ul className="list-disc mt-[var(--space-1)] pl-[var(--space-2)] space-y-[var(--space-1)]">
            {languagesSkills.map((skill) => (
              <li key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* EDUCATION */}
      <h2>{t("education")}</h2>

      {educationDetails.map((education, index) => (
        <div key={index}>
          <h3>{t(`educationDetails.${index}.title`)}</h3>
          <p>{education.description}</p>
        </div>
      ))}
    </>
  );
}