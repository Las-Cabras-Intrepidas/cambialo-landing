/* eslint-disable quote-props */
/* eslint-disable indent */
module.exports = {
  plugins: {
    "postcss-nesting": true,
    "postcss-easy-import": {
      prefix: "_",
      extensions: [".pcss", ".css"],
    },
    "postcss-preset-env": {
      stage: 3,
      feature2: {
        "nesting-rules": true,
        "custom-properties": true,
      },
    },
    "postcss-font-magician": true,
    autoprefixer: true,
    "postcss-clean": true,
  },
};
