import { memo } from 'react'
import {
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Icon,
  SimpleGrid,
  Box,
  Tooltip,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  SiDotNet,
  SiJavascript,
  SiTypescript,
  SiGraphql,
  SiReact,
  SiNextDotJs,
  SiNodeDotJs,
  SiDocker,
} from 'react-icons/si'
import { TiArrowRepeatOutline } from "react-icons/ti";
import { GiCoffeePot } from 'react-icons/gi'
import { IoMdOpen } from 'react-icons/io'

type ISkillSetModal = {
  onOpen(): void
}

const Detail = ({ onOpen }: ISkillSetModal) => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
  const currentYear = new Date().getFullYear()
  const professionalYears = currentYear - 2016

  return (
    <Stack
      width={{ base: '100%', lg: '70%' }}
      spacing={{ base: 6, xl: 8 }}
      as="section"
    >
      <Heading
        as="h4"
        size="2xl"
        letterSpacing={1.8}
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        What we do.
      </Heading>
      <Text variant="description" color="white.700">
        We've been coding professionally for {professionalYears} years, working as a <b>Team</b> that focuses on{' '}
        <b>architecture</b>, <b>APIs</b>,{' '}
     
        and even <b>front end integration</b> stuff now, how time flies!
        <br /> <br />
        Here are few technologies that are cup of our{' '}
        <Tooltip
          label="I only drink tea if I needed too!"
          aria-label="I hate Tea!"
          hasArrow
        >
          <Text as="span" variant="emphasis" textDecorationLine="line-through">
            tea
          </Text>
        </Tooltip>{' '}
        coffee <Icon as={GiCoffeePot} color={emphasis} />.
      </Text>

      <SimpleGrid columns={2} spacing={4}>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiJavascript} color={emphasis} fontSize="2em" />
            Javascript (ES6+)
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiTypescript} color={emphasis} fontSize="2em" />
            Typescript
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNodeDotJs} color={emphasis} fontSize="2em" />
            Node
          </ListItem>
        </List>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiReact} color={emphasis} fontSize="2em" />
            React
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNextDotJs} color={emphasis} fontSize="2em" />
            NextJS
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={TiArrowRepeatOutline} color={emphasis} fontSize="2em" />
            CICD
          </ListItem>
        </List>
      </SimpleGrid>
    </Stack>
  )
}

export default memo(Detail)
