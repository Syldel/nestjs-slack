import { Injectable, Inject } from '@nestjs/common';
import { SLACK_CONFIG_OPTIONS } from '../common';
import { SlackConfigOptions } from '../interfaces';

@Injectable()
export class SlackService {
    constructor(
        @Inject(SLACK_CONFIG_OPTIONS) private options: SlackConfigOptions
    ) {
        console.log('SlackService::constructor', options);
        // super(options);
    }
}