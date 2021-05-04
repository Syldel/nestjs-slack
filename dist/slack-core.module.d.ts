import { DynamicModule } from "@nestjs/common";
import { SlackConfigAsyncOptions, SlackConfigOptions } from "./interfaces";
export declare class SlackCoreModule {
    static forRoot(options: SlackConfigOptions): DynamicModule;
    static forRootAsync(options: SlackConfigAsyncOptions): DynamicModule;
    private static createAsyncProviders;
    private static createAsyncOptionsProvider;
}
