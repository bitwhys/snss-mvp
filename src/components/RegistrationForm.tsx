import {
  Box,
  Button,
  Divider,
  Heading,
  Input,
  Stack,
  Text,
  Container,
  useBreakpointValue,
  HStack,
} from '@chakra-ui/react'
import { Logomark } from '@/components/Logomark'
import { GoogleIcon } from '@/components/ProviderIcons'
import { Wordmark } from '@/components/Wordmark'

const RegistrationForm = () => (
  <Container
    maxW="md"
    py={{ base: '0', sm: '8' }}
    px={{ base: '4', sm: '10' }}
    bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
    boxShadow={{ base: 'none', sm: 'lg' }}
    borderRadius={{ base: 'none', sm: 'xl' }}
  >
    <Stack spacing="8">
      <Stack spacing="6" align="center">
        <Logomark />
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
        <Button variant="link" colorScheme="indigo" size="sm">
          Submit an issue
        </Button>
      </Stack>
      <Text fontSize="xs" color="subtle" textAlign="center">
        By continuing, you acknowledge that you have read, understood, and agree to our terms and condition
      </Text>
    </Stack>
  </Container>
)
export default RegistrationForm
