import { defineField, defineType } from 'sanity'

export const formSubmissionSchema = defineType({
  name: 'formSubmission',
  title: 'Form Submissions',
  type: 'document',
  fields: [
    defineField({
      name: 'formType',
      title: 'Form Type',
      type: 'string',
      options: {
        list: [
          { title: 'Contact Form', value: 'contact' },
          { title: 'Join Form', value: 'join' },
          { title: 'Newsletter Form', value: 'newsletter' },
        ],
      },
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
    }),
    defineField({
      name: 'formData',
      title: 'Form Data',
      type: 'text'
    }),
  ],
}) 