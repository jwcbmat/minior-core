export interface DeliveryFeeRequest {
  from: { lat: number; lng: number };
  to: { lat: number; lng: number };
  merchantId: string;
  uuid: string;
  authHeader: string;
  userAgent: string;
}
