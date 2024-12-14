import { defineField, defineType } from 'sanity'

export const joinFormSchema = defineType({
  name: 'joinForm',
  title: 'Join Form',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Form Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Form Description',
      type: 'text',
    }),
    defineField({
      name: 'fields',
      title: 'Form Fields',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'fieldType',
              title: 'Field Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Single Line Text', value: 'text' },
                  { title: 'Multi Line Text', value: 'textarea' },
                  { title: 'Email', value: 'email' },
                  { title: 'Phone', value: 'tel' },
                  { title: 'Multiple Choice', value: 'multiSelect' },
                  { title: 'Single Choice', value: 'radio' },
                  { title: 'Checkbox', value: 'checkbox' },
                  { title: 'Text Area', value: 'textarea' },
                ],
              },
            }),
            defineField({
              name: 'fieldLabel',
              title: 'Field Label',
              type: 'string',
            }),
            defineField({
              name: 'placeholder',
              title: 'Placeholder Text',
              type: 'string',
            }),
            defineField({
              name: 'required',
              title: 'Required Field',
              type: 'boolean',
            }),
            defineField({
              name: 'options',
              title: 'Options',
              type: 'array',
              of: [{ type: 'string' }],
              hidden: ({ parent }) => 
                !['multiSelect', 'radio'].includes(parent?.fieldType),
            }),
            defineField({
              name: 'layout',
              title: 'Field Layout',
              type: 'string',
              options: {
                list: [
                  { title: 'Full Width', value: 'full' },
                  { title: 'Half Width', value: 'half' },
                ],
              },
              initialValue: 'full',
            }),
            defineField({
              name: 'layoutGroup',
              title: 'Layout Group ID',
              type: 'string',
              description: 'Fields with the same group ID will be placed on the same line',
              hidden: ({ parent }) => parent?.layout !== 'half',
            }),
          ],
        },
      ],
    }),
  ],
}) 