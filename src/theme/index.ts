import { extendTheme } from '@chakra-ui/react'
import { theme as proTheme } from '@chakra-ui/pro-theme'
import { semanticTokens } from '@/theme/tokens'
import colors from '@/theme/colors'

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
    semanticTokens,
    colors,
    fonts,
  },
  proTheme
)

export default theme
