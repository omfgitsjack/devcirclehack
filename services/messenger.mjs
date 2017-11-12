import request from "request";
import config from "config";
import Welcome from "../actions/Welcome";

// Generate a page access token for your page from the App Dashboard
const FB_PAGE_ACCESS_TOKEN = process.env.FB_PAGE_ACCESS_TOKEN
  ? process.env.FB_PAGE_ACCESS_TOKEN
  : config.get("fb_pageAccessToken");

const HOST_URL = process.env.HOST_URL
  ? process.env.HOST_URL
  : config.get("host_url");

if (!(FB_PAGE_ACCESS_TOKEN && HOST_URL)) {
  throw new Error("Shopify creds aren't set");
}

/*
 * Call the Send API. The message data goes in the body. If successful, we'll 
 * get the message id in a response 
 *
 */
const callSendAPI = messageData => {
  request(
    {
      uri: "https://graph.facebook.com/v2.6/me/messages",
      qs: { access_token: FB_PAGE_ACCESS_TOKEN },
      method: "POST",
      json: messageData
    },
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        var recipientId = body.recipient_id;
        var messageId = body.message_id;

        if (messageId) {
          console.log(
            "[callSendAPI] Successfully sent message with id %s to recipient %s",
            messageId,
            recipientId
          );
        } else {
          console.log(
            "[callSendAPI] Successfully called Send API for recipient %s",
            recipientId
          );
        }
      } else {
        console.error(
          "[callSendAPI] Send API call failed",
          response.statusCode,
          response.statusMessage,
          body.error
        );
      }
    }
  );
};

/*
   * Send profile info. This will setup the bot with a greeting and a Get Started button
   */
const callSendProfile = () => {
  request(
    {
      uri: "https://graph.facebook.com/v2.6/me/messenger_profile",
      qs: { access_token: FB_PAGE_ACCESS_TOKEN },
      method: "POST",
      json: {
        greeting: [
          {
            locale: "default",
            text: `Hi there! I'm a bot to help you find the perfect lingerie for your girlfriend/wife. To get started, click the "Get Started" button or type "help".`
          }
        ],
        get_started: {
          payload: JSON.stringify({ action: Welcome.actionName })
        },
        whitelisted_domains: [HOST_URL]
      }
    },
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log("[callSendProfile]: ", body);
        var result = body.result;
        if (result === "success") {
          console.log("[callSendProfile] Successfully sent profile.");
        } else {
          console.error(
            "[callSendProfile] There was an error sending profile."
          );
        }
      } else {
        console.error(
          "[callSendProfile] Send profile call failed",
          response.statusCode,
          response.statusMessage,
          body.error
        );
      }
    }
  );
};

export default {
  callSendAPI,
  callSendProfile
};
