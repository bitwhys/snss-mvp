import { Box } from '@chakra-ui/react'
import RegistrationForm from '@/components/RegistrationForm'

const RegistrationPage = () => (
  <Box
    h="100vh"
    bgGradient={{ sm: 'linear(270deg, registrationGradientStart, registrationGradientEnd)' }}
    py={{ base: '12', md: '24' }}
  >
    <RegistrationForm />
  </Box>
)
export default RegistrationPage
