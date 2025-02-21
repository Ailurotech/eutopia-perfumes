export const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

export const getIdFromSlug = async (slug: string): Promise<number | null> => {
  // This function will be implemented to fetch product ID from slug
  return null;
};
