import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'floatingBannerMsgs',
  title: 'Floating Banner Messages',
  type: 'document',
  fields: [
    defineField({
      name: 'messages',
      title: 'Messages',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Add messages to scroll in the floating banner.',
    }),
  ],
  preview: {
    select: {
      title: 'messages',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: 'Floating Banner Messages',
        subtitle: title ? title.join(' | ') : 'No messages set',
      }
    },
  },
})
