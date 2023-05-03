import React from 'react'
import {
    Drawer, 
    DrawerBody,
    DrawerHeader, 
    DrawerCloseButton, 
    DrawerContent , 
    DrawerOverlay, 
Button,
useDisclosure} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import { BiMenuAltLeft} from "react-icons/bi"
import { VStack } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';

const Header = () => {
    const {isOpen, onOpen, onClose}= useDisclosure()
  return (
    <>
    <Button
    pos={"fixed"}
    top={"4"}
    left={"4"}
    colorScheme='purple'
    padding={"0"}
    width={"10"}
    height={"10"}
    zIndex={"overlay"}
    borderRadius={"full"}
    onClick={onOpen}>
        <BiMenuAltLeft size={'20'}></BiMenuAltLeft>
    </Button>
    <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay>
        </DrawerOverlay>
        <DrawerContent>
            <DrawerCloseButton></DrawerCloseButton>
            <DrawerHeader>Video Hub</DrawerHeader>
            <DrawerBody>
                <VStack alignItems={'flex-start'}>
                    <Button onClick={onClose}  variant={"ghost"} colorScheme={'purple'}>
                        <Link to={'/'}>Home</Link>
                    </Button>
                    <Button onClick={onClose}  variant={"ghost"} colorScheme={'purple'}>
                        <Link to={'/videos'}>Videos</Link>
                    </Button>
                    <Button onClick={onClose}  variant={"ghost"} colorScheme={'purple'}>
                        <Link to={'/videos?category=free'}>Free Videos</Link>
                    </Button>
                    <Button onClick={onClose}  variant={"ghost"} colorScheme={'purple'}>
                        <Link to={'/upload'}>Upload Video</Link>
                    </Button>
                </VStack>
                <HStack 
                position={'absolute'}
                bottom={"10"} 
                left={'0'}
                width={"full"}
                justifyContent={"space-evenly"}>
                    <Button onClick={onClose}  colorScheme={'purple'}> 
                        <Link to={'/login'}>Login</Link>
                    </Button>
                    <Button onClick={onClose} colorScheme={'purple'} variant={'outline'}>
                        <Link to={'/signup'} >Sign Up</Link>
                    </Button>
                </HStack>
            </DrawerBody>
        </DrawerContent>
    </Drawer>
    </>
  )
}

export default Header