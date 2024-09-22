import { memo } from 'react'
import { Heading, Text, Stack, Link } from '@chakra-ui/react'
import ExperienceTab from './ExperienceTab'
const DetailSection = () => (
  <Stack
    width={{ base: '99%', lg: '60%', xl: '75%' }}
    height="100%"
    spacing={{ base: 6, xl: 8 }}
  >
    <Heading
      size="1xl"
      style={{
        fontVariantCaps: 'small-caps',
      }}
    >
      Projects we’ve worked on.
    </Heading>
    <Text variant="description">
      Since 2016, had a privilege to work with several companies that enables me
      to hone my skills and talents. These companies will always have a special
      place in my heart. Currently We are working with{' '}
      <Link href="https://www2.deloitte.com/" target="_blank" rel="noreferrer">
        Deloitte
      </Link>
      .
    </Text>

    <ExperienceTab />
  </Stack>
)

export default memo(DetailSection)
