"use client"

import { useState } from "react";
import { Input} from "@chakra-ui/react";
// import { useState } from "react";
export default function PasswordInput({ placeholder = "Enter password" }) {
const [show, setShow] = useState(false);

return (
    <>
    <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder={placeholder}
    />
    {/* <InputElement width="4.5rem">
        {/* <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
        </Button> 
    </InputElement> */}
    </>
  );
}