import "./quiz-page.css";
import { Navbar } from "../../components";

export default function QuizPage() {
    return (
    <section class="page-wrap">
        <section class="page-nav">
            <Navbar></Navbar>
        </section>

        <section class="page-header">
        </section>

        <section class="page-sidebar">
        </section>

        <section class="page-main">
            <main class="main-container dui-util-spc-pad-m">
                <div class="quiz-card">
                    <h1 class="quiz-card__title dui-primary-color dui-util-txt-align-cent">Plant Types</h1>

                    <p class="quiz-card__question dui-util-txt-align-cent dui-util-spc-pad-s dui-util-txt-md">Which plant can be put inside the living room?</p>

                    <div class="quiz-card__status dui-util-spc-pad-s">
                        <p class="quiz-card__ques-status dui-util-txt-align-left">Question: <span>1/5</span></p>
                        <p class="quiz-card__score-status dui-util-txt-align-right">Score: <span>0</span></p>
                    </div>

                    <ul class="dui-ul quiz-card__options">
                        <li class="quiz-card__option dui-util-bdr-radi-m dui-util-spc-pad-s">
                            <p><span class="dui-util-fw-bld">1) </span>Option 1</p>
                        </li>
                        <li class="quiz-card__option dui-util-bdr-radi-m dui-util-spc-pad-s">
                            <p><span class="dui-util-fw-bld">2) </span>Option 1</p>
                        </li>
                        <li class="quiz-card__option dui-util-bdr-radi-m dui-util-spc-pad-s">
                            <p><span class="dui-util-fw-bld">3) </span>Option 1</p>
                        </li>
                    </ul>

                </div>



            </main>
        </section>

        <section class="page-footer">
        </section>

    </section>
    );
};