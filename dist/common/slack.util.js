"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSlackClient = void 0;
const { WebClient } = require('@slack/web-api');
function createSlackClient(options) {
    console.log('createSlackClient options:', options);
    const token = process.env.SLACK_TOKEN;
    const client = new WebClient(token);
    return client;
}
exports.createSlackClient = createSlackClient;
//# sourceMappingURL=slack.util.js.map