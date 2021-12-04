module.exports = {
  plugins: {
    "postcss-nesting": true,
    "postcss-easy-import": {
      prefix: "_",
      extensions: [".pcss", ".css"],
    },
    "postcss-preset-env": {
      stage: 3,
      features: {
        "nesting-rules": true,
        "custom-properties": true,
      },
    },
    "postcss-font-magician": true,
    autoprefixer: true,
    "postcss-clean": true,
  },
};
