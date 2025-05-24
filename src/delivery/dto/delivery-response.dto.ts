export class DeliveryResponseDto {
  originalFee: number;
  newFee: number;
  deliveryTime: number;
  distanceMeters: number;
  coordinates: {
    from: { lat: number; lng: number };
    to: { lat: number; lng: number };
  };
  uuid: string;
  merchantId: string;
  userAgent: string;
  message: string | null;
}
