import githubIcon from './assets/Github.svg';
import linkedinIcon from './assets/Linkedin.svg';
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const {i18n, t} = useTranslation("common");

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen w-full mx-auto">
      <header>
        <nav className="relative z-10 flex justify-between items-center px-[var(--space-3)] py-[var(--space-2)]">
          <NavLink className="logo" to="/">
            JIANTAO
          </NavLink>

          <div className="navLinks">
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? "navLink active" : "navLink"}
            >
              {t("home")}
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? "navLink active" : "navLink"}
            >
              {t("about")}
            </NavLink>

            <NavLink
              to="/projects"
              className={({ isActive }) =>isActive ? "navLink active" : "navLink"}
            >
              {t("projects")}
            </NavLink>

            <select 
              value={i18n.language}
              onChange={changeLanguage}
            >
              <option value="zh">🇨🇳 中文</option>
              <option value="en">🇺🇸 English</option>
              <option value="sv">🇸🇪 Svenska</option>

            </select>
          </div>
        </nav>
      </header>

      <main className="flex-1 px-[var(--space-4)] py-[var(--space-4)]">
        <Outlet />
      </main>

      <footer>
      <div className="flex flex-col md:flex-row justify-between gap-[var(--space-4)] 
        max-w-[1000px] mx-auto mt-[var(--space-2)] mb-[var(--space-2)]">

        <div className="flex gap-[var(--space-2)] items-center">
          <a href="https://github.com/jiantaoshen"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:scale-110"
          >
            <img src={githubIcon} alt="GitHub" className="w-12 h-12 object-contain"/>
          </a>

          <a href="https://www.linkedin.com/in/jiantaoshen/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:scale-110"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-12 h-12 object-contain"/>
          </a>
        </div>

        <div className="min-w-[200px] font-semibold text-[var(--color-text)]">
          <p>{t("contact")}</p>
          <p>{t("email")}: jiantaos98@outlook.com</p>
        </div>

        <div className="min-w-[200px] font-semibold text-[var(--color-text)]">
          <p>{t("copyright")}</p>
          <p>© {new Date().getFullYear()} JIANTAO SHEN. {t("rights")}</p>
        </div>
      </div>
    </footer>
    </div>
  );
}