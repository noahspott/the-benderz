import {defineType, defineField} from 'sanity'
import {HomeIcon, ImageIcon} from '@sanity/icons'

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
      name: 'image',
      title: 'Image',
      type: 'image',
      group: 'photos',
      description:
        'This will display on the card on the venues page as well as the about section on the venue page.',
    }),
    defineField({
      name: 'galleryPhotos',
      title: 'Gallery Photos',
      type: 'array',
      of: [{type: 'image'}],
      group: 'photos',
      description:
        "These will display in the gallery on the venue's page. The idea is to be photos of the band performing at the venue. Ideal photos are 500px, square, and .webp",
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
      description: "Put the URL to the venue's website here.",
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
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .replace(/'/g, '') // Remove apostrophes
            .replace(/&/g, 'and') // Replace & with 'and'
            .replace(/[\/:?#\[\]@!$'()*+,;=<>%{}|\\^~`"]/g, '') // Remove reserved and special characters
            .replace(/--+/g, '-') // Replace multiple hyphens with a single hyphen
            .replace(/^-+|-+$/g, ''), // Trim hyphens from the start and end
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  icon: HomeIcon,
})
