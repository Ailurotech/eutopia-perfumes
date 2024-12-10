import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageSettings',
  title: 'Page Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'inspiredBy',
      title: 'List of "Inspired By"',
      description: 'This field needs to be the same as “Designer" field in the Shopify store.',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) =>
        Rule.custom((value) => {
          if (!value) {
            return 'Inspired By is required!'
          }
          const lowerCaseValues = value?.map((v) => (typeof v === 'string' ? v.toLowerCase() : v))
          const uniqueValues = new Set(lowerCaseValues)
          if (uniqueValues.size !== lowerCaseValues?.length) {
            return 'Duplicate values are not allowed! Please check!'
          }
          return true
        }),
    }),
    defineField({
      name: 'perfumeType',
      title: 'List of "Perfume Type"',
      description: 'This field needs to be the same as “Type" field in the Shopify store.',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) =>
        Rule.custom((value) => {
          if (!value) {
            return 'Perfume Type is required!'
          }
          const lowerCaseValues = value?.map((v) => (typeof v === 'string' ? v.toLowerCase() : v))
          const uniqueValues = new Set(lowerCaseValues)
          if (uniqueValues.size !== lowerCaseValues?.length) {
            return 'Duplicate values are not allowed! Please check!'
          }
          return true
        }),
    }),

    defineField({
      name: 'size',
      title: 'List of "Size"',
      description:
        'This field needs to be the same as the size included in the "Title" field in the Shopify store.',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) =>
        Rule.custom((value) => {
          if (!value) {
            return 'Size is required!'
          }
          const lowerCaseValues = value?.map((v) => (typeof v === 'string' ? v.toLowerCase() : v))
          const uniqueValues = new Set(lowerCaseValues)
          if (uniqueValues.size !== lowerCaseValues?.length) {
            return 'Duplicate values are not allowed! Please check!'
          }
          return true
        }),
    }),
  ],
})
