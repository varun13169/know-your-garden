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

      {/* <!-- Search --> */}
      <div className="dui-nav-sch-act__search dui-inp-txt dui-inp-txt--search">
        <i className="dui-inp-txt__icon dui-inp-txt__icon--search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="dui-inp-txt__icon-content dui-inp-txt__icon-content--search icon icon-tabler icon-tabler-search"
            width="56"
            height="56"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#059669"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="10" cy="10" r="7" />
            <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
        </i>
        <label>
          <input
            className="dui-inp-txt__input dui-inp-txt__input--search dui-util-txt-sm dui-util-bdr-radi-5px-s reset-input-inherit-parent"
            type="text"
            placeholder="Search"
          />
        </label>
      </div>

      <ul className="dui-nav-sch-act__actions dui-ul">
        <li>
          <div className="dui-nav-sch-act__auth-actions">
            {/* <!-- SignUp Button --> */}
            <Link
              className="dui-nav-sch-act__signup-btn dui-link dui-link--invt-primary dui-util-txt-sm dui-util-spc-pad-0_8rem-xs dui-util-fw-bld"
              to="/"
            >
              Sign Up
            </Link>

            {/* <!-- Login Button --> */}
            <Link
              className="dui-nav-sch-act__login-btn dui-link dui-link--invt-primary dui-util-txt-sm dui-util-spc-pad-0_8rem-xs dui-util-fw-bld"
              to="/"
            >
              Login
            </Link>
          </div>
        </li>
        <li>
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
        </li>
      </ul>
    </nav>
  );
}
