import { ModuleMetadata, Type } from "@nestjs/common/interfaces";

export interface SlackConfigOptions {
    /*
    accessKeyId: string;
    secretAccessKey: string;
    region?: string;
    sessionToken?: string;
    apiVersion?: string;
    maxSockets?: number;
    */
    channel: string;
    userName: string;
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