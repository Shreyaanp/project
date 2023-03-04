import React from 'react';
import { useContext, useState } from 'react';
import { Flex, Heading, Text, Stack,  Button,Modal, ModalFooter, Image,Spinner, useBreakpointValue,  AspectRatio, Container, Box } from '@chakra-ui/react';
import context from '../context';
import { ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/modal"
import { useDisclosure } from "@chakra-ui/react"
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import image from './windows.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Card() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)
const { data } = useContext(context);
 const textHeight = useBreakpointValue({ base: '20%', md: '30%' });
 useEffect(() => {
  AOS.init();
}, [])
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };
    return (
        <>
        <Stack
        overflowX={'hidden'}
        overflowY={'hidden'}
        >

        {data.map((data) => (

      <Stack minH={'99vh'} direction={{ base: 'column', lg: 'row'}}

      >
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: textHeight,
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              {data.title}
              {console.log(data.title)}

            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              {data.description}
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            {data.moreinfo}
          </Text>
          <Stack direction={{ base: 'row' }} spacing={4}>
            <a href={data.link} target={'_blank'}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Open
            </Button>
            </a>
            <Button rounded={'full'}

            >
              Project Detail
              </Button>
      </Stack>
        </Stack>
      </Flex>

         <Flex
        height={'100vh'}
       flex={1}

       >
        {/* IF data.title is windows clone */}

        {data.title !== "Windows-Clone" ? (
          <Box data-aos="fade-left"
          data-aos-duration="500"
          data-aos-delay="100"
          data-aos-offset="0"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
          height="100vh"
          width="100vh"
          >
                  {isLoading && (
        <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
        position={
          'absolute'
        }
        top='50%'
        left='50%'
      />
      )}
      <iframe
      onLoad={handleLoad}
      style={{ display: isLoading  ? 'none' : 'block' }}
      overflow="hidden" title='projects' src = {data.link} width="100%" height="100%" frameborder="0" ></iframe>
      </Box>
        ) : (
          <Image
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-delay="100"
          data-aos-offset="0"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
          src={image}
          alt={data.title}
          objectFit= " contain"

        />
        )}
      </Flex>
    </Stack>

        ))}
        </Stack>
        </>
    );
    }