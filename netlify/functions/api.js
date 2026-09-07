const serverless = require("serverless-http");
const generateConfig = require("../../generateConfig");
const { constructServer } = require("../../server");

let handler;

async function init() {
  await generateConfig();
  const app = await constructServer();
  return serverless(app);
}

exports.handler = async (event, context) => {
  if (!handler) {
    handler = await init();
  }
  return handler(event, context);
};
