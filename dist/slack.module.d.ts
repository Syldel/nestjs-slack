import { DynamicModule } from "@nestjs/common";
import { SlackConfigAsyncOptions, SlackConfigOptions } from "./interfaces";
export declare class SlackModule {
    static forRoot(options: SlackConfigOptions): DynamicModule;
    static forRootAsync(options: SlackConfigAsyncOptions): DynamicModule;
}
