import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'floatingBanner',
  title: 'Floating Banner',
  type: 'document',
  fields: [
    defineField({
      name: 'textColor',
      title: 'Text Color',
      type: 'string',
      description: 'Enter a hex color code (e.g., #ffffff for white)',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      description: 'Enter a hex color code (e.g., #000000 for black)',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Upload an icon for the banner',
    }),
    defineField({
      name: 'messages',
      title: 'Messages',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Add multiple messages to scroll in the floating banner.',
    }),
  ],
  preview: {
    select: {
      title: 'messages',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: 'Floating Banner',
        subtitle: title ? title.join(' | ') : 'No messages set',
      }
    },
  },
})
