export function productPageQuery(id: number) {
  return `
      *[_type == "product" && store.id == ${id}]{
            "image": store.previewImageUrl,
            "maxPrice": store.priceRange.maxVariantPrice,
            "title": store.title,
            "tag": store.tags,
            "productType": store.options[0].values[0],
            "inspiredBy": store.options[1].values[0],
            "description": store.descriptionHtml,
            "productId": store.id,
            "variantId": store.variants[0]->store.id,
            comments
      }
  `;
}

export function skuQuery(id: number) {
  return `
      *[_type == "productVariant" && store.productId == ${id}]{
        "sku": store.sku
      }
  `;
}

export function recommendedProductQuery(tag?: string) {
  return `
        *[_type == "product" && store.status == "active" && store.isDeleted == false ${tag ? `&& store.tags == "${tag}"` : ""}]{
            "title":store.title,
            "image":store.previewImageUrl,
            "price":store.priceRange.maxVariantPrice,
            "id":store.id
            }[0...10]
        `;
}

export function searchProductQuery(searchString: string) {
  return `
        *[_type == "product" && store.status == "active" && store.isDeleted == false && store.title match "${searchString}*"]{
            "title":store.title,
            "image":store.previewImageUrl,
            "price":store.priceRange.maxVariantPrice,
            "id":store.id
            }
        `;
}
