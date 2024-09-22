import { memo } from 'react'
import {
  Heading,
  List,
  ListItem,
  ListIcon,
  SimpleGrid,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import { SiJavascript, SiTypescript, SiReact } from 'react-icons/si'
import { TiArrowRepeatOutline } from 'react-icons/ti'
import { TbBrandNodejs } from 'react-icons/tb'
import { TbBrandNextjs } from 'react-icons/tb'
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
   

      <SimpleGrid columns={2} spacing={4}>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiReact} color={emphasis} fontSize="2em" />
            React Js
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={TbBrandNextjs} color={emphasis} fontSize="2em" />
            Next Js
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={TbBrandNodejs} color={emphasis} fontSize="2em" />
            Node Js
          </ListItem>
        </List>
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
            <ListIcon
              as={TiArrowRepeatOutline}
              color={emphasis}
              fontSize="2em"
            />
            CICD
          </ListItem>
        </List>
      </SimpleGrid>
    </Stack>
  )
}

export default memo(Detail)
