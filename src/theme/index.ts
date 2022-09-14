import { extendTheme } from '@chakra-ui/react'
import { theme as proTheme } from '@chakra-ui/pro-theme'

const fontStack = [
  'SoraVariable',
  'ui-sans-serif',
  'system-ui',
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  '"Noto Sans"',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
  '"Noto Color Emoji"',
]
const fonts = { body: fontStack.join(','), heading: fontStack.join(',') }

const theme = extendTheme(
  {
    semanticTokens: {
      colors: {
        text: {
          default: '#16161D',
          _dark: '#ade3b8',
        },
        heroGradientStart: {
          default: '#7928CA',
          _dark: '#e3a7f9',
        },
        heroGradientEnd: {
          default: '#FF0080',
          _dark: '#fbec8f',
        },
      },
      radii: {
        button: '12px',
      },
    },
    colors: {
      black: '#16161D',
    },
    fonts,
  },
  proTheme
)

export default theme
