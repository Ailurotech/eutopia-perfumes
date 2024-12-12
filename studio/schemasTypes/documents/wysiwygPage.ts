import {DocumentIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'
import {validateSlug} from '../../utils/validateSlug'

export const wysiwygPageType = defineType({
  name: 'wysiwygPage',
  title: 'Content Pages',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'customCode',
      title: 'Custom Code',
    },
    {
      name: 'seo',
      title: 'SEO',
    }
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
      group: 'content'
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: validateSlug,
      group: 'content'
    }),
    defineField({
      name: 'customHtml',
      title: 'Custom HTML',
      type: 'text',
      group: 'customCode',
      description: 'Add custom HTML code here. Be careful with the syntax!'
    }),
    defineField({
      name: 'customCss',
      title: 'Custom CSS',
      type: 'text',
      group: 'customCode',
      description: 'Add custom CSS styles here. Will be scoped to this page only.'
    }),
    defineField({
      name: 'enableCustomCode',
      title: 'Enable Custom Code',
      type: 'boolean',
      group: 'customCode',
      description: 'Toggle to enable/disable custom HTML and CSS on this page',
      initialValue: false
    }),
    defineField({
      name: 'content',
      title: 'Page Content',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading 1', value: 'h1'},
            {title: 'Heading 2', value: 'h2'},
            {title: 'Heading 3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'}
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'}
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
        },
        {
          type: 'image',
          name: 'image',
          title: 'Image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for SEO and accessibility.',
              validation: Rule => Rule.required(),
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              description: 'Optional caption to display below the image'
            },
            {
              name: 'position',
              type: 'string',
              title: 'Position',
              options: {
                list: [
                  {title: 'Left', value: 'left'},
                  {title: 'Center', value: 'center'},
                  {title: 'Right', value: 'right'},
                  {title: 'Full Width', value: 'full'}
                ],
                layout: 'radio'
              },
              initialValue: 'center'
            },
            {
              name: 'size',
              type: 'string',
              title: 'Size',
              options: {
                list: [
                  {title: 'Small', value: 'small'},
                  {title: 'Medium', value: 'medium'},
                  {title: 'Large', value: 'large'}
                ],
                layout: 'radio'
              },
              initialValue: 'medium'
            }
          ]
        },
        {
          type: 'object',
          name: 'rawHtml',
          title: 'Raw HTML',
          fields: [
            {
              name: 'code',
              title: 'HTML Code',
              type: 'text',
              options: {
                language: 'html'
              }
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
              description: 'Optional description of what this code block does'
            }
          ],
          preview: {
            select: {
              description: 'description',
              code: 'code'
            },
            prepare({description, code}) {
              return {
                title: description || 'Raw HTML',
                subtitle: code ? `${code.slice(0, 50)}...` : 'No code added'
              }
            }
          }
        },
        {
          type: 'object',
          name: 'cssStyle',
          title: 'CSS Styles',
          fields: [
            {
              name: 'code',
              title: 'CSS Code',
              type: 'text',
              options: {
                language: 'css'
              }
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
              description: 'Optional description of what these styles do'
            }
          ],
          preview: {
            select: {
              description: 'description',
              code: 'code'
            },
            prepare({description, code}) {
              return {
                title: description || 'CSS Styles',
                subtitle: code ? `${code.slice(0, 50)}...` : 'No styles added'
              }
            }
          }
        },
        {
          type: 'object',
          name: 'accordion',
          title: 'Accordion',
          preview: {
            select: {
              title: 'heading'
            },
            prepare({title}) {
              return {
                title: title || 'Accordion',
                subtitle: 'Expandable content section'
              }
            }
          },
          fields: [
            defineField({
              name: 'heading',
              type: 'string',
              title: 'Heading',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'items',
              type: 'array',
              title: 'Accordion Items',
              of: [{
                type: 'object',
                name: 'item',
                fields: [
                  {
                    name: 'title',
                    type: 'string',
                    title: 'Title',
                    validation: Rule => Rule.required()
                  },
                  {
                    name: 'content',
                    type: 'array',
                    title: 'Content',
                    of: [{type: 'block'}]
                  }
                ]
              }]
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