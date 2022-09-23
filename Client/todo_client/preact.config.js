/**
 * @param {import('preact-cli').Config} config - Original webpack config
 * @param {import('preact-cli').Env} env - Current environment info
 * @param {import('preact-cli').Helpers} helpers - Object with useful helpers for working with the webpack config
 */
export default (config, env, helpers) => {
  let { rule } = helpers.getLoadersByName(config, "babel-loader")[0];
  let babelConfig = rule.options;
  babelConfig.plugins.unshift([
    require("babel-plugin-relay"),
    { artifactDirectory: "./src/components/__generated__" },
  ]);
};
