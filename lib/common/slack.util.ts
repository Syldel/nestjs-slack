import { SlackConfigOptions } from "../interfaces/slack-options.interface";

import { WebClient } from '@slack/web-api';

export function createSlackClient(options: SlackConfigOptions): WebClient {

    // An access token (from your Slack app or custom integration - xoxp, xoxb)
    // const token = process.env.SLACK_TOKEN;

    return new WebClient(options.token);
}
