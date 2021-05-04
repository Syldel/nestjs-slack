import { Global, Module, DynamicModule, Provider, Type } from "@nestjs/common";
import { createSlackProviders } from "./providers";
import { SlackService } from "./services/slack.service";
import { SlackConfigAsyncOptions, SlackConfigOptions, SlackConfigOptionsFactory } from "./interfaces";
import { createSlackClient, SLACK_CONFIG_OPTIONS, SLACK_TOKEN } from "./common";


@Global()
@Module({})
export class SlackCoreModule {

  public static forRoot(options: SlackConfigOptions): DynamicModule {
    const provider = createSlackProviders(options);

    return {
      exports: [provider],
      module: SlackCoreModule,
      providers: [provider]
    };
  }

  public static forRootAsync(options: SlackConfigAsyncOptions): DynamicModule {
    const provider: Provider = {
      inject: [SLACK_CONFIG_OPTIONS],
      provide: SLACK_TOKEN,
      useFactory: (options: SlackConfigOptions) => createSlackClient(options),
    };

    return {
      exports: [provider, SlackService],
      imports: options.imports,
      module: SlackCoreModule,
      providers: [
        ...this.createAsyncProviders(options),
        provider,
        SlackService
      ],
    };
  }

  private static createAsyncProviders(
    options: SlackConfigAsyncOptions,
  ): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createAsyncOptionsProvider(options)];
    }
    const useClass = options.useClass as Type<SlackConfigOptionsFactory>;
    return [
      this.createAsyncOptionsProvider(options),
      {
        provide: useClass,
        useClass,
      },
    ];
  }

  private static createAsyncOptionsProvider(
    options: SlackConfigAsyncOptions,
  ): Provider {
    if (options.useFactory) {
      return {
        inject: options.inject || [],
        provide: SLACK_CONFIG_OPTIONS,
        useFactory: options.useFactory,
      };
    }
    const inject = [
      (options.useClass || options.useExisting) as Type<SlackConfigOptionsFactory>,
    ];
    return {
      provide: SLACK_CONFIG_OPTIONS,
      useFactory: async (optionsFactory: SlackConfigOptionsFactory) =>
        await optionsFactory.createSlackConfigOptions(),
      inject,
    };
  }
}