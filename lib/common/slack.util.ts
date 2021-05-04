import { SlackConfigOptions } from "../interfaces/slack-options.interface";

const { WebClient } = require('@slack/web-api');

export function createSlackClient(options: SlackConfigOptions): any {

    console.log('createSlackClient options:', options)

    // An access token (from your Slack app or custom integration - xoxp, xoxb)
    const token = process.env.SLACK_TOKEN;

    const client = new WebClient(token);
    return client;
}
