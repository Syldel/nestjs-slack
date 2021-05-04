import { DynamicModule } from "@nestjs/common";
import { SlackConfigAsyncOptions, SlackConfigOptions } from "./interfaces";
import { SlackCoreModule } from './slack-core.module';

export class SlackModule {
    public static forRoot(options: SlackConfigOptions): DynamicModule {
        return {
            module: SlackModule,
            imports: [SlackCoreModule.forRoot(options)],
        };
    }

    public static forRootAsync(options: SlackConfigAsyncOptions): DynamicModule {
        return {
            module: SlackModule,
            imports: [SlackCoreModule.forRootAsync(options)],
        };
    }
}