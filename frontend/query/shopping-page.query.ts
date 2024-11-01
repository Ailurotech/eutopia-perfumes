export function shoppingPageQuery(page?: string) {
  return `
  *[_type == "product" && store.status == "active" && store.isDeleted == false ${page ? `&& store.tags == "${page}"` : ""}]
    {
        "image":store.previewImageUrl,
        "maxPrice":store.priceRange.maxVariantPrice,
        "title":store.title,
        "tag":store.tags,
        "productType":store.options[0].values[0],
        "inspiredBy":store.options[1].values[0]
    }
    `;
}
