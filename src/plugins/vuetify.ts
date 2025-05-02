/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

import type { IconSet } from 'vuetify'
import { Icon } from '@iconify/vue'

import { h } from 'vue'

import { createVuetify } from 'vuetify'
import { aliases } from 'vuetify/iconsets/mdi'
import 'vuetify/styles'

const iconify = <IconSet>{
  component: props => {
    // @ts-expect-error class props is handled by vue
    const { icon, tag, class: className, ...rest } = props
    const stringIcon = icon as string
    return h(tag, { class: className, ...rest }, [
      h(Icon, {
        key: stringIcon,
        inline: true,
        // @ts-expect-error todo fix types later
        icon: aliases[icon as string] ?? icon,
      }),
    ])
  },
}

export default createVuetify({
  defaults: {
    VBtn: {
      size: 'small',
      variant: 'text',
    },
    VCard: {
      elevation: 20,
      rounded: 'lg',
    },
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
        },
      },
    },
  },
  icons: {
    defaultSet: 'iconify',
    aliases,
    sets: {
      iconify,
    },
  },
})
