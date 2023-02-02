import { ShippingRule, ShippingRuleJson } from "./shipping.types";
import ShippingRulesData from "./shippingrules.json";

export const getShippingRule = (
  weight: number,
  price: number,
  postcode: string
) => {
  const assignShippingRule = (
    weight: number,
    price: number,
    postcode: string,
    rules: ShippingRule[]
  ) => {
    for (const rule of rules) {
      if (
        weight >= rule.weight_range[0] &&
        weight <= rule.weight_range[1] &&
        price >= rule.price_range[0] &&
        price <= rule.price_range[1] &&
        postcode.startsWith(rule.postcode_region)
      ) {
        return { service: rule.service, cost: rule.cost };
      }
    }
    throw new Error(
      "No shipping rule found for the given weight, price, and postcode"
    );
  };

  const data = ShippingRulesData as ShippingRuleJson;
  return assignShippingRule(weight, price, postcode, data.rules);
};
