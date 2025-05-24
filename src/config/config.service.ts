import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

@Injectable()
export class ConfigService {
  constructor(private readonly config: NestConfigService) {}

  get bentoApiUrl(): string {
    return this.config.get<string>('API_BENTO')!;
  }

  get bentoToken(): string {
    return this.config.get<string>('TOKEN')!;
  }
}
