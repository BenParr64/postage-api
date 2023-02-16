import { ShippingZone } from "./shipping.types";
import ShippingZones from "./shippingzones.json";

export const getPostcodeRegion = (postcode: string) => {
  const zones = ShippingZones as ShippingZone[];

  const region = zones.find((zone) =>
    zone.postcodes.some((p) => {
      const regex = new RegExp(`^${p.replace(/\*/g, ".*")}$`, "i").test(
        postcode
      );
      console.log("regex:", regex);
      console.log("postcode:", postcode);
      return regex;
    })
  );

  if (!region) {
    throw new Error(`Need to set up postcode region not found`);
  }

  return region;
};
