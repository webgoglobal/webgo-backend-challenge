// ============================================================================
// Límites por plan — Helper listo para usar
// ============================================================================
// No necesitas modificar este archivo. Usa `canCreateCoupon()` en tus handlers.

import { db } from "./firebase.js";

export type PlanId = "free" | "servicio" | "tienda";

const COUPON_LIMITS: Record<PlanId, number> = {
  free: 3,
  servicio: 10,
  tienda: -1, // ilimitado
};

/**
 * Obtiene el plan de un usuario desde Firestore.
 * Si el usuario no existe, retorna "free" por defecto.
 */
export async function getUserPlan(userId: string): Promise<PlanId> {
  const userDoc = await db.collection("users").doc(userId).get();
  if (!userDoc.exists) return "free";
  return (userDoc.data()?.plan as PlanId) || "free";
}

/**
 * Retorna el límite de cupones para un plan.
 * -1 = ilimitado.
 */
export async function getCouponLimit(userId: string): Promise<number> {
  const plan = await getUserPlan(userId);
  return COUPON_LIMITS[plan];
}

/**
 * Cuenta los cupones actuales de un sitio.
 */
export async function getCurrentCouponCount(siteId: string): Promise<number> {
  const snapshot = await db
    .collection("coupons")
    .where("siteId", "==", siteId)
    .count()
    .get();
  return snapshot.data().count;
}

/**
 * Verifica si el usuario puede crear un cupón más.
 */
export async function canCreateCoupon(
  userId: string,
  siteId: string,
): Promise<{ allowed: boolean; current: number; limit: number }> {
  const limit = await getCouponLimit(userId);
  if (limit === -1) {
    return { allowed: true, current: 0, limit: -1 };
  }
  const current = await getCurrentCouponCount(siteId);
  return { allowed: current < limit, current, limit };
}
