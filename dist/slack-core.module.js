"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
var SlackCoreModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlackCoreModule = void 0;
const common_1 = require("@nestjs/common");
const providers_1 = require("./providers");
const slack_service_1 = require("./services/slack.service");
const common_2 = require("./common");
let SlackCoreModule = SlackCoreModule_1 = class SlackCoreModule {
    static forRoot(options) {
        const provider = providers_1.createSlackProviders(options);
        return {
            exports: [provider],
            module: SlackCoreModule_1,
            providers: [provider]
        };
    }
    static forRootAsync(options) {
        const provider = {
            inject: [common_2.SLACK_CONFIG_OPTIONS],
            provide: common_2.SLACK_TOKEN,
            useFactory: (options) => common_2.createSlackClient(options),
        };
        return {
            exports: [provider, slack_service_1.SlackService],
            imports: options.imports,
            module: SlackCoreModule_1,
            providers: [
                ...this.createAsyncProviders(options),
                provider,
                slack_service_1.SlackService
            ],
        };
    }
    static createAsyncProviders(options) {
        if (options.useExisting || options.useFactory) {
            return [this.createAsyncOptionsProvider(options)];
        }
        const useClass = options.useClass;
        return [
            this.createAsyncOptionsProvider(options),
            {
                provide: useClass,
                useClass,
            },
        ];
    }
    static createAsyncOptionsProvider(options) {
        if (options.useFactory) {
            return {
                inject: options.inject || [],
                provide: common_2.SLACK_CONFIG_OPTIONS,
                useFactory: options.useFactory,
            };
        }
        const inject = [
            (options.useClass || options.useExisting),
        ];
        return {
            provide: common_2.SLACK_CONFIG_OPTIONS,
            useFactory: (optionsFactory) => __awaiter(this, void 0, void 0, function* () { return yield optionsFactory.createSlackConfigOptions(); }),
            inject,
        };
    }
};
SlackCoreModule = SlackCoreModule_1 = __decorate([
    common_1.Global(),
    common_1.Module({})
], SlackCoreModule);
exports.SlackCoreModule = SlackCoreModule;
//# sourceMappingURL=slack-core.module.js.map