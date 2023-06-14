import React from 'react';
import { Box, Card, Image, HStack, FormLabel, Text, Button } from '@chakra-ui/react';
import otpi from '../../images/otp.svg'
import { PinInput, PinInputField } from '@chakra-ui/react';

const Otp = () => {
    return (
        <div>
            <Box>
                <Card
                    style={{
                        width: '600px',
                        height: '600px',
                        top: '25px',
                        left: '40px',
                        background: '#413EF7',
                        borderRadius: '30px 0px 30px 0px',
                    }}
                >
                    <center>
                        {' '}
                        <Image src={otpi} width={'350px'} height={'350px'} style={{ marginTop: '150px' }}></Image>
                    </center>
                </Card>
            </Box>

            <Box>
                <form style={{ width: '400px', marginLeft: '740px', marginTop: '-550px', padding: '50px 0px 0px 50px' }}>
                    <FormLabel size="lg" fontWeight="bold" fontSize="30px" marginTop="100px">
                        Forgot Password
                    </FormLabel>
                    <Box whiteSpace="nowrap" mt={2}>
                        <Text>Enter 6 digit code that you received on your email?</Text>
                    </Box>
                    <HStack mt={5}>
                        <PinInput>
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                        </PinInput>
                    </HStack>

                    <Button backgroundColor={'#413EF7'} mt={10} borderRadius={20} w={300} color={'white'}> Continue</Button>

                </form>
            </Box>
        </div>
    );
};

export default Otp;
