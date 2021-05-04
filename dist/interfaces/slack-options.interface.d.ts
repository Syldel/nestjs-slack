import { ModuleMetadata, Type } from "@nestjs/common/interfaces";
export interface SlackConfigOptions {
    channel: string;
    token: string;
}
export interface SlackConfigOptionsFactory {
    createSlackConfigOptions(): Promise<SlackConfigOptions> | SlackConfigOptions;
}
export interface SlackConfigAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
    inject?: any[];
    useClass?: Type<SlackConfigOptionsFactory>;
    useExisting?: Type<SlackConfigOptionsFactory>;
    useFactory?: (...args: any[]) => Promise<SlackConfigOptions> | SlackConfigOptions;
}
export interface ISlackModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
    useFactory: (...args: any[]) => Promise<SlackConfigOptions> | SlackConfigOptions;
    inject?: any[];
}
