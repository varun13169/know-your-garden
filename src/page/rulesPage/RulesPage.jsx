import "./rules-page.css"

export default function RulesPage() {
    return(

    <section class="page-wrap">
    <section class="page-main">
        <main class="main-container">
            <section class="rules-card dui-util-spc-pad-s dui-util-bdr-radi-l">

                <div class="rules-card__title dui-util-spc-pad-xs">
                    <h2 class="dui-primary-color">Game Rules</h2>
                </div>

                <ul class="rules-card__rules-list dui-util-spc-pad-xs">
                    <li>
                        <p class="dui-util-fw-sbld">Each question will have 4 options</p>
                    </li>
                    <li>
                        <p class="dui-util-fw-sbld">Correct option will reward you with 5 points</p>
                    </li>
                    <li>
                        <p class="dui-util-fw-sbld">Incorrect option will set you back with 3 points</p>
                    </li>
                    <li>
                        <p class="dui-util-fw-sbld">You will be directed to the next screen incase of timeout, no
                            points will be rewarded or deducted.</p>
                    </li>
                </ul>

                <div class="rules-card__actions">

                    <a class="rules-card__action dui-link dui-link--secondary dui-util-bdr-radi-s dui-util-txt-sm dui-util-spc-pad-xs"
                        href="#">
                        Go Home
                    </a>

                    <a
                        class="rules-card__action dui-link dui-link--primary dui-util-bdr-radi-s dui-util-txt-sm dui-util-spc-pad-xs">
                        Let's Play
                    </a>

                </div>


            </section>

        </main>
    </section>

</section>
    )
}