import {defineType, defineField} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

export default defineType({
  name: 'aboutUs',
  title: 'About Us',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'introduction',
      title: 'Introduction',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    }),
    defineField({
      name: 'mission',
      title: 'Our Mission',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'values',
      title: 'Our Values',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({name: 'title', type: 'string'}),
          defineField({name: 'description', type: 'text'})
        ]
      }]
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo'
    })
  ]
}) 