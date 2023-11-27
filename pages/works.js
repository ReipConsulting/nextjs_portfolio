import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbRotarapp from '../public/images/works/rotarapp.png'
import thumbAxios from '../public/images/works/axios-re-docenti.jpeg'
import thumbAmbrosetti from '../public/images/works/ambrosetti.png'
import thumbExagon from '../public/images/works/exagon-plus.jpeg'
import thumbHudi from '../public/images/works/hudi.webp'
import thumbClispo from '../public/images/works/clispo.png'


const Works = () => (
  <Layout title="Progetti">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Progetti
      </Heading>

      <SimpleGrid columns={[1, 2, 3]} gap={6}>
        <Section>
          <WorkGridItem id="COMS" title="Exagon Plus 2.0" thumbnail={thumbExagon} url = {"https://www.exagonplus.com/web/"}>
          Exagon Plus, il miglior software gestionale per parrucchieri, barber, centri estetici, SPA e solarium. Scelto da oltre 10.500 saloni.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="Rotarapp"
            title="Rotarapp"
            thumbnail={thumbRotarapp}
            url = "https://www.rotarapp.net/"
          >
            Sistema gestionale per l'associazione Rotaract in Italia. Il sistema è composto da un'app, uan webapp e un sito web con assistenza tramite Facebook.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="ambrosetti"
            title="Ambrosetti"
            thumbnail={thumbAmbrosetti}
            url= "https://play.google.com/store/apps/details?id=eu.am.ambrosetti.mobile&hl=it&gl=US"
          >
            Questa applicazione è il supporto pratico per una consultazione facile e veloce di tutti i contenuti offerti agli iscritti al servizio The European House – Ambrosetti Management (AM).
            Il servizio AM è dedicato a middle manager, quadri e key professional e prevede un ciclo annuale di incontri su temi quali soft skill, innovazione e scenario.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="hudi" thumbnail={thumbHudi} title="Hudi"
          url="https://humandataincome.com/"
          >
          HUDI è un ecosistema peer-to-peer trasformativo che consente a individui e organizzazioni di sfruttare tutto il potenziale dell'arricchimento, dello scambio e della monetizzazione dei dati come mai prima d'ora.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem 
          url= "https://play.google.com/store/apps/details?id=com.axiositalia.re.teachers&hl=it&gl=US"
          id="axios" thumbnail={thumbAxios} title="Axios">
          Grazie alla Nuova App Axios Docenti tutta la gestione del Registro Elettronico è assicurata da tablet e da smartphone.
Il tempo è la risorsa più preziosa per un insegnante. Noi lo sappiamo bene! Risparmia tempo condividendo materiale di studio, compiti e note dal tuo smartphone: Axios Docenti è il tuo quotidiano alleato ideale per l’attività scolastica.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="clispo" thumbnail={thumbClispo} title="Clispo" url= "https://www.clispo.com"

          >
          Clispo è una piattaforma Sportech fondata nel 2022 con la missione mondiale di semplificare l'esperienza di organizzazione di attività sportive.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
