import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Box, FormControl, FormLabel, InputGroup, InputLeftElement, HStack, Center, Input, Button } from '@chakra-ui/react'
import image from './signupl.svg'
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import { MdPerson } from "react-icons/md";


const Signup = () => {
    return (
        <div>
            <Box >
                <Card style={{ width: '600px', height: '600px', top: '25px', left: '40px', background: '#413EF7', borderRadius: '30px 0px 30px 0px' }}>
                    <center>< Image src={image} alt='profile' width={'350px'} height={'350px'} style={{ marginTop: '150px' }} /></center>
                </Card>
            </Box>
            <Box>
                <form style={{ width: '400px', marginLeft: '740px', marginTop: '-550px', padding: '50px 30px 40px 50px' }}>
                    <Stack spacing='3' >
                        <FormControl>
                            <FormLabel size='lg' fontWeight='bold' fontSize='30px'> SIGNUP    </FormLabel>
                            <Text>this is a good websire and it is used for the signup</Text>

                            <FormLabel mt='15px'>First Name</FormLabel>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <MdPerson color='gray' style={{ marginTop: '-6px' }} />
                                </InputLeftElement>
                                <Input type='name' placeholder='First Name' size='sm' borderRadius={'30px'} />
                            </InputGroup>
                        </FormControl>
                        <FormControl>

                            <FormLabel size='sm'>Last Name</FormLabel>

                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <MdPerson color='gray' style={{ marginTop: '-6px' }} />
                                </InputLeftElement>
                                <Input type='name' placeholder='Last Name' size='sm' borderRadius={'30px'} />
                            </InputGroup>

                        </FormControl>
                        <FormControl>

                            <FormLabel size='sm'>Mobile Number</FormLabel>

                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    < PhoneIcon color='gray' style={{ marginTop: '-6px' }} />
                                </InputLeftElement>
                                <Input type='number' placeholder='Mobile Number' size='sm' borderRadius={'30px'} />
                            </InputGroup>

                        </FormControl>
                        <FormControl>

                            <FormLabel size='sm'>Email</FormLabel>

                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <EmailIcon color='gray' style={{ marginTop: '-6px' }} />
                                </InputLeftElement>
                                <Input type='email' placeholder='Email' size='sm' borderRadius={'30px'} />
                            </InputGroup>

                        </FormControl>

                        <Button backgroundColor={'#413EF7'} mt={10} borderRadius={20} color={'white'}> Sign Up</Button>

                    </Stack>
                </form>

            </Box>
        </div>
    )
}

export default Signup