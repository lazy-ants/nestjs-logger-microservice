import { Controller, Logger } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';

import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly logger: Logger = new Logger('AppController');

  constructor(private readonly appService: AppService) {
    this.logger.log('AppController initialized');
  }

  @MessagePattern('log-item')
  async logItem(@Payload() item: any, @Ctx() context: RmqContext) {
    try {
      const channel = context.getChannelRef();
      const orginalMessage = context.getMessage();

      const logItemData = await this.appService.logItemHandler(item);

      channel.ack(orginalMessage);

      return Promise.resolve(logItemData);
    } catch (e) {
      console.error(e);

      return Promise.reject({});
    }
  }
}
