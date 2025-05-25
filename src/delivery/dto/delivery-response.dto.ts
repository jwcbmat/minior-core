import { ApiProperty } from '@nestjs/swagger';

class CoordinatesDto {
  @ApiProperty({ example: 19.3331008 })
  lat: number;

  @ApiProperty({ example: -81.3801101 })
  lng: number;
}

class CoordinatesWrapperDto {
  @ApiProperty({ type: CoordinatesDto })
  from: CoordinatesDto;

  @ApiProperty({ type: CoordinatesDto })
  to: CoordinatesDto;
}

export class DeliveryResponseDto {
  @ApiProperty({ example: 8.13 })
  originalFee: number;

  @ApiProperty({ example: 9.19 })
  newFee: number;

  @ApiProperty({ example: 900 })
  deliveryTime: number;

  @ApiProperty({ example: 6651.610000000001 })
  distanceMeters: number;

  @ApiProperty({ type: CoordinatesWrapperDto })
  coordinates: CoordinatesWrapperDto;

  @ApiProperty()
  uuid: string;

  @ApiProperty()
  merchantId: string;

  @ApiProperty()
  userAgent: string;

  @ApiProperty({ nullable: true, example: 'happy message :)' })
  message: string | null;
}
