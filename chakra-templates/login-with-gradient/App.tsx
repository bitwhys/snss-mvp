import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Input,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { Logo } from './Logo'
import { GoogleIcon } from './ProviderIcons'

export const App = () => (
  <Box bgGradient={{ sm: 'linear(to-r, blue.600, purple.600)' }} py={{ base: '12', md: '24' }}>
    <Container
      maxW="md"
      py={{ base: '0', sm: '8' }}
      px={{ base: '4', sm: '10' }}
      bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
      boxShadow={{ base: 'none', sm: 'xl' }}
      borderRadius={{ base: 'none', sm: 'xl' }}
    >
      <Stack spacing="8">
        <Stack spacing="6" align="center">
          <Logo />
          <Stack spacing="3" textAlign="center">
            <Heading size="xs">Log in to your account</Heading>
            <Text color="muted">Start making your dreams come true</Text>
          </Stack>
        </Stack>
        <Stack spacing="6">
          <Button variant="secondary" leftIcon={<GoogleIcon boxSize="5" />} iconSpacing="3">
            Continue with Google
          </Button>
          <Divider />
          <Stack spacing="4">
            <Input placeholder="Enter your email" />
            <Button variant="primary">Continue with email</Button>
          </Stack>
        </Stack>
        <Stack spacing="0.5" align="center">
          <Text fontSize="sm" color="muted">
            Having trouble logging in?
          </Text>
          <Button variant="link" colorScheme="blue" size="sm">
            Contact us
          </Button>
        </Stack>
        <Text fontSize="xs" color="subtle" textAlign="center">
          By continuing, you acknowledge that you have read, understood, and agree to our terms and
          condition
        </Text>
      </Stack>
    </Container>
  </Box>
)
