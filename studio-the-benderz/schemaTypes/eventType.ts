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
      name: 'city',
      title: 'City',
      type: 'string',
      description: 'The city of the event',
      hidden: ({parent}) => parent?.showType !== 'Private' && parent?.showType !== 'Wedding',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'string',
      description: 'Ex. CA',
      options: {
        list: [
          {title: 'AL', value: 'AL'},
          {title: 'AK', value: 'AK'},
          {title: 'AZ', value: 'AZ'},
          {title: 'AR', value: 'AR'},
          {title: 'CA', value: 'CA'},
          {title: 'CO', value: 'CO'},
          {title: 'CT', value: 'CT'},
          {title: 'DE', value: 'DE'},
          {title: 'FL', value: 'FL'},
          {title: 'GA', value: 'GA'},
          {title: 'HI', value: 'HI'},
          {title: 'ID', value: 'ID'},
          {title: 'IL', value: 'IL'},
          {title: 'IN', value: 'IN'},
          {title: 'IA', value: 'IA'},
          {title: 'KS', value: 'KS'},
          {title: 'KY', value: 'KY'},
          {title: 'LA', value: 'LA'},
          {title: 'ME', value: 'ME'},
          {title: 'MD', value: 'MD'},
          {title: 'MA', value: 'MA'},
          {title: 'MI', value: 'MI'},
          {title: 'MN', value: 'MN'},
          {title: 'MS', value: 'MS'},
          {title: 'MO', value: 'MO'},
          {title: 'MT', value: 'MT'},
          {title: 'NE', value: 'NE'},
          {title: 'NV', value: 'NV'},
          {title: 'NH', value: 'NH'},
          {title: 'NJ', value: 'NJ'},
          {title: 'NM', value: 'NM'},
          {title: 'NY', value: 'NY'},
          {title: 'NC', value: 'NC'},
          {title: 'ND', value: 'ND'},
          {title: 'OH', value: 'OH'},
          {title: 'OK', value: 'OK'},
          {title: 'OR', value: 'OR'},
          {title: 'PA', value: 'PA'},
          {title: 'RI', value: 'RI'},
          {title: 'SC', value: 'SC'},
          {title: 'SD', value: 'SD'},
          {title: 'TN', value: 'TN'},
          {title: 'TX', value: 'TX'},
          {title: 'UT', value: 'UT'},
          {title: 'VT', value: 'VT'},
          {title: 'VA', value: 'VA'},
          {title: 'WA', value: 'WA'},
          {title: 'WV', value: 'WV'},
          {title: 'WI', value: 'WI'},
          {title: 'WY', value: 'WY'},
        ],
      },
      validation: (Rule) => Rule.required(),
      hidden: ({parent}) => parent?.showType !== 'Private' && parent?.showType !== 'Wedding',
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
      description: 'The slug for the event. (e.g. thebenderz.com/schedule/slug)',
      options: {
        source: async (doc: any, {getClient}) => {
          const date = new Date(doc.date)
          const formattedDate = date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })

          // If ShowType is Private or Wedding, return the showType
          if (doc.showType === 'Private' || doc.showType === 'Wedding') {
            const city = doc.city
            const state = doc.state

            return `${doc.showType}-${city}-${state}-${formattedDate.replace(/,/g, '')}`
          }

          // Get the client to fetch the referenced venue
          const client = getClient({apiVersion: '2023-05-03'})
          // Fetch the venue document using the reference
          const venue = await client.fetch(`*[_id == $venueId][0].name`, {venueId: doc.venue._ref})

          const venueName = venue || ''
          return `${doc.showType}-${venueName}-${formattedDate.replace(/,/g, '')}`
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
