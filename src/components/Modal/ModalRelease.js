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


export function ModalRelease() {
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
          {/* <ModalOverlay /> */}
          <ModalContent>
            <ModalCloseButton />
            <Flex
            w='md'
            h='3xs'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            >
              <Heading 
                fontFamily='Poppins' 
                fontWeight='bold' 
                fontSize='5xl'
                >Oh, no!
              </Heading>
              <Text fontWeight='bold'>
                O Pokémon foi removido da sua Pokédex
              </Text>
            </Flex>
          </ModalContent>
        </Modal>
      </>
    )
  }