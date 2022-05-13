import { Link } from "react-router-dom";
import { MoonSVG, SunSVG } from "../../assets/svgReactComponents";
import { useTheme } from "../../context";
import "./navbar.css";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="dui-nav-sch-act dui-primary-bg-color">
      <Link
        className="dui-nav-sch-act__logo dui-util-txt-decoration-none"
        to="/"
      >
        <h3 className="dui-util-fw-bld dui-always-white-color">
          Know Your Garden
        </h3>
      </Link>

      <div className="dui-nav-sch-act__actions">
        <button
          className="quiz-app-dui-nav-sch-act__drk-mode-btn dui-nav-sch-act__drk-mode-btn dui-btn reset-button-inherit-parent"
          onClick={() => {
            setTheme({
              ...theme,
              currentTheme: theme.currentTheme === "light" ? "dark" : "light",
            });
          }}
        >
          {theme.currentTheme === "dark" && <SunSVG />}

          {theme.currentTheme === "light" && <MoonSVG />}
        </button>
      </div>
    </nav>
  );
}
