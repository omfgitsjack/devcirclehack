require = require("@std/esm")(module, {
  esm: "mjs"
});
module.exports = require("./app.mjs").default;

require("./app");
