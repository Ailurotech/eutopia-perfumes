import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'notification',
  title: 'Notification',
  type: 'document',
  fields: [
    defineField({
      name: 'notificationEmail',
      title: 'Notification Email',
      type: 'string',
      description: 'The email where staff will receive contact notifications.',
      validation: (Rule) => Rule.email().required(),
    }),
    defineField({
      name: 'autoReplyTemplate',
      title: 'Auto-Reply Template',
      type: 'text',
      description: 'Customize the message customers receive after contacting.',
      initialValue: `Thanks for contacting us! We'll reach out soon!\n\nCo. Eutopia`,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image',
    },
  },
})
