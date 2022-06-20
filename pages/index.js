import NextLink from 'next/link'
import { Container, Box, Heading, Image, useColorModeValue, Link, Button, List, ListItem, Icon } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoTwitter, IoLogoGithub } from 'react-icons/io5'

const Page = () => {
  return (
    <Container>
      

      <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
        Hello, I&apos;m a NextJS & ChakraUI developer based in 🌎!
      </Box>
      <Box display={{md:'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Your Name
          </Heading>
          <p>Digital Craftzman ( Artist / Developer / Designer )</p>
        </Box>
        <Box 
          flexShrink={0} 
          mt={{base:4, md:0}}
          ml={{md:6}}
          align="center"
        >
          <Image 
            borderColor="whiteAlpha.800" 
            borderWidth={2} 
            borderStyle="solid"
            maxWidth="100px" 
            display="inline-block" 
            borderRadius="full" 
            src="images/profile.jpg" 
            alt="Profile Image" 
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Sint pariatur praesentium corrupti dicta ab, 
          modi explicabo earum ad cum delectus natus esse repellendus, aliquid nobis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Perspiciatis laudantium vel cum reprehenderit nihil blanditiis.
          Debitis vel tempore, exercitationem iure, magni, corporis adipisci ea quidem{' '}
          <NextLink href="works/example">
            <Link>Consectetur</Link>
          </NextLink>.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>

        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1990</BioYear>
          Born in City, Country
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Eaque velit architecto quam quasi soluta blanditiis illum maxime veniam ea amet
        </BioSection>
        <BioSection>
          <BioYear>2015</BioYear>
          Lorem ipsum dolor sit amet consectetur adipisicing
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Neque maxime veritatis minus ab iure harum
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Alpha, Beta,{' '}
          <Link href="/">
            Charlie
          </Link>
          , Delta,{' '}
          <Link href="/">
            Echo  
          </Link>
          , Foxtrot, Golf.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
        <ListItem>
            <Link href="https://twitter.com/etherflovv" target="_blank">
              <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter} />}>@etherflovv</Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/etherflovv" target="_blank">
              <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>@etherflovv</Button>
            </Link>
          </ListItem>
        </List>
      </Section>

    </Container>  
  )
}

export default Page