module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["next/babel"],
    plugins: [
      "macros",
      ["babel-plugin-styled-components", { ssr: true, displayName: true }],
    ],
  };
};
