import { type CallableOptions, onCall } from "firebase-functions/v2/https";
import { FUNCTION_REGION } from "../../lib/config.js";
import {
  applyCouponHandler,
  createCouponHandler,
  deleteCouponHandler,
  getCouponsHandler,
  updateCouponHandler,
  validateCouponHandler,
} from "./handlers.js";

const functionConfig: CallableOptions = {
  region: FUNCTION_REGION,
  memory: "256MiB",
  invoker: "public",
  cors: true,
};

export const createCoupon = onCall(functionConfig, createCouponHandler);
export const getCoupons = onCall(functionConfig, getCouponsHandler);
export const updateCoupon = onCall(functionConfig, updateCouponHandler);
export const deleteCoupon = onCall(functionConfig, deleteCouponHandler);
export const validateCoupon = onCall(functionConfig, validateCouponHandler);
export const applyCoupon = onCall(functionConfig, applyCouponHandler);
