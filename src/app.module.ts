import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DeliveryModule } from './delivery/delivery.module';
import { RequestsModule } from './requests/requests.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DeliveryModule,
    RequestsModule,
    DatabaseModule,
  ],
})
export class AppModule {}
