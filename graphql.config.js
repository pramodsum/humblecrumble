module.exports = {
  overwrite: true,
  generates: {
    "models/shopify.model.ts": {
      schema: [
        {
          "https://graphql.myshopify.com/api/graphql": {
            headers: {
              "X-Shopify-Storefront-Access-Token":
                "dd4d4dc146542ba7763305d71d1b3d38",
            },
          },
        },
      ],
      documents: "services/**/*.{ts,tsx}",
      plugins: ["typescript", "typescript-operations"],
    },
  },
};
