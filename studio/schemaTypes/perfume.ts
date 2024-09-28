import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'perfume',
  title: 'Perfume',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['for-her', 'for-him', 'neutral'],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'volumeOfMl',
      title: 'Volume of Ml',
      type: 'number',
    }),
    defineField({
      name: 'volumeOfOz',
      title: 'Volume of Oz',
      type: 'number',
    }),
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
      options: {
        list: ['women', 'men', 'neutral'],
        layout: 'dropdown',
      },
    }),
  ],
})
