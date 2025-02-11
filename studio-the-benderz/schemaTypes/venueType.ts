import {defineType, defineField} from 'sanity'
import {HomeIcon, ImageIcon} from '@sanity/icons'
import addressType from './addressType'

export default defineType({
  name: 'venue',
  title: 'Venue',
  type: 'document',
  groups: [{name: 'photos', title: 'Photos', icon: ImageIcon}],
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description:
        'The venue description - use ChatGPT to write this. Ex. "Write me a description for the venue page on The Benderz website for <name of venue, city, state>"',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'address',
      description: 'Get the address from Google Maps',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      description: 'This should be a big, high-quality image',
      group: 'photos',
    }),
    defineField({
      name: 'aboutImage',
      title: 'About Image',
      type: 'image',
      group: 'photos',
      description: 'This will display next to the venue description on the venue page.',
    }),
    defineField({
      name: 'galleryPhotos',
      title: 'Gallery Photos',
      type: 'array',
      of: [{type: 'image'}],
      group: 'photos',
      description: 'These will display in the gallery on the venue page.',
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: "The venue's logo",
      group: 'photos',
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Ex. www.thebenderz.com/venues/<slug>',
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
