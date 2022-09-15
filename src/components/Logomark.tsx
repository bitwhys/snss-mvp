import { chakra, HTMLChakraProps } from '@chakra-ui/react'

export const Logomark = (props: HTMLChakraProps<'svg'>) => (
  <chakra.svg color="accent" height="20" width="auto" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="url(#a)" d="M57 24h22L60 56H38l19-32Z" />
    <path fill="url(#b)" d="M37 24h16L34 56H18l19-32Z" />
    <path fill="url(#c)" d="M21 24h12L14 56H2l19-32Z" />
    <defs>
      <linearGradient id="a" x1="79" x2="2" y1="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F9D423" />
        <stop offset="1" stopColor="#F83600" />
      </linearGradient>
      <linearGradient id="b" x1="79" x2="2" y1="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F9D423" />
        <stop offset="1" stopColor="#F83600" />
      </linearGradient>
      <linearGradient id="c" x1="79" x2="2" y1="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F9D423" />
        <stop offset="1" stopColor="#F83600" />
      </linearGradient>
    </defs>
  </chakra.svg>
)
