// ============================================================================
// FunctionResponse — Patrón de respuesta estándar
// ============================================================================
// Todas las Cloud Functions deben retornar este tipo.
// `data` contiene el resultado exitoso, `error` contiene el mensaje de error.
// Nunca ambos al mismo tiempo.

export type FunctionResponse<T, E = Record<string, unknown>> = {
  data: T | null;
  error: string | null;
  errorCode?: string;
  errorDetails?: E;
};

export type Optional<T> = T | null | undefined;
