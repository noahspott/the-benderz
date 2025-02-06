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
