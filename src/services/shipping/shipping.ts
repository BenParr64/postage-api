import { getPostcodeRegion } from "./region";
import { ShippingOption, ShippingRule } from "./shipping.types";
import ShippingRulesData from "./shippingrules.json";
import { isEmpty } from "lodash";

export const getShippingRule = (
  weight: number,
  price: number,
  postcode: string
) => {
  const region = getPostcodeRegion(postcode);
  return assignShippingRule(weight, price, region.region_id);
};

export const assignShippingRule = (
  weight: number,
  price: number,
  postcodeRegion: string
) => {
  const rules = ShippingRulesData as ShippingRule[];
  let options = [] as ShippingOption[];

  for (const rule of rules) {
    if (
      weight >= rule.weight_range[0] &&
      weight <= rule.weight_range[1] &&
      price >= rule.price_range[0] &&
      price <= rule.price_range[1] &&
      postcodeRegion == rule.postcode_region
    ) {
      options.push({
        cost: rule.cost,
        description: rule.description,
        service: rule.service,
      } as ShippingOption);
    }
  }

  if (!isEmpty(options)) {
    return options;
  }

  throw new Error(
    "No shipping rule found for the given weight, price, and postcode"
  );
};
