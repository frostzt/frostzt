import React from 'react';
import NextLink from 'next/link';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { IoLogoTwitter, IoLogoGithub } from 'react-icons/io5';
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  Icon,
  List,
  ListItem,
  Link,
} from '@chakra-ui/react';

import AppRoutes from '../enums/routes.enum';
import Layout from '../components/layouts/article';
import Section from '../components/Section/Section';
import Paragraph from '../components/CustomCoreComponents/Paragraph';
import { BioSection, BioYear } from '../components/CustomCoreComponents/Bio';

const Home = () => {
  return (
    <Layout>
      <Container>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} align="center" mb={6}>
          Hello I&apos;m a full-stack developer based in India!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Sourav Singh Rawat
            </Heading>
            <p>Learning-addict, Developer, Designer, and not-so-good singer</p>
          </Box>
          <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/who-is-dis.jpg"
              alt="Sourav's Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            frostzt? Who?
          </Heading>
          <Paragraph>
            He likes to devour books every morning and then sing in the evening. Amazingly he figured out that he had a
            crush on computers and electronics when he completely rekked his Dad&apos;s mobile phone by flashing a wrong
            ROM in it (SPOILER: He fixed it later). Born in India, He has a hunger for knowledge and just want to know
            more; interests ranging from History, Biology, and most of all Mathematics. And unfortunately he
            doesn&apos;t use Arch!
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href={AppRoutes.PROJECTS}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Projects
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2000</BioYear>
            Born in Sagar, Madhya Pradesh, India.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Graduated in Bachelor&apos;s of Commerce with Computer Application from BT Institute of Excellence.
          </BioSection>
          <BioSection>
            <BioYear>2016 to present</BioYear>
            Started working on frostzt!
          </BioSection>
          <BioSection>
            <BioYear>2021 to present</BioYear>
            Looking for opportunities and working on ideas!
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Find me
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/frostzt" target="_blank" rel="noreferrer">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                  @frostzt
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/souravsrawat" target="_blank" rel="noreferrer">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter} />}>
                  @souravsrawat
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Home;
