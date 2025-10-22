import { toast } from "sonner";

/**
 * Safely handles API errors from RTK Query or Axios-style responses.
 * Supports type-safe extraction of error messages and fallback handling.
 */
export const handleApiError = (
  err: unknown,
  defaultMessage = "An unexpected error occurred"
) => {
  console.error("API Error:", err);

  if (typeof err === "object" && err !== null && "data" in err) {
    const errorData = (err as { data?: { message?: string } }).data;
    const message = errorData?.message || defaultMessage;

    toast.error(message);
    return message;
  }

  toast.error(defaultMessage);
  return defaultMessage;
};
