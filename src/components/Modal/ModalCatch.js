import { 
    Button, 
    ModalBody, 
    ModalCloseButton, 
    ModalContent, ModalHeader, 
    ModalOverlay, 
    useDisclosure, 
    ModalFooter, 
    Modal, 
    Heading,
    Text,
    Flex
} from "@chakra-ui/react"
import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"


export function ModalCatch() {
    const { isOpen, setIsOpen, onClose } = useContext(GlobalContext)

    return (
      <>
        {/* <Button onClick={onOpen}>Open Modal</Button> */}
  
        <Modal 
          isOpen={isOpen} 
          onClose={() => setIsOpen(false)}
          isCentered
          motionPreset='slideInBottom'
          >
            {/* <ModalOverlay
              bg='none'
              backdropFilter='auto'
              backdropInvert='80%'
              backdropBlur='2px'
          /> */}
          <ModalContent>
            <ModalCloseButton />
            <Flex
            w='md'
            h='3xs'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            >
              <Heading fontFamily='Poppins' fontWeight='bold' fontSize='5xl'>Gotcha</Heading>
              <Text fontWeight='bold'>
                O Pokémon foi adicionado à sua Pokédex
              </Text>
            </Flex>
          </ModalContent>
        </Modal>
      </>
    )
  }