"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectSlack = void 0;
const common_1 = require("@nestjs/common");
const slack_constants_1 = require("./slack.constants");
function InjectSlack() {
    return common_1.Inject(slack_constants_1.SLACK_TOKEN);
}
exports.InjectSlack = InjectSlack;
//# sourceMappingURL=slack.decorator.js.map