import React from 'react';
import { Image, Box, Card, Stack, CardBody, Heading, Text, Button, CardFooter, FormControl, FormLabel, HStack, Input, InputGroup, InputLeftElement, Center } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { BsFillPersonFill } from 'react-icons/bs';
import { PhoneIcon } from '@chakra-ui/icons';
import { transform } from 'typescript';

const Signup = () => {
  return (
    <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
    <Box position="relative">
      <Image
        ml={100}
        mt={60}
        h="530px"
        borderRadius='30px 0 30px 0'
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src='https://lcmclaw.com/wp-content/uploads/2020/09/Notary-Public.jpg'
        alt='Caffe Latte'
      />
      <Box position="absolute" top={100} left={0} right={0} bottom={0} display="flex" alignItems="center" justifyContent="center">
        <Text
          fontSize={20}
          color="white"
          textAlign="center"
          backgroundColor="rgba(0, 0, 0, 0.5)"
          px={4}
          py={2}
          borderRadius="md"
        >
          Welcome to Royal Stamp!
        </Text>
        
      </Box>
      <Box position="absolute" top={290} left={30} right={50} bottom={60} display="flex" alignItems="center" justifyContent="center">
        <Text
          fontSize={20}
          color="white"
          textAlign="center"
          backgroundColor="rgba(0, 0, 0, 0.5)"
          px={4}
          py={2}
          borderRadius="md"
          width={600}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic
        </Text>
        
      </Box>
    </Box>
      <Stack >
        <CardBody ml='40px' pt='70px' maxW={340}>
          <Heading size='2xl' fontSize='35'>
            Royal{' '}
            <Text as='span' color='#40a9ff'>
              Stamp
            </Text>
          </Heading>
          <form >
            
            <FormControl maxW={500}>
              <FormLabel size="lg" fontWeight='bold' fontSize={20} mt="-20px">SignUp</FormLabel>
              <Text fontSize={14} mt="-1px">We are thrilled to have you on board. Please provide us with the following information to complete your registration.</Text>
              <Stack spacing={6}>
                <FormLabel fontWeight={'bold'} >First Name</FormLabel>
                <InputGroup marginTop={6} marginLeft={8}>
                  <InputLeftElement pointerEvents='none'  >
                    <BsFillPersonFill color="gray" />
                  </InputLeftElement>
                  <Input type='name' placeholder="First Name" size="sm" marginLeft={-12} p={8} w={300} marginTop={-9} textAlign={'center'} />
                </InputGroup>
                <FormLabel  fontWeight={'bold'}>Last Name</FormLabel>
                
                  <InputGroup marginTop={6} marginLeft={8}>
                    <InputLeftElement pointerEvents='none'  >
                      <BsFillPersonFill color="gray" />
                    </InputLeftElement>
                    <Input type='name' ml='4px' placeholder='Last Name' size="sm" marginLeft={-12} textAlign={'center'} p={8} w={300} marginTop={-9} />
                  </InputGroup >
                
                <FormLabel fontWeight={'bold'}>Mobile Number</FormLabel>
              
                  <InputGroup marginTop={6}  marginLeft={8}>
                    <InputLeftElement pointerEvents='none'  >
                      <PhoneIcon color="gray" />
                    </InputLeftElement>
                    <Input type='number' ml='4px' placeholder='Mobile Number' size="sm" marginLeft={-12} textAlign={'center'} p={8} w={300} marginTop={-9} />
                  </InputGroup >
                
                <FormLabel  fontWeight={'bold'}>Email</FormLabel>
                
                  <InputGroup  marginTop={6}  marginLeft={8}>
                    <InputLeftElement pointerEvents='none'  >
                      <EmailIcon color="gray" />
                    </InputLeftElement>
                    <Input type='email' ml='4px' placeholder='Email' size="sm" marginLeft={-12} textAlign={'center'} p={8} w={300} marginTop={-9} />
                  </InputGroup>
                
                
                <Button
                  marginTop={25}
                  bgColor='#40a9ff'
                  width={325}
                  padding={10}
                  marginLeft={-9}
                  border='skyblue'
                  color='white'
                  borderRadius={4}
                >
                  SignUp
                </Button>
              </Stack>
            </FormControl>
           
          </form>
        </CardBody>
      </Stack>
    </Card>
   
  );
}

export default Signup;
