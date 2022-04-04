import { Response } from "miragejs";

/**
 * All the routes related to Product are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets all products in the db.
 * send GET Request at /api/products
 * */

export const getAllQuizCategoryHandler = function () {
  return new Response(200, {}, { categories: this.db.quizeCategories });
};
