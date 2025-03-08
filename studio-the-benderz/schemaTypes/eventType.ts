import {defineType, defineField} from 'sanity'
import {CalendarIcon} from '@sanity/icons'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'showType',
      title: 'Show Type',
      type: 'string',
      description: 'The type of show',
      options: {
        list: ['Full Band', 'Solo', 'Duo', 'Private', 'Wedding'],
        layout: 'radio',
        direction: 'horizontal',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      description: 'The date and time of the event',
      options: {
        dateFormat: 'MM/DD/YYYY',
        timeFormat: 'hh:mm A',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'venue',
      title: 'Venue',
      type: 'reference',
      to: [{type: 'venue'}],
      hidden: ({parent}) => parent?.showType === 'Private' || parent?.showType === 'Wedding',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description:
        'The description of the event. Hint: Use ChatGPT. \nPrompt: \n\nWrite a description for an event page for The Benderz website for the live performance at <venue name in city, state>.',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The slug for the event',
      options: {
        source: async (doc: any, {getClient}) => {
          const date = new Date(doc.date)
          const formattedDate = date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })

          // Get the client to fetch the referenced venue
          const client = getClient({apiVersion: '2023-05-03'})
          // Fetch the venue document using the reference
          const venue = await client.fetch(`*[_id == $venueId][0].name`, {venueId: doc.venue._ref})

          const venueName = venue || ''
          return `the-benderz-at-${venueName}-${formattedDate.replace(/,/g, '')}`
        },
        slugify: (input: string) =>
          input
            .toLowerCase()
            .replace(/[^\w\s-]/g, '') // Remove special characters
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
            .trim(), // Remove leading/trailing spaces
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      venueName: 'venue.name',
      showType: 'showType',
      date: 'date',
    },
    prepare: ({venueName, date, showType}) => {
      const formattedDate = new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })

      let formattedName = ''

      if (showType === 'Private' || showType === 'Wedding') {
        formattedName = `${showType}`
      } else if (showType === 'Full Band') {
        formattedName = `${venueName}`
      } else {
        formattedName = `${venueName} ${showType}`
      }

      return {
        title: formattedName,
        subtitle: formattedDate,
      }
    },
  },

  icon: CalendarIcon,
})
