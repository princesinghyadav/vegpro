import { Box ,Heading} from "@chakra-ui/react"



export default function Header(){

    return (

        <Box  bg="bg" shadow="md" borderRadius="md" height={"80px"} mt={5}    textAlign={"Center"}>
    <Heading   p={5}> This is a header page</Heading>
        </Box>
    )
}