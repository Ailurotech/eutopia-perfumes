import {defineField, defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

export default defineType({
  name: 'storeLocation',
  title: 'Store Locations',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'locationName',
      title: 'Location Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        defineField({
          name: 'street',
          title: 'Street',
          type: 'string'
        }),
        defineField({
          name: 'suburb',
          title: 'Suburb',
          type: 'string'
        }),
        defineField({
          name: 'state',
          title: 'State',
          type: 'string'
        }),
        defineField({
          name: 'postcode',
          title: 'Postcode',
          type: 'string'
        })
      ]
    }),
    defineField({
      name: 'googleMapsUrl',
      title: 'Google Maps Embed URL',
      type: 'url',
      description: 'The embed URL from Google Maps (iframe src)'
    }),
    defineField({
      name: 'openingHours',
      title: 'Opening Hours',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'days', type: 'string', title: 'Days'},
          {name: 'hours', type: 'string', title: 'Hours'}
        ]
      }]
    })
  ]
}) 