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
      components: {
        input: (props) => {
          ;(props.elementProps as any).timeZone = 'America/New_York'
          return props.renderDefault(props)
        },
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
      description: 'The description of the event',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The slug for the event',
      options: {
        source: (doc: any) => {
          const date = new Date(doc.date)
          const formattedDate = date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })
          return `the-benderz-${formattedDate.replace(/,/g, '')}`
        },
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-'),
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
