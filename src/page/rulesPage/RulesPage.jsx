import "./rules-page.css";
import { Link, useParams } from "react-router-dom";
import { flushQuizContext } from "../../customHooks";

export default function RulesPage() {
  // reset quiz context
  flushQuizContext();

  const { id } = useParams();

  return (
    <section className="rules-page-namespace page-wrap">
      <section className="rules-page-namespace page-main">
        <main className="rules-page-namespace main-container">
          <section className="rules-card dui-util-spc-pad-s dui-util-bdr-radi-l">
            <div className="rules-card__title dui-util-spc-pad-xs">
              <h2 className="dui-primary-color">Game Rules</h2>
            </div>

            <ul className="rules-card__rules-list dui-util-spc-pad-xs">
              <li>
                <p className="dui-util-fw-sbld">
                  Each question will have 4 options
                </p>
              </li>
              <li>
                <p className="dui-util-fw-sbld">
                  Correct option will reward you with 5 points
                </p>
              </li>
              <li>
                <p className="dui-util-fw-sbld">
                  Incorrect option will set you back with 3 points
                </p>
              </li>
              <li>
                <p className="dui-util-fw-sbld">
                  You have 60 seconds to answer all the quetions, incase of
                  timeout.
                </p>
              </li>
              <li>
                <p className="dui-util-fw-sbld">
                  No points will be rewarded or deducted for the unanswered
                  question.
                </p>
              </li>
            </ul>

            <div className="rules-card__actions">
              <Link
                className="rules-card__action .rules-page-namespace dui-link dui-link--secondary dui-util-bdr-radi-s dui-util-txt-sm dui-util-spc-pad-xs"
                to="/"
              >
                Go Home
              </Link>

              <Link
                className="rules-card__action .rules-page-namespace dui-link dui-link--primary dui-util-bdr-radi-s dui-util-txt-sm dui-util-spc-pad-xs"
                to={"/quiz/" + id}
              >
                Let's Play
              </Link>
            </div>
          </section>
        </main>
      </section>
    </section>
  );
}
