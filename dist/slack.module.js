"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlackModule = void 0;
const slack_core_module_1 = require("./slack-core.module");
class SlackModule {
    static forRoot(options) {
        return {
            module: SlackModule,
            imports: [slack_core_module_1.SlackCoreModule.forRoot(options)],
        };
    }
    static forRootAsync(options) {
        return {
            module: SlackModule,
            imports: [slack_core_module_1.SlackCoreModule.forRootAsync(options)],
        };
    }
}
exports.SlackModule = SlackModule;
//# sourceMappingURL=slack.module.js.map