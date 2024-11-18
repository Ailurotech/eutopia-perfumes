export function shoppingPageSettingQuery() {
  return `
        *[_type == "pageSettings"]
            {
                size,
                perfumeType,
                inspiredBy
            }
        `;
}
