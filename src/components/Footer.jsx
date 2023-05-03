import { Box } from '@chakra-ui/react'
import React from 'react'
import { Heading } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { VStack } from '@chakra-ui/react'
import { HStack } from '@chakra-ui/react'
import {AiOutlineSend} from "react-icons/ai"
import { Button } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

const Footer = () => {
return (
    <Box bgColor={"blackAlpha.900"} minH={"40"} p="16" color={"white"}>
        <Stack direction={['column', 'row']}>
            <VStack alignItems={'strech'} w={"full"} px={'4'}>
                <Heading 
                size="md"
                textTransform={"uppercase"} 
                textAlign={["center","left" ]}>
                    Subscribe to get updates
                </Heading>
                <HStack 
                borderBottom={"2px solid white"}>
                    <Input 
                    placeholder='enter email'
                    border={"none"}
                    borderRadius={"none"}
                    outline={"none"}
                    focusBorderColor='none'></Input>
                    <Button
                    p={"0"}
                    colorScheme={'purple'}
                    variant={"ghost"}
                    borderRadius={"0 20px 20px 0"}>
                        <AiOutlineSend size={20}></AiOutlineSend>
                    </Button>
                </HStack>
            </VStack>
            <VStack w="full" borderLeft={["none","1px solid white"]}
            borderRight={["none","1px solid white"]}> 
            <Heading 
            size={"md"} 
            textTransform={"uppercase"} 
            textAlign={"center"}> Video HUb</Heading>  
            <Text>All Rights Rsserved</Text>
            </VStack>
            <VStack w="full"> 
                    <Heading size={"md"} textTransform={"uppercase"}>Social Media</Heading>  
                <Button variant={"link"} colorScheme={'white'}>
                    <a target='blank' href="https://youtube.com"> Youtube</a>
                </Button>
                <Button variant={"link"} colorScheme={'white'}>
                    <a target='blank' href="https://youtube.com"> Instagram</a>
                </Button>
                <Button variant={"link"} colorScheme={'white'}>
                    <a target='blank' href="https://youtube.com"> Github</a>
                </Button>

            </VStack>
        </Stack>
    </Box>
    )
}

export default Footer