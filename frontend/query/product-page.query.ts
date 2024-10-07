export function productPageQuery(slug: string) {
  return `
      *[_type == "perfume" && slug.current == "${slug}"]{
            volumeOfMl,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            description,
            volumeOfOz,
            price,
            category,
            tag,
            stars
            }
        `;
}

export function recommendedProductQuery(slug: string, category: string) {
  return `
        *[_type == "perfume" && slug.current != "${slug}" && category == "${category}"]{
            name,
            "image": image.asset -> url,
            price
            }[0...10]
        `;
}
