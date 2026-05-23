/**
 * Formats a number as Indian Rupees with Indian-style comma formatting.
 * e.g., 37500 → ₹37,500 | 100000 → ₹1,00,000
 */
export const formatINR = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};
