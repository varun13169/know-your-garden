import { Server, Model, RestSerializer } from "miragejs";
import {
  loginHandler,
  signupHandler,
} from "./backend/controllers/AuthController";
// import {
//   addItemToCartHandler,
//   getCartItemsHandler,
//   removeItemFromCartHandler,
//   updateCartItemHandler,
// } from "./backend/controllers/CartController";
// import {
//   getAllCategoriesHandler,
//   getCategoryHandler,
// } from "./backend/controllers/CategoryController";
import { getAllQuizCategoryHandler } from "./backend/controllers/QuizCategoryController";
// import {
//   addItemToWishlistHandler,
//   getWishlistItemsHandler,
//   removeItemFromWishlistHandler,
// } from "./backend/controllers/WishlistController";
// import { categories } from "./backend/db/categories";
// import { products } from "./backend/db/products";
// import { users } from "./backend/db/users";

import { quizeCategories } from "./backend/db/quizCategory";
import { questions } from "./backend/db/quizesQuestions";
import { quizes } from "./backend/db/quizes";
import { getQuizByCategoryHandler } from "./backend/controllers/QuizByCategoryController";
import { getQuizQuestionByQuizIdHandler } from "./backend/controllers/QuizQuestionByQuizIdController";

export function makeServer({ environment = "development" } = {}) {
  return new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,
    models: {
      quizeCategory: Model,
      quiz: Model,
      question: Model,
    },

    // Runs on the start of the server
    seeds(server) {
      // disballing console logs from Mirage
      server.logging = false;
      quizeCategories.categories.forEach((item) => {
        server.create("quizeCategory", { ...item });
      });

      quizes.quizes.forEach((item) => {
        server.create("quiz", { ...item });
      });

      questions.questions.forEach((item) => {
        server.create("question", { ...item });
      });
    },

    routes() {
      this.namespace = "api";
      // auth routes (public)
      this.post("/auth/signup", signupHandler.bind(this));
      this.post("/auth/login", loginHandler.bind(this));

      // products routes (public)
      this.get("/quiz-categories", getAllQuizCategoryHandler.bind(this));
      this.get("/quizes/:categoryId", getQuizByCategoryHandler.bind(this));
      this.get("/questions/:quizId", getQuizQuestionByQuizIdHandler.bind(this));
    },
  });
}
