"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Mainpage from "@/components/mainpage";
import Sidebar from "@/components/sidebar";
import { Container ,Box ,Flex } from "@chakra-ui/react";



export default function Home() {

  return (
    <div className="">

<Container w={"90%"} borderWidth={"2px"}>

  <Box  ><Header/></Box>
  <Flex gap="4" direction="row" mt={7} height={"600px"}>
  <Box w={"25%"} borderWidth={"2px"}><Sidebar/></Box>
  <Box w={"75%"} borderWidth={"2px"} ><Mainpage/></Box>
    </Flex>
  <Box   borderWidth={"2px"}><Footer/></Box>



</Container>

    </div>
  );
}
