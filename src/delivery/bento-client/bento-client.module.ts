import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { BentoClientService } from './bento-client.service';

@Module({
  imports: [HttpModule],
  providers: [BentoClientService],
  exports: [BentoClientService],
})
export class BentoClientModule {}
