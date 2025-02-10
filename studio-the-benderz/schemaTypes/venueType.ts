import {defineType, defineField} from 'sanity'
import {HomeIcon} from '@sanity/icons'
import addressType from './addressType'

export default defineType({
  name: 'venue',
  title: 'Venue',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: "The venue's logo",
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      description: 'This should be a big, high-quality image',
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'address',
      description: 'Get the address from Google Maps',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The slug for the venue',
      options: {
        source: (doc: any) => {
          return `${doc.name}-${doc.address.city}-${doc.address.state}`
        },
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-'),
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  icon: HomeIcon,
})
