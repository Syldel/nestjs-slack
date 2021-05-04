import { SlackConfigOptions } from "../interfaces";
import { SLACK_TOKEN, createSlackClient } from "../common";
import { Provider } from "@nestjs/common";

export function createSlackProviders(options: SlackConfigOptions): Provider {
    return {
        provide: SLACK_TOKEN,
        useValue: createSlackClient(options)
    };
}