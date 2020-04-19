const config = require("./graphql.config");

const shopify = config.schema[0];
const url = Object.keys(shopify)[0];
const { headers } = shopify[url];

module.exports = {
  client: {
    service: {
      name: "shopify",
      url,
      headers,
    },
    excludes: ["**/node_modules/**/*"],
    includes: ["**/*.{ts,tsx}"],
  },
};
