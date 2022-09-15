import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Img,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as Logos from '@/components/Brands'

const LandingPage = () => (
  <Box as="section" bg={mode('neutral.50', 'neutral.800')} pt="24" pb="12" overflow="hidden">
    <Container px={{ base: '6', md: '8' }}>
      <Flex align="flex-start" direction={{ base: 'column', lg: 'row' }} justify="space-between" mb="20">
        <Box flex="1" maxW={{ lg: 'xl' }} pt="6">
          <Heading as="h1" size="3xl" mt="8" fontWeight="extrabold">
            All-in-one online form & survey builder
          </Heading>
          <Text color={mode('neutral.600', 'neutral.400')} mt="5" fontSize="xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua adipiscing elit.
          </Text>
          <Button mt="8" minW="14rem" colorScheme="brand" size="lg" height="14" px="8" fontSize="md" fontWeight="bold">
            Get Started for free
          </Button>
        </Box>
        <Box boxSize={{ base: '20', lg: '8' }} />
        <Img
          pos="relative"
          marginEnd="-16rem"
          w="50rem"
          src="https://res.cloudinary.com/chakra-ui-pro/image/upload/v1621082943/pro-website/screenshot-dark_w6jpks.png"
          alt="Screenshot for Form builder"
        />
      </Flex>
      {/* Logo Grid */}
      <Box>
        <Text color={mode('neutral.600', 'neutral.400')} fontWeight="medium">
          Proudly trusted by 5,000+ companies and individuals
        </Text>
        <SimpleGrid
          mt="8"
          columns={{ base: 2, md: 3, lg: 6 }}
          color="neutral.500"
          alignItems="center"
          spacing={{ base: '12', lg: '24' }}
          fontSize="2xl"
        >
          <Logos.ChatMonkey />
          <Logos.Wakanda />
          <Logos.Lighthouse />
          <Logos.Plumtic />
          <Logos.WorkScout />
          <Logos.Finnik />
        </SimpleGrid>
      </Box>
    </Container>
  </Box>
)
export default LandingPage
