import { Card, Heading, Stack } from "@chakra-ui/react"



export default function Sidebar(){

    return (
        <>
<Stack>
    <Card.Root size="lg">
        <Card.Header>
        <Heading size="xl"> Forms </Heading>
        </Card.Header>

    </Card.Root>

    <Card.Root size="lg">
        <Card.Header>
        <Heading size="xl"> Table </Heading>
        </Card.Header>

    </Card.Root>

    <Card.Root size="lg">
        <Card.Header>
        <Heading size="xl"> Filters </Heading>
        </Card.Header>

    </Card.Root>
    <Card.Root size="lg">
        <Card.Header>
        <Heading size="xl"> Calculations  </Heading>
        </Card.Header>

    </Card.Root>
    </Stack>

    </>
    )
}