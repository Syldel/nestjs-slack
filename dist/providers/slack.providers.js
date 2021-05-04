"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSlackProviders = void 0;
const common_1 = require("../common");
function createSlackProviders(options) {
    return {
        provide: common_1.SLACK_TOKEN,
        useValue: common_1.createSlackClient(options)
    };
}
exports.createSlackProviders = createSlackProviders;
//# sourceMappingURL=slack.providers.js.map