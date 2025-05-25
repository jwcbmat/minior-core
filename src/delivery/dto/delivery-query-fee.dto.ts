import { IsLatitude, IsLongitude, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class DeliveryQueryFeeDto {
  @ApiProperty({
    example: 19.3331008,
    description: 'Latitude of the origin location',
  })
  @Type(() => Number)
  @IsLatitude()
  fromLat: number;

  @ApiProperty({
    example: -81.3801101,
    description: 'Longitude of the origin location',
  })
  @Type(() => Number)
  @IsLongitude()
  fromLng: number;

  @ApiProperty({
    example: 19.280354483797733,
    description: 'Latitude of the destination location',
  })
  @Type(() => Number)
  @IsLatitude()
  toLat: number;

  @ApiProperty({
    example: -81.37386862188578,
    description: 'Longitude of the destination location',
  })
  @Type(() => Number)
  @IsLongitude()
  toLng: number;

  @ApiProperty({
    example: 'merchant-123',
    description: 'Unique identifier for the merchant',
  })
  @IsString()
  merchantId: string;

  @ApiProperty({
    example: 'uuid-1234',
    description: 'UUID for tracking the request',
  })
  @IsString()
  uuid: string;
}
