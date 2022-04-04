import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "../../components";
import "./quiz-category-page.css";

export default function QuizCategoryPage() {
  const { id } = useParams();
  const [quizes, setQuizes] = useState([]);

  useEffect(() => {
    let config = {
      headers: {
        Accept: "*/*",
      },
    };

    // Fetch Quizes
    (async function () {
      const { data } = await axios.get(`/api/quizes/${id}`);
      setQuizes(data.quizzes.models);
    })();
  }, []);

  return (
    <section className="quiz-category-page-namespace page-wrap">
      <section className="quiz-category-page-namespace page-nav">
        <Navbar></Navbar>
      </section>

      <section className="quiz-category-page-namespace page-main">
        <main className="quiz-category-page-namespace main-container dui-util-spc-pad-m">
          <h1 className="quiz-category-title dui-primary-color dui-util-txt-align-cent">
            Quiz Category
          </h1>

          <div className="quiz-card-container">
            {quizes.map((quiz) => {
              return (
                <Link
                  className="quiz-card dui-util-bdr-radi-m dui-util-txt-decoration-none"
                  to={"/rules/" + quiz._id}
                >
                  <img
                    className="quiz-card__img dui-util-bdr-radi-m"
                    src={quiz.quizImg}
                  ></img>
                  <div className="quiz-card__info dui-util-spc-pad-s">
                    <h2 className="quiz-card__title">{quiz.quizName}</h2>
                    <p className="quiz-card__desc">{quiz.quizDescription}</p>
                    <p className="quiz-card__ques-info">
                      {`${quiz.quizTotalQuestions} Questions`}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </main>
      </section>
    </section>
  );
}
