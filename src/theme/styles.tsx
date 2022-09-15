import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

export default {
  global: (props: StyleFunctionProps) => ({
    body: {
      color: 'default',
      bg: 'bg-canvas',
    },
    '*::placeholder': {
      opacity: 1,
      color: 'muted',
    },
    '*, *::before, &::after': {
      borderColor: mode('neutral.200', 'neutral.700')(props),
    },
  }),
}
