export const MAX_STOCK = 15;
export const LOW_STOCK_LIMIT = 4; // Low Stock shows when 4 or fewer are left

export const peso = (n: number): string =>
  "₱" +
  n.toLocaleString("en-PH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

export const stars = (rating: number): string => {
  const filled = Math.max(0, Math.min(5, Math.round(rating)));
  return "★".repeat(filled) + "☆".repeat(5 - filled);
};

export const isLowStock = (quantity: number): boolean =>
  quantity > 0 && quantity <= LOW_STOCK_LIMIT;