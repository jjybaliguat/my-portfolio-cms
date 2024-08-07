'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('cdmmail')
      .service('myService')
      .getWelcomeMessage();
  },
});
