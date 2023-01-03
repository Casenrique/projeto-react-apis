import {
  Box,
  Flex,
  Text,
  Button,
  Link,
  Image,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CardBackground from "../../assets/pokeball.svg"
import { searchPokemonTypes } from '../../utils/SearchPokemonTypes';
import { searchCardColor } from '../../utils/SearchCardColor';
import { goToDetailPage } from '../../Router/coordinates';


export default function PokemonCard({ urlPokemon, addToPokedex, removeFromPokedex }) {

  const [currentPokemon, setCurrentPokemon] = useState({})
  const location = useLocation()
  const navigate = useNavigate()

  const { isOpen, onOpen, onClose } = useDisclosure()

  const fetchCurrentPokemon = async () => {
    try {
      const response = await axios.get(urlPokemon)
      console.log(response.data)
      // console.log(response.data.types[0].type.name)
      // console.log(response.data.types[1]?.type.name)
      console.log(response.data.moves)
      setCurrentPokemon(response.data)
    } catch (error) {
      console.log("Problemas na busca da lista de pokemons")
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCurrentPokemon()
    searchCardColor()
  }, [])
  return (
    <Flex padding={'25px'}>
      <Box
        maxW={'440px'}
        minW={'400px'}
        h={'210px'}
        marginTop={'50px'}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={'16px'}
        display='flex'
        position={'relative'}
        bg={currentPokemon.types && searchCardColor(currentPokemon.types[0]?.type?.name)}
        bgImage={CardBackground}
        bgPosition={'right'}
        bgSize={"auto"}
        bgRepeat={"no-repeat"}
      >

        <Box flexGrow={1} align={'left'} justify={'space-between'} flexDirection={'column'} display={"flex"} >
          <SkeletonText isLoaded mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
          <Text fontFamily='Inter' fontSize='16px' fontStyle="normal" fontWeight={'700'} lineHeight='19px' color='#FFFFFF'>
            #0{currentPokemon.id}
          </Text>
          <Text fontFamily='Inter' fontSize='32px' fontStyle="normal" fontWeight={'700'} lineHeight='39px' color='#FFFFFF' marginBottom={'10px'}>
            {currentPokemon.name && (currentPokemon.name.charAt(0)?.toUpperCase() + currentPokemon.name.slice(1))}
          </Text>
          <Box marginBottom={'30px'} display={'flex'} gap={'5px'}>
            <Image src={currentPokemon.types && searchPokemonTypes(currentPokemon.types[0].type.name)} alt={''} />
            <Image src={currentPokemon.types && searchPokemonTypes(currentPokemon.types[1]?.type?.name)} alt={''} />
          </Box>
          <Link onClick={() => goToDetailPage(navigate, currentPokemon.name)} fontFamily='Inter' fontSize='16px' fontStyle="normal" fontWeight={'700'} lineHeight='24px' color='#FFFFFF' textDecoration={'underline'}>
            Detalhes
          </Link>
        </Box>
        <Box flexGrow={1} display={'flex'} >
          <SkeletonCircle isLoaded size={'10'} />
          <Image
            boxSize={193}
            position="absolute"
            top={"-100px"}
            right={0}
            src={currentPokemon.sprites && currentPokemon.sprites?.other.home.front_default}
            alt={currentPokemon.name}
          />
          {location.pathname === "/" ? (
            <>
              <Button
                onClick={() => addToPokedex(currentPokemon.name)}
                cursor={"pointer"}
                width='100%'
                alignSelf={'flex-end'}
                // textAlign='center'
                justifyContent={"center"}
                fontSize={'16px'}
                fontFamily='Poppins'
                fontWeight={400}
                lineHeight='24px'
                rounded={'8px'}
                color={'#0F0F0F'}
                colorScheme='whiteAlpha'
              >
                Capturar!
              </Button>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Modal Title</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
TESTE                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                      Close
                    </Button>
                    <Button variant='ghost'>Secondary Action</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </>
          ) : (
            <Button
              onClick={() => removeFromPokedex(currentPokemon.name)}
              cursor={"pointer"}
              width='100%'
              alignSelf={'flex-end'}
              justifyContent={"center"}
              fontSize={'16px'}
              fontFamily='Poppins'
              fontWeight={400}
              lineHeight='24px'
              rounded={'8px'}
              colorScheme='red'
            >
              Excluir
            </Button>
          )
          }

        </Box>
      </Box>
    </Flex>
  );
}