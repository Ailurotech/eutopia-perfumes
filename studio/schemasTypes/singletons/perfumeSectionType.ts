import {defineField, Rule} from 'sanity'
const perfumeSectionFields = [
  {
    name: 'description',
    title: 'Description',
    type: 'string',
    description: 'Description of the Perfume Section',
    validation: (Rule: Rule) => Rule.required(),
  },
  {
    name: 'image',
    title: 'Image',
    type: 'image',
    options: {
      hotspot: true,
    },
  },
]

export const perfumeSectionType = defineField({
  name: 'perfumeSection',
  title: 'Perfume Section',
  type: 'object',
  fields: [
    {
      name: 'women',
      title: 'Women Perfume Section',
      type: 'object',
      fields: perfumeSectionFields,
    },
    {
      name: 'men',
      title: 'Men Perfume Section',
      type: 'object',
      fields: perfumeSectionFields,
    },
    {
      name: 'neutral',
      title: 'Neutral Perfume Section',
      type: 'object',
      fields: perfumeSectionFields,
    },
  ],
})
