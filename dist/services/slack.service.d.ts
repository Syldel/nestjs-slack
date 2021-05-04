import { WebClient } from '@slack/web-api';
import { SlackConfigOptions } from '../interfaces';
export declare class SlackService extends WebClient {
    private options;
    constructor(options: SlackConfigOptions);
    publishMessage(text: string): Promise<import("@slack/web-api").WebAPICallResult | undefined>;
}
