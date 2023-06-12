import React from 'react';
import { Box } from '@chakra-ui/react';
import { Card } from '@chakra-ui/react';
import profile from './profile.svg'
import { FormControl, Button, Text, FormLabel, Input } from '@chakra-ui/react';
import { Stack, HStack } from '@chakra-ui/react';
import { InputGroup, InputLeftElement,Center} from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';


const Login = () => {
  return (
    <div>
      <Box >
        <Card style={{width:'580px',height:'530px',top:'17px',left:'40px',background:'#413EF7',borderRadius:'30px 0px 30px 0px'}}>
          <center><img src={profile} alt='profile' width={'250px'} height={'250px'} style={{marginTop:'80px'}} /></center>
        </Card>
      </Box>
      <Box>
        <form style={{width:'480px',marginLeft:'690px',marginTop:'-480px', padding:'50px 30px 40px 50px'}}>
          <Stack spacing='2'>
            <FormControl>
              <FormLabel size='lg' fontWeight='bold' fontSize='26px'>
                Login
              </FormLabel>
              <Text style={{fontSize:'14px'}}>We're delighted to have you here again, Please Use the following Credentials to log into your Account</Text>
              <FormLabel mt='15px'>Email</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents='none'>
                  <EmailIcon color='gray.300' style={{marginTop:'-3px'}} />
                </InputLeftElement>
                <Input type='email' placeholder='Email' size='md'borderRadius={'30px'} />
              </InputGroup>
            </FormControl>
            <FormControl>
              <HStack justify='space-between'>
                <FormLabel size='sm'>Password</FormLabel>
              </HStack>
              <InputGroup>
                <InputLeftElement pointerEvents='none'>
                  <LockIcon color='gray.300' style={{marginTop:'-6px'}} />
                </InputLeftElement>
                <Input type='password' placeholder='Password' size='md'borderRadius={'30px'} />
              </InputGroup>
              <Button
                as='a'
                href='#'
                mt='10px'
                ml='290px'
                fontWeight='bold'
                fontSize='12px'
                variant='link'
                size='xs'
                color='#413EF7'
              >
                Forgot Password?
              </Button>
              <Button
                    bg="#413EF7"
                    color="white"
                    size="md"
                    width="100%"
                    marginTop='15px'
                    borderRadius='30px'
                  >
                    Login
                  </Button>
              </FormControl> 
            <Center style={{marginTop:'20px'}}>
              <HStack fontSize="sm" spacing="1">
                <Text>Don't have account?</Text>
                <Text style={{color:'#413EF7'}}>Sign Up</Text>
              </HStack>
            </Center>
            
          </Stack>
        </form>
        
      </Box>
    </div>
  );
};

export default Login;