import { Response } from "miragejs";

/**
 * All the routes related to Product are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets all products in the db.
 * send GET Request at /api/user/products/:productId
 * */

export const getQuizByCategoryHandler = function (schema, request) {
  const categoryId = request.params.categoryId;
  console.log(categoryId);
  try {
    console.log(schema.quizzes);
    const quizzes = schema.quizzes.where({ categoryId: categoryId });
    return new Response(200, {}, { quizzes });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
