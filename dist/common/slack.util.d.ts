import { SlackConfigOptions } from "../interfaces/slack-options.interface";
import { WebClient } from '@slack/web-api';
export declare function createSlackClient(options: SlackConfigOptions): WebClient;
