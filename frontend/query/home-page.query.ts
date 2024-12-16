const basePerfumeSectionQuery = `
"image": image.asset._ref,
description
`;

export function perfumeSectionQuery() {
  return `
  *[_type == "home"]{
  perfumeSection{
    men {
        ${basePerfumeSectionQuery}
    },
    women {
        ${basePerfumeSectionQuery}
    },
    neutral {
        ${basePerfumeSectionQuery}
    }
  }
}`;
}

export function videoSectionQuery() {
  return `
    *[_type == "videos"]{
      _id,
      title,
      "slug": slug.current,
      description,
      video
    }
  `;
}
