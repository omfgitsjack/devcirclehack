"use script";module.exports = function(title, url) {
  return {
    type: "web_url",
    url: url,
    title: title,
    webview_height_ratio: "full",
    messenger_extensions: true,
    fallback_url: "dev-circle-toronto-hackathon.myshopify.com"
  };
};
