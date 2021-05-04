"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSlackClient = void 0;
const web_api_1 = require("@slack/web-api");
function createSlackClient(options) {
    return new web_api_1.WebClient(options.token);
}
exports.createSlackClient = createSlackClient;
//# sourceMappingURL=slack.util.js.map