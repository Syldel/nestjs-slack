import { Injectable, Inject } from '@nestjs/common';

import { WebClient } from '@slack/web-api';
import { SLACK_CONFIG_OPTIONS } from '../common';
import { SlackConfigOptions } from '../interfaces';

@Injectable()
export class SlackService extends WebClient {
    constructor(
        @Inject(SLACK_CONFIG_OPTIONS) private options: SlackConfigOptions
    ) {
        super(options.token);
    }

    // Post a message to a channel your app is in using ID and message text
    async publishMessage(text: string) {
        try {
            // Call the chat.postMessage method using the built-in WebClient
            const result = await this.chat.postMessage({
                // The token you used to initialize your app
                // token: "xoxb-your-token",
                channel: this.options.channel, // I finally use my user id here!
                text: text
                // You could also use a blocks[] array to send richer content
            });

            // Print result, which includes information about the message (like TS)
            // console.log(result);
            return result;
        }
        catch (error) {
            console.error(error);
        }
    }
}