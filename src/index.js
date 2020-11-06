const plugin = require('tailwindcss/plugin')

const aspectRatio = plugin(
  function ({ addComponents, theme, variants, e }) {
    const values = theme('aspectRatio')

    const baseSelectors = Object.entries(values)
      .map(([key, value]) => {
        return `.${e(`aspect-w-${key}`)}`
      })
      .join(',\n')

    const childSelectors = Object.entries(values)
      .map(([key, value]) => {
        return `.${e(`aspect-w-${key}`)} > *`
      })
      .join(',\n')

    addComponents(
      [
        {
          [baseSelectors]: {
            position: 'relative',
            paddingBottom: `calc(var(--aspect-h) / var(--aspect-w) * 100%)`,
          },
        },
        {
          [childSelectors]: {
            position: 'absolute',
            height: '100%',
            width: '100%',
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
          },
        },
        Object.entries(values).map(([key, value]) => {
          return {
            [`.${e(`aspect-w-${key}`)}`]: {
              '--aspect-w': value,
            },
          }
        }),
        Object.entries(values).map(([key, value]) => {
          return {
            [`.${e(`aspect-h-${key}`)}`]: {
              '--aspect-h': value,
            },
          }
        }),
      ],
      variants('aspectRatio')
    )
  },
  {
    theme: {
      aspectRatio: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
        14: '14',
        15: '15',
        16: '16',
      },
    },
    variants: {
      aspectRatio: ['responsive'],
    },
  }
)

module.exports = aspectRatio
