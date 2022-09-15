import { mode, StyleFunctionProps, transparentize } from '@chakra-ui/theme-tools'

const variants = {
  outline: (props: StyleFunctionProps) => ({
    field: {
      borderRadius: 'full',
      bg: mode('white', 'neutral.800')(props),
      _hover: { borderColor: mode('neutral.300', 'neutral.600')(props) },
      _focus: {
        borderColor: mode('brand.500', 'brand.200')(props),
        boxShadow: mode(
          `0px 0px 0px 1px ${transparentize(`brand.500`, 1.0)(props.theme)}`,
          `0px 0px 0px 1px ${transparentize(`brand.200`, 1.0)(props.theme)}`
        )(props),
      },
    },
    addon: {
      borderRadius: 'full',
      bg: mode('neutral.50', 'neutral.700')(props),
    },
  }),
  'outline-on-accent': (props: StyleFunctionProps) => ({
    field: {
      bg: 'white',
      borderRadius: 'full',
      color: 'neutral.900',
      borderWidth: '1px',
      borderColor: 'brand.50',
      _placeholder: {
        color: 'neutral.500',
      },
      _hover: {
        borderColor: 'brand.100',
      },
      _focus: {
        borderColor: 'brand.200',
        boxShadow: `0px 0px 0px 1px ${transparentize(`brand.200`, 1.0)(props.theme)}`,
      },
    },
  }),
  filled: (props: StyleFunctionProps) => {
    if (props.colorScheme === 'neutral') {
      return {
        field: {
          bg: mode('white', 'neutral.800')(props),
          _hover: {
            borderColor: mode('neutral.200', 'neutral.700')(props),
            bg: mode('white', 'neutral.700')(props),
          },
          _focus: {
            borderColor: 'accent',
            bg: mode('white', 'neutral.800')(props),
          },
        },
      }
    }
    return {
      field: {
        bg: 'bg-accent-subtle',
        color: 'on-accent',
        _placeholder: {
          color: 'on-accent',
        },
        _hover: {
          borderColor: 'brand.400',
          bg: 'bg-accent-subtle',
        },
        _focus: {
          bg: 'bg-accent-subtle',
          borderColor: 'brand.300',
        },
      },
    }
  },
}

const sizes = {
  lg: {
    field: {
      fontSize: 'md',
      borderRadius: 'full',
    },
  },
}

export default {
  variants,
  sizes,
  defaultProps: {
    colorScheme: 'neutral',
  },
}
