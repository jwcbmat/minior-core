import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { BentoClientService } from './bento-client.service';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://api.bento.ky/api/v1',
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  providers: [BentoClientService],
  exports: [BentoClientService],
})
export class BentoClientModule {}
