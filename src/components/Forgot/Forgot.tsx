import React from "react";
import forgot from "../Images/forgot.svg";
import {
  Card,
  Center,
  Box,
  FormControl,
  FormLabel,
  Text,
  Stack,
  Button,
  InputGroup,
  Input,
  InputLeftElement,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

const Forgot = () => {
  return (
    <div>
      <Box>
        <Card
          style={{
            width: "580px",
            height: "530px",
            top: "17px",
            left: "40px",
            background: "#413EF7",
            borderRadius: "30px 0px 30px 0px",
          }}
        >
          <Center>
            {" "}
            <img
              src={forgot}
              alt="forgotpw"
              width={"250px"}
              height={"250px"}
              style={{ marginTop: "140px" }}
            />
          </Center>
        </Card>
      </Box>
      <Box>
        <form
          style={{
            width: "400px",
            marginLeft: "700px",
            marginTop: "-400px",
            padding: "50px 30px 40px 50px",
          }}
        >
          <Stack spacing="2">
            <FormControl>
              <FormLabel size="lg" fontWeight="bold" fontSize="26px">
                Forgot Password
              </FormLabel>
              <Text style={{ fontSize: "14px" }}>
                Enter your email for the verification process we will send 6
                digit code to your email
              </Text>
              <FormLabel>Email</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <EmailIcon color="gray.300" style={{ marginTop: "-3px" }} />
                </InputLeftElement>
                <Input
                  type="email"
                  placeholder="Email"
                  size="md"
                  borderRadius={"30px"}
                />
              </InputGroup>
              <Button
                bg="#413EF7"
                color="white"
                size="md"
                width="100%"
                marginTop="15px"
                borderRadius="30px"
              >
                Continue
              </Button>
            </FormControl>
          </Stack>
        </form>
      </Box>
    </div>
  );
};
export default Forgot;
