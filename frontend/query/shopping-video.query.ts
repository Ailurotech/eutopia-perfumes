export function shoppingVideoQuery(slug: string) {
  return `
        *[_type == "videos" && slug.current == "${slug}"]{
          title,
          description,
          "video": videoFile.asset->url
        }
        `;
}
