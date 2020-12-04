const { sanitizeEntity } = require('strapi-utils');

const Shopify = require('shopify-api-node');

const shopify = new Shopify({
  shopName: 'eli-testing-store',
  apiKey: '1bdd5802ce95aa9c6318d1a834e8c3a9',
  password: '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'
});

module.exports = {
  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.services.product.findOne({ id });
    entity.shopify = await shopify.product.get(entity.shopifyID);
    return sanitizeEntity(entity, { model: strapi.models.product });
  },
};
