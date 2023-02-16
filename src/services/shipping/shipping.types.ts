export interface ShippingRule {
  weight_range: [number, number];
  price_range: [number, number];
  postcode_region: string;
  service: string;
  description: string;
  cost: number;
}

export interface ShippingZone {
  name: string;
  region_id: string;
  postcodes: string[];
}

export interface ShippingOption {
  service: string;
  description: string;
  cost: number;
}
