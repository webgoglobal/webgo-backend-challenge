/**
 * WebGo Backend Challenge — Entry Point
 *
 * Re-exports all Cloud Functions.
 * Firebase loads this file to discover your functions.
 */

export {
  createCoupon,
  getCoupons,
  updateCoupon,
  deleteCoupon,
  validateCoupon,
  applyCoupon,
} from "./functions/coupons/index.js";
