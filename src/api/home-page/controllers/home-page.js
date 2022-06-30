"use strict";

/**
 *  home-page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::home-page.home-page"
  // ({ strapi }) => ({
  //   async find(ctx) {
  //     return strapi
  //       .service("api::home-page.home-page")
  //       .find(ctx.query, ["job_area_left_column"]);
  //   },
  // })
);
