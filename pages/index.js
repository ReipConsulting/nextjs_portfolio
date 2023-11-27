import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin, IoLogoMail, IoMailSharp, IoPhonePortrait} from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Ciao, sono uno sviluppatore Frontend e Mobile!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Pierluigi Rizzu
          </Heading>
          <p>Fai diventare realtà le tue app e software | React & Flutter</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/profile.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Su di me
        </Heading>
        <Paragraph>
Sono un professionista specializzato nello sviluppo di soluzioni mobile, web, desktop e IoT.
<br></br>
Appassionato di Flutter dal giorno 1, ho portato varie aziende con cui ho lavorato a virare su quello stack tecnologico, causando un incremento della qualità e dei guadagni e una diminuzione dei costi da sostenere.
Tra i vari progetti in cui ho lavorato, spicca sicuramente una collaborazione tramite Remedia con l'UNIPD, per lo sviluppo di un app di recruting per i laureandi, oltre che a Rotarapp, app gestionale su scala europea per la gestione dei RotaryClub, e Axios, app del settore istruzione su scala nazionale per la gestione del registro elettronico e delle comunicazioni scuola famiglia.
In React lavoro tranquillamente con Redux, React Context, React Query e tutti gli ultimi strumenti che consentono uno sviluppo quanto piu' rapido e di qualità possibile.
<br></br>
Ho un ottima conoscenza dei vari tool di versioning, e capacità, all'occorrenza, di impostare pipelines che consentano un ciclo di CI/CD consistente.
          <br></br>
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Guarda cosa so fare..
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>Presente</BioYear>
          React Developer @ExagonPlus
        </BioSection>
        <BioSection>
          <BioYear>2020 - 2023</BioYear>
           Sviluppatore Mobile & Frontend @Freelancer
        </BioSection>
        <BioSection>
          <BioYear>2019 - 2023</BioYear>
          Mobile Architect & Tech Leader @ArsDigitalia
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Diplomato all'Apple Developer Academy
        </BioSection>
        
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
        Coding, <text style={{ color: "pink" }}>Musica</text>,{' '}
          Film
          , <text style={{ color: "pink" }}>Ping Pong</text>,{' '} Gaming
        </Paragraph>
      </Section>

    

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Dove trovarmi
        </Heading>
        <List>
        <ListItem>
            <Link href="mailto:commerciale@pierluigirizzu.it" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoPhonePortrait/>}
              >
              39 320 332 4889
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:commerciale@pierluigirizzu.it" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoMailSharp />}
              >
                commerciale@pierluigirizzu.it
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/pierluigirizzu/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @Pierluigi Rizzu
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="https://drive.google.com/file/d/1f8wTm2_UAicf9EZ5vJ4tMVEmUMLiXR2k/view?usp=sharing" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
            <a href="https://drive.google.com/file/d/1f8wTm2_UAicf9EZ5vJ4tMVEmUMLiXR2k/view?usp=sharing">Scarica il CV</a> 
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
