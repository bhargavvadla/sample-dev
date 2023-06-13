import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import reset from "../Images/reset.svg";
import { FormControl, FormLabel, Text } from "@chakra-ui/react";
import { InputGroup, Button, InputLeftElement, Input } from "@chakra-ui/react";
import { LockIcon } from "@chakra-ui/icons";
const Reset = () => {
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
          <center>
            <img
              src={reset}
              alt="reset"
              width={"250px"}
              height={"250px"}
              style={{ marginTop: "130px" }}
            />
          </center>
        </Card>
      </Box>
      <Box>
        <form
          style={{
            width: "470px",
            marginLeft: "690px",
            marginTop: "-480px",
            padding: "50px 30px 40px 50px",
          }}
        >
          <Stack spacing="3">
            <FormControl>
              <FormLabel size="lg" fontWeight="bold" fontSize="26px">
                Reset Password
              </FormLabel>
              <Text style={{ fontSize: "14px" }}>
                Set new password for your account so you can login and access
                all the features
              </Text>
              <FormLabel style={{ marginTop: "15px" }}>Password</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <LockIcon color="gray.300" style={{ marginTop: "-3px" }} />
                </InputLeftElement>
                <Input
                  type="password"
                  placeholder="password"
                  size="md"
                  borderRadius={"30px"}
                />
              </InputGroup>
              <FormLabel style={{ marginTop: "10px" }}>
                Confirm Password
              </FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <LockIcon color="gray.300" style={{ marginTop: "-3px" }} />
                </InputLeftElement>
                <Input
                  type="password"
                  placeholder="password"
                  size="md"
                  borderRadius={"30px"}
                />
              </InputGroup>
              <Button
                bg="#413EF7"
                color="white"
                size="md"
                width="100%"
                marginTop="25px"
                borderRadius="30px"
              >
                RESET PASSWORD
              </Button>
            </FormControl>
          </Stack>
        </form>
      </Box>
    </div>
  );
};

export default Reset;
