import {
  CanActivate,
  ExecutionContext,
  Injectable,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class DeliveryGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const query = request.query;

    const requiredParams = [
      'fromLat',
      'fromLng',
      'toLat',
      'toLng',
      'merchantId',
      'uuid',
    ];
    const missing = requiredParams.filter((param) => !query[param]);

    if (missing.length > 0) {
      throw new BadRequestException(
        `Missing query parameters: ${missing.join(', ')}`,
      );
    }

    return true;
  }
}
