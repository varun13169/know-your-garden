import "./quiz-category-page.css"

export default function QuizCategoryPage() {
    return(
        <section class="page-wrap">
            <section class="page-nav">
                <nav class="nav">
                    <p class="dui-util-txt-md dui-util-fw-sbld">Know Your Plant</p>
                </nav>
            </section>
    
            <section class="page-main">
                <main class="main-container dui-util-spc-pad-m">
    
                    <h1 class="quiz-category-title dui-primary-color dui-util-txt-align-cent">Quiz Category</h1>
    
                    <div class="quiz-card-container">
                        <div class="quiz-card dui-util-bdr-radi-m">
                            <div class="quiz-card__img dui-util-bdr-radi-m">
    
                            </div>
                            <div class="quiz-card__info dui-util-spc-pad-s">
                                <h2 class="quiz-card__title">Quiz Title</h2>
                                <p class="quiz-card__desc">Quiz Description</p>
                                <p class="quiz-card__ques-info">5 Questions</p>
                            </div>
                        </div>
                        
                        <div class="quiz-card dui-util-bdr-radi-m">
                            <div class="quiz-card__img dui-util-bdr-radi-m">
    
                            </div>
                            <div class="quiz-card__info dui-util-spc-pad-s">
                                <h2 class="quiz-card__title">Quiz Title</h2>
                                <p class="quiz-card__desc">Quiz Description</p>
                                <p class="quiz-card__ques-info">5 Questions</p>
                            </div>
                        </div>
                    </div>
    
                </main>
            </section>
    
        </section>
    )

}