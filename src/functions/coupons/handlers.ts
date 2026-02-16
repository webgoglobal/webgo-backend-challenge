import type { CallableRequest } from "firebase-functions/v2/https";
import { db } from "../../lib/firebase.js";
import { canCreateCoupon } from "../../lib/limits.js";

const couponsCollection = db.collection("coupons");
const sitesCollection = db.collection("sites");

/** Crear un nuevo cupón para una tienda. */
export const createCouponHandler = async (
  request: CallableRequest<unknown>,
): Promise<unknown> => {
  return { data: null, error: "Not implemented" };
};

/** Listar todos los cupones de una tienda. */
export const getCouponsHandler = async (
  request: CallableRequest<unknown>,
): Promise<unknown> => {
  return { data: null, error: "Not implemented" };
};

/** Editar un cupón existente. */
export const updateCouponHandler = async (
  request: CallableRequest<unknown>,
): Promise<unknown> => {
  return { data: null, error: "Not implemented" };
};

/** Eliminar un cupón. */
export const deleteCouponHandler = async (
  request: CallableRequest<unknown>,
): Promise<unknown> => {
  return { data: null, error: "Not implemented" };
};

/** Validar si un cupón puede aplicarse a un carrito. */
export const validateCouponHandler = async (
  request: CallableRequest<unknown>,
): Promise<unknown> => {
  return { data: null, error: "Not implemented" };
};

/** Aplicar un cupón a una orden. */
export const applyCouponHandler = async (
  request: CallableRequest<unknown>,
): Promise<unknown> => {
  return { data: null, error: "Not implemented" };
};
