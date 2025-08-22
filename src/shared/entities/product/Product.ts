export type ProductFormats = 'digital'
export type ProductDeliveryTime = 'imediato'

export type Product = {
  imageUrl: string;
  id: number;
  name: string;
  originalPrice: number;
  currentPrice: number;
  producer: string;
  format: ProductFormats;
  deliveryTime: ProductDeliveryTime;
};
