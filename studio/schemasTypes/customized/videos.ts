import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'videos',
  title: 'Videos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'description',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'videoFile',
      title: 'Video File',
      type: 'file',
      options: {
        accept: 'video/mp4,video/x-m4v,video/*',
      },
    }),
  ],
})
