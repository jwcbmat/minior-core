import { Module } from '@nestjs/common';
import { DeliveryController } from './delivery.controller';
import { DeliveryService } from './delivery.service';
import { BentoClientModule } from './bento-client/bento-client.module';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [BentoClientModule, DatabaseModule],
  controllers: [DeliveryController],
  providers: [DeliveryService],
})
export class DeliveryModule {}
