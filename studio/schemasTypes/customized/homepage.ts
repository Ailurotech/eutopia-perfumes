import { defineType } from 'sanity';
const perfumeSectionFields = [
  {
    name: 'sectionTitle',
    title: 'Section Title',
    type: 'string',
    description: 'Title of the Perfume Section',
    validation: Rule => Rule.required().min(1).max(50),
  },
  {
    name: 'subtitle',
    title: 'Subtitle',
    type: 'string',
    description: 'Subtitle of the Perfume Section',
    validation: Rule => Rule.required(),
  },
  {
    name: 'image',
    title: 'Image',
    type: 'image',
    options: {
      hotspot: true,
    },
  },
  {
    name: 'linkText',
    title: 'Link Text',
    type: 'string',
    description: 'Text to display for the link',
    validation: Rule => Rule.required().min(1).max(20),
  },
  {
    name: 'linkUrl',
    title: 'Link URL',
    type: 'url',
    description: 'Link to Shop',
    validation: Rule => Rule.required().uri({
      allowRelative: true,
    }),
  },
];

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  groups: [
    { name: 'topSellersGroup', title: 'Top Sellers Section' },
    { name: 'newArrivalsGroup', title: 'New Arrivals Section' },
    { name: 'perfumeGroup', title: 'Perfume Sections' },
    { name: 'discoverGroup', title: 'Discover Section' },
  ],
  fields: [
    {
      name: 'topSellersSection',
      title: 'Top Sellers Section',
      type: 'object',
      group: 'topSellersGroup',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          description: 'Top Sellers Section Title',
          validation: Rule => Rule.required(),
        },
        {
          name: 'products',
          title: 'Products',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'perfume' }] }],
        },
      ],
    },
    {
      name: 'newArrivalsSection',
      title: 'New Arrivals Section',
      type: 'object',
      group: 'newArrivalsGroup',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          description: 'New Arrivals Section Title',
          validation: Rule => Rule.required(),
        },
        {
          name: 'products',
          title: 'Products',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'perfume' }] }],
        },
      ],
    },
    {
      name: 'womenPerfumeSection',
      title: 'Women Perfume Section',
      type: 'object',
      group: 'perfumeGroup',
      fields: perfumeSectionFields,
    },
    {
      name: 'menPerfumeSection',
      title: 'Men Perfume Section',
      type: 'object',
      group: 'perfumeGroup',
      fields: perfumeSectionFields,
    },
    {
      name: 'neutralPerfumeSection',
      title: 'Neutral Perfume Section',
      type: 'object',
      group: 'perfumeGroup',
      fields: perfumeSectionFields,
    },
  ],
});
