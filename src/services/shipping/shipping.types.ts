export interface ShippingRule {
  weight_range: [number, number];
  price_range: [number, number];
  postcode_region: string;
  service: string;
  cost: number;
}

export interface ShippingRuleJson {
  rules: ShippingRule[];
}

export interface ShippingRules {
  [index: string]: ShippingRule[];
}
