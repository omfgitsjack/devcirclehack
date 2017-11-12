"use script";module.exports = function(title, url, options) {
  var payload = options | {};
  // payload = Object.assign(options, {action: action});
  return {
    type: "web_url",
    url: url,
    title: title,
    payload: JSON.stringify(payload)
  };
};
