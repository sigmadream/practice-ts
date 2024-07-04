import { defaultTheme } from '../src/styles/themes/default'
import { GlobalStyle } from '../src/styles/global'
import type { Preview } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'light',
          value: '#f2f2f2',
        },
        {
          name: 'dark',
          value: '#0d0d0d',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    }
  },
  decorators: [
    withThemeFromJSXProvider({
      GlobalStyles: GlobalStyle,
      Provider: ThemeProvider,
      themes: {
        defaultTheme
      }
    })
  ]
}

export default preview
