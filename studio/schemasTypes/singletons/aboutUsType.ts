import {defineField, defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons'
import {GROUPS} from '../../constants'

export default defineType({
  name: 'aboutUs',
  title: 'About Us',
  type: 'document',
  icon: DocumentIcon,
  groups: GROUPS,
  fields: [
    // Hero Section
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      group: 'editorial',
      fields: [
        defineField({
          name: 'title',
          title: 'Page Title',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'text',
          rows: 2
        }),
        defineField({
          name: 'heroImage',
          title: 'Hero Image',
          type: 'image',
          options: {
            hotspot: true
          }
        }),
        defineField({
          name: 'imagePosition',
          title: 'Image Position',
          type: 'string',
          options: {
            list: [
              {title: 'Left', value: 'left'},
              {title: 'Right', value: 'right'}
            ],
            layout: 'radio'
          },
          initialValue: 'right'
        })
      ]
    }),
    // Content Sections
    defineField({
      name: 'sections',
      title: 'Content Sections',
      type: 'array',
      group: 'editorial',
      of: [
        {
          type: 'object',
          name: 'contentSection',
          title: 'Content Section',
          preview: {
            select: {
              title: 'heading',
              media: 'image'
            },
            prepare({title, media}) {
              return {
                title: title || 'Content Section',
                media: media || DocumentIcon
              }
            }
          },
          fields: [
            defineField({
              name: 'heading',
              title: 'Section Heading',
              type: 'string'
            }),
            defineField({
              name: 'layout',
              title: 'Layout',
              type: 'string',
              options: {
                list: [
                  {title: 'Image Left', value: 'imageLeft'},
                  {title: 'Image Right', value: 'imageRight'},
                  {title: 'Full Width Content', value: 'fullWidth'}
                ],
                layout: 'radio'
              },
              initialValue: 'imageLeft'
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              hidden: ({parent}) => parent?.layout === 'fullWidth',
              options: {
                hotspot: true
              }
            }),
            defineField({
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [
                {
                  type: 'block',
                  styles: [
                    {title: 'Normal', value: 'normal'},
                    {title: 'H2', value: 'h2'},
                    {title: 'H3', value: 'h3'},
                    {title: 'H4', value: 'h4'},
                    {title: 'Quote', value: 'blockquote'}
                  ],
                  lists: [
                    {title: 'Bullet', value: 'bullet'},
                    {title: 'Number', value: 'number'}
                  ],
                  marks: {
                    decorators: [
                      {title: 'Strong', value: 'strong'},
                      {title: 'Emphasis', value: 'em'},
                      {title: 'Underline', value: 'underline'}
                    ],
                    annotations: [
                      {
                        name: 'link',
                        type: 'object',
                        title: 'Link',
                        fields: [
                          {
                            name: 'href',
                            type: 'url',
                            title: 'URL'
                          }
                        ]
                      }
                    ]
                  }
                }
              ]
            })
          ]
        }
      ]
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo'
    })
  ]
}) 