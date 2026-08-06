export default function About() {
  return (
    <>
      {/* ABOUT */}
      <h1>About Me</h1>

      <p>I studied Robotics at Mälardalen University, where I built a strong foundation in embedded systems, software development, and artificial intelligence. 
        During my studies, I focused on developing efficient software for resource-constrained and low-memory devices, with a strong emphasis on performance optimization. 
        This experience deepened my interest in building scalable and cost-effective technical solutions. 
        In today's increasingly cost-conscious environment, I'm particularly motivated to create systems that balance functionality, reliability, and affordability.</p>

      {/* SKILLS TEXT */}
      <h2>Skills</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
        <div>
            <h3>Frontend</h3>
            <ul className="list-disc mt-[var(--space-1)] pl-[var(--space-2)] space-y-[var(--space-1)]">
              <li>JavaScript / TypeScript</li>
              <li>React (Vite, React Router)</li>
              <li>Tailwind CSS</li>
              <li>CSS Modules</li>
              <li>HTML / CSS</li>
            </ul>
        </div>

        <div>
        <h3>Backend</h3>
        <ul className="list-disc mt-[var(--space-1)] pl-[var(--space-2)] space-y-[var(--space-1)]">
          <li>C# / .NET</li>
          <li>SQL</li>
          <li>Entity Framework Core</li>
        </ul>
        </div>

        <div>
          <h3>ML & AI</h3>
          <ul className="list-disc mt-[var(--space-1)] pl-[var(--space-2)] space-y-[var(--space-1)]">
            <li>Python</li>
          </ul>
        </div>

        <div>
          <h3>Tools & Platforms</h3>
          <ul className="list-disc mt-[var(--space-1)] pl-[var(--space-2)] space-y-[var(--space-1)]">
            <li>Git / GitHub</li>
            <li>Vercel</li>
            <li>Microsoft Azure</li>
          </ul>
        </div>

        <div>
          <h3>Languages</h3>
          <ul className="list-disc mt-[var(--space-1)] pl-[var(--space-2)] space-y-[var(--space-1)]">
            <li>Chinese (Native)</li>
            <li>Swedish (B2)</li>
            <li>English (B2)</li>
          </ul>
        </div>
      </div>


      {/* EDUCATION */}
      <h2>Education</h2>

      <h3>AI Programmer (vocational training), Lexicon AB (Mar 2026 - Present)</h3>
      <p>Focus on development of web applications and cloud services.</p>

      <h3>Labor market activities + language courses (Jul 2024 - Mar 2026)</h3>
      <p>Participated in various activities to improve employability and language skills.</p>

      <h3>Master of Science in Engineering (Robotics), Mälardalen University (Sep 2019 - Jul 2024)</h3>
      <p>Focus on robotics, embedded systems, machine learning, and artificial intelligence.</p>
    </>
  );
}