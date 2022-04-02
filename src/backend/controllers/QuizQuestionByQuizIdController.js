import { Response } from "miragejs";

/**
 * All the routes related to Product are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets all products in the db.
 * send GET Request at /api/user/products/:productId
 * */

export const getQuizQuestionByQuizIdHandler = function (schema, request) {
  const quizId = request.params.quizId;
  console.log(quizId);
  try {
    console.log(schema);
    const questions = schema.questions.findBy({ quizId: quizId });
    return new Response(200, {}, { questions });
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
