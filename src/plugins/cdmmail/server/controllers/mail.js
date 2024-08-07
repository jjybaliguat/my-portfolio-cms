"use strict"

module.exports = {
    async find(ctx) {
        try {
            return await strapi.plugin("cdmmail").service("mail").find(ctx.query);
        } catch (error) {
            ctx.throw(500, error)
        }
    }
}