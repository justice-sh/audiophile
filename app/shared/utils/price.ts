/**
 * Formats a price into a human-readable string with currency symbol, commas, and proper decimal places.
 *
 * @param amount - The price amount (number or string).
 * @param currency - Currency code (e.g., 'USD', 'EUR'). Defaults to 'USD'.
 * @param locale - Locale code (e.g., 'en-US', 'de-DE'). Defaults to 'en-US'.
 * @returns Formatted price string (e.g., "$1,234.56" or "1.234,56 €").
 */
export function formatPrice(amount: number | string, currency: string = "USD", locale: string = "en-US"): string {
  const numericAmount = typeof amount === "string" ? parseFloat(amount) : amount

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numericAmount)
}
