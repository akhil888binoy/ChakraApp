import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { Container, VStack , HStack } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'

const Upload = () => {
  return (
    <Container 
    maxW={"container.xl"}
    h={"100vh"} 
    p={"16"}>
        <VStack 
        color={"purple.500"} 
        h={"full"}
        justifyContent={"center"}>
            <AiOutlineCloudUpload size={"10vmax"}/>
            <form action="">
                <HStack>
                    <Input required type={"file"} css={{
                        "&::file-selector-button":{
                            border:"none",
                            width: "calc(100% + 36px)",
                            height:"100%",
                            color:"purple",
                            backgroundColor:"white",
                            marginLeft:"-18px",
                            cursor:"pointer"
                        }
                    }}></Input>
                    <Button colorScheme='purple'>Upload</Button>
                </HStack>
            </form>
        </VStack>
    </Container>
  )
}

export default Upload