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
      name: 'video',
      title: 'Video URL',
      type: 'url',
      description: 'Enter the URL of the video (e.g., from a CDN or hosting service)',
    }),
  ],
})
