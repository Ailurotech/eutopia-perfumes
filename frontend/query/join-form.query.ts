export function joinFormQuery() {
  return `
    *[_type == "joinForm"][0] {
      title,
      description,
      fields[] {
        fieldType,
        fieldLabel,
        placeholder,
        required,
        options,
        layout,
        layoutGroup
      }
    }
  `
} 