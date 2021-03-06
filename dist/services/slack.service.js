"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlackService = void 0;
const common_1 = require("@nestjs/common");
const web_api_1 = require("@slack/web-api");
const common_2 = require("../common");
let SlackService = class SlackService extends web_api_1.WebClient {
    constructor(options) {
        super(options.token);
        this.options = options;
        if (!options.token) {
            console.warn('SlackService => Token is not defined!');
        }
    }
    publishMessage(text) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.chat.postMessage({
                    channel: this.options.channel,
                    text: text
                });
                return result;
            }
            catch (error) {
                console.error(error);
            }
        });
    }
};
SlackService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(common_2.SLACK_CONFIG_OPTIONS)),
    __metadata("design:paramtypes", [Object])
], SlackService);
exports.SlackService = SlackService;
//# sourceMappingURL=slack.service.js.map