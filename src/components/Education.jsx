import { Flex, Text } from "@radix-ui/themes";

export default function Education({ education }) {

    return (
        <Flex py="1" direction="column">
            <Flex direction="row" justify="between">
                <Text size="3" weight="medium" >{education.school}</Text>
                <Text size="2" color="gray" align="right">{education.start} - {education.end}</Text>
            </Flex>
            <Text size="1" color="gray" className="Consolas">{education.degree}</Text>
        </Flex>
    )
}