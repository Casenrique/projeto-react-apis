import {
  Heading,
  Box,
  Center,
  Flex,
  Text,
  Stack,
  Button,
  Link,
  Image,
  HStack,
  Progress,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import CardBackground from "../../assets/pokeball-details.svg"
import { searchPokemonTypes } from '../../utils/SearchPokemonTypes';
import { searchCardColor } from '../../utils/SearchCardColor';
import { goToDetailPage } from '../../Router/coordinates';
import { GlobalContext } from '../../contexts/GlobalContext';


export default function PokeDetailsCard({ addToPokedex, removeFromPokedex }) {

  const [currentPokemon, setCurrentPokemon] = useState({})
  const location = useLocation()
  const navigate = useNavigate()
  const params = useParams()
  const context = useContext(GlobalContext) 
  const { BASE_URL } = context

  
  const fetchCurrentPokemon = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/pokemon/${params.pokemonName}`)
      console.log(response.data)
      console.log(response.data.moves[0].move.name)
      setCurrentPokemon(response.data)
    } catch (error) {
      console.log("Problemas na busca da lista de pokemons")
      console.log(error)
    }
  }
  
  useEffect(() => {
    fetchCurrentPokemon()
  }, [])

  return (
    <Flex padding={'25px'} flexDirection={'column'}>
      <Box
        // maxW={'1389px'}
        minW={'1389px'}
        h={'663px'}
        // marginTop={'50px'}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={'16px'}
        display='flex'
        
        position={'relative'}
        bg={currentPokemon.types && searchCardColor(currentPokemon.types[0]?.type?.name)}
        bgImage={CardBackground}
        bgPosition={'right'}
        bgSize={"contain"}
        bgRepeat={"no-repeat"}     
      >
        <Box align={'left'} justify={'space-between'} flexDirection={'row'} display={"flex"} my={'26px'} mx={'44px'} >
          <Flex direction={'column'} h='631px'>
            <Center w={"282px"} h={"282px"} bgColor='white' rounded={'lg'}>
              <Image boxSize={100} src={currentPokemon.sprites && currentPokemon.sprites?.versions["generation-v"]['black-white'].animated.front_default}
            alt={currentPokemon.name} />
            </Center>
            <Center w={"282px"} h={"282px"} bgColor='white' mt={'36px'} rounded={'lg'}>
              <Image boxSize={100} src={currentPokemon.sprites && currentPokemon.sprites?.versions["generation-v"]['black-white'].animated.back_default}
            alt={currentPokemon.name} />
            </Center>
          </Flex>
          <Box display={'flex'} flexDirection='column' w={"343px"} h={"600px"} bgColor='white' mx={"44px"} rounded={'lg'} p={'16px'}>
            <Heading>
              Base Stats
            </Heading>
            <hr/>
            {
              currentPokemon.stats && currentPokemon.stats
              .map((stats, index) => (
              <HStack spacing={'5px'} my={'0.5'} display='flex' padding={1} justifyContent={'flex-end'}>
                <Text as='p' flexGrow={0} fontSize={10}>
                  {currentPokemon.stats && currentPokemon.stats[index].stat.name.toUpperCase()}
                </Text>
                <Text flexGrow={0} fontSize={10} alignSelf={"flex-end"}>
                  {currentPokemon.stats && currentPokemon.stats[index]['base_stat']}
                </Text>
                <Progress maxW={'200px'} flexGrow={2} value={currentPokemon.stats && currentPokemon.stats[index]['base_stat']} size={'lg'} >{currentPokemon.stats && currentPokemon.stats[index]['base_stat']}</Progress>
              </HStack>
              ))
            }   
            <hr/>         
          </Box>          
        </Box>
        <Box display={'flex'} >
          <Image
            boxSize={'xs'}
            position="absolute"
            top={"-200px"}
            right={0}
            src={currentPokemon.sprites && currentPokemon.sprites?.other.home.front_default}
            alt={currentPokemon.name}
          />
          <Box display={"flex"} flexDirection={'column'}>
            <Text fontFamily='Inter' fontSize='16px' fontStyle="normal" fontWeight={'700'} lineHeight='19px' color='#FFFFFF'>
              #0{currentPokemon.id}
            </Text>
            <Text fontFamily='Inter' fontSize='32px' fontStyle="normal" fontWeight={'700'} lineHeight='39px' color='#FFFFFF' marginBottom={'10px'}>
              {currentPokemon.name && (currentPokemon.name.charAt(0)?.toUpperCase() + currentPokemon.name.slice(1))}
            </Text>
            <Box marginBottom={'50px'} display={'flex'} gap={'5px'}>
              <Image src={currentPokemon.types && searchPokemonTypes(currentPokemon.types[0].type.name)} alt={''} />
              <Image src={currentPokemon.types && searchPokemonTypes(currentPokemon.types[1]?.type?.name)} alt={''} />
            </Box>
            <Box w={"292px"} h={"453px"} bgColor='white' rounded={'lg'}>
              <Text fontFamily='Inter' fontSize='24px' fontStyle="normal" fontWeight={'800'} lineHeight='29px' color='#000000' margin={'16px'}>
                Moves:
              </Text>
              <Flex p={7} wrap='wrap' maxW={'292px'} gap={2} >
                {currentPokemon.moves && currentPokemon.moves
                .filter((move, index) => index <= 15)
                .map((move, index)=> (
                  <Flex 
                  key={move.move.id}                  
                  w={28} 
                  h={9} 
                  border="1px dashed rgba(0, 0, 0, 0.14)" 
                  bg={"#ECECEC"} 
                  rounded={'lg'} 
                  alignItems='center' 
                  justifyContent='center'
                  >
                    {currentPokemon.moves && currentPokemon.moves[index]?.move?.name}
                  </Flex>

                ))
                }
              
              </Flex>
            </Box> 
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}