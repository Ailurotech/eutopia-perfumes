import {defineField} from 'sanity'

export const customCommentType = defineField({
  name: 'customerComments',
  title: 'Customer Comments',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'comment',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'createdAt',
      type: 'datetime',
    }),
    defineField({
      name: 'starRating',
      type: 'number',
      title: 'Star Rating',
      validation: (Rule) =>
        Rule.custom((value) => {
          if (value === undefined) return true
          if (value > 0 && value <= 5 && value % 1 === 0) {
            return true
          }
          return 'Star rating must be a whole number between 0 and 5'
        }),
    }),
    defineField({
      name: 'commenter',
      type: 'string',
      title: 'Commenter Name',
      initialValue: 'untitled',
    }),
    defineField({
      name: 'commentFrom',
      type: 'string',
      title: 'Comment From',
      initialValue: 'undiscovered',
    }),
    defineField({
      name: 'isVerified',
      type: 'boolean',
      title: 'Verified or Not',
    }),
    defineField({
      name: 'reviewedAt',
      type: 'string',
      title: 'Reviewed At',
    }),
  ],
})
