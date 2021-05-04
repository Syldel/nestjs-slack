<p align="center">
  <h3 align="center">
    nestjs-slack
  </h3>

  <p align="center">
    Send message to Slack
  </p>
</p>

## Installation

```bash
npm install https://github.com/Syldel/nestjs-slack --save
```

## Getting Started

The simplest way to use `nestjs-slack` is to use `SlackModule.forRootAsync`

```typescript
import { SlackModule } from 'nestjs-slack';

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import configuration from './configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    SlackModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        channel: config.get<string>('SLACK_CHANNEL_ID'),
        token: config.get<string>('SLACK_OAUTH_TOKEN'),
      }),
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class AppConfigModule {}
```

```typescript
await this.slackService.publishMessage('init');
```
