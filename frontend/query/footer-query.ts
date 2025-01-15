export function footerQuery() {
  return `
      *[_type == "footer"] {
        title,
        description,
        image
      }
    `;
}
