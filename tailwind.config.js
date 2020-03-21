module.exports = {
  theme: {
    interFontFeatures: {
      default: ['calt', 'liga', 'kern'],
      numeric: ['tnum', 'salt', 'ss02']
    },
    extend: {
      fontSize: {
        'xs': '11px',
        's': '13px',
        'm': '17px',
        'l': '28px',
        'xl': '36px',
        '2xl': '48px',
        '3xl': '64px',
        base: '16px',
      },
      lineHeight: {
        'lg': '1.6',
        'md': '1.33',
        'sm': '1.25',
        'xs': '1',
      },
    }
  },
  variants: { // all the following default to ['responsive']
    mixBlendMode: ['responsive'],
    backgroundBlendMode: ['responsive'],
    isolation: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    textColor: ['responsive', 'hover', 'focus', 'visited', 'group-hover'],
    borderWidth: ['responsive', 'last', 'hover', 'focus'],
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
  },

  plugins: [
    require('@tailwindcss/ui'),
    require('tailwindcss-blend-mode')(), // no options to configure https://github.com/hacknug/tailwindcss-blend-mode
    require('tailwindcss-debug-screens'),
    require('tailwindcss-font-inter')(),
    require('@tailwindcss/ui')({
      layout: 'sidebar',
    })
  ]
}