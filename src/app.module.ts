import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeliveriesController } from './deliveries/deliveries.controller';
import { DeliveriesModule } from './deliveries/deliveries.module';
import { ApiController } from './api/api.controller';
import { ApiService } from './api/api.service';
import { ApiModule } from './api/api.module';

@Module({
  imports: [ConfigModule.forRoot(), DeliveriesModule, ApiModule],
  controllers: [AppController, DeliveriesController, ApiController],
  providers: [AppService, ApiService],
})
export class AppModule {}
