import React from 'react';
import { Card, Box, Button, FormControl, FormLabel, Heading, HStack, Image, Input, InputGroup, InputLeftElement, Stack, Text } from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';

const Login = () => {
  return (
    <Card direction={{ base: 'column', sm: 'row' }} overflowY='hidden' variant='outline'>
      <Box position='relative' w='100%' maxWidth={{ base: '100%', sm: '60%' }}>
        <Image
          src='https://media.istockphoto.com/id/883991402/photo/the-businessman-puts-a-stamp-on-the-contract.jpg?s=612x612&w=0&k=20&c=A_GCBTkDGBTJoi_P3KdQiPI2y4QklZ4FYcV7cNf1PiY='
          alt='My Image'
          w='100%'
          h='500px'
          mt='30px'
          ml='50px'
          mb='40px'
          borderRadius='40px 10px 40px 10px'
          objectFit='cover'
        />
       <Box position='absolute' top='70%' left='44%' transform='translate(-50%, -50%)'>
  <Box bg='rgba(0, 0, 0, 0.2)' p='20px' borderRadius='1px'px='-2' py='2'>
    <Heading size='lg' mb='10px' fontSize={20}  color='white' textAlign='center'>
      What is Lorem ipsum?
    </Heading>
  </Box>
  <Box bg='rgba(0, 0, 0, 0.2)' p='20px' borderRadius='1px'  mt='10px'>
    <Text color='white' textAlign='center'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas orci augue, fringilla suscipit tortor
      laoreet molestie.
    </Text>
  </Box>
</Box>
      </Box>
      <Stack maxW='350px' ml='80px' mt='70px' >
        <Box p='20px'>
          <Heading size='lg' fontWeight='bold' mb='20px' >
            Royal <Text as='span' color='cyan.400' fontWeight='bold'>Stamp</Text>
          </Heading>
          <form>
            <Stack spacing='4'>
              <FormControl>
                <FormLabel size='lg' fontWeight='bold' fontSize='15px'>
                  Login
                </FormLabel>
                <Text fontSize='13px'>We're delighted to have you here again. Please use the following credentials to log into your account.</Text>
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents='none'>
                    <EmailIcon color='gray.300' mt='-8px' />
                  </InputLeftElement>
                  <Input type='email' placeholder='Email' size='sm'  />
                </InputGroup>
              </FormControl>
              <FormControl>
               
                  <FormLabel>Password</FormLabel>
               
                <InputGroup>
                  <InputLeftElement pointerEvents='none'>
                    <LockIcon color='gray.300'  mt='-10px'/>
                  </InputLeftElement>
                  <Input type='password' placeholder='Password' size='sm'  />
                </InputGroup>
                <Button
                    as='a'
                    href='#'
                    fontWeight='bold'
                    fontSize='12px'
                    variant='link'
                    size='xs'
                    ml='210px'
                    color='cyan.400'
                  >
                    Forgot Password?
                  </Button>
              </FormControl>
            </Stack>
            <Button
              bg='cyan.400'
              color='white'
              w='100%'
              mt='20px'
              size='sm'
            >
              Login
            </Button>
          </form>
          <HStack ml='50px' mt='30px'>
            <Text fontSize='12px'>Don't have an account?</Text>
            <Button
              as='a'
              href='#'
              fontWeight='bold'
              fontSize='12px'
              variant='link'
              color='cyan.400'
              ml='5px'
            >
              Sign Up
            </Button>
          </HStack>
        </Box>
      </Stack>
    </Card>
  );
};

export default Login;
