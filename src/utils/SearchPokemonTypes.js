import bug from '../assets/types-images/bug.svg'
import dark from '../assets/types-images/dark.svg'
import dragon from '../assets/types-images/dragon.svg'
import electric from '../assets/types-images/electric.svg'
import fairy from '../assets/types-images/fairy.svg'
import fighting from '../assets/types-images/fighting.svg'
import fire from '../assets/types-images/fire.svg'
import flying from '../assets/types-images/flying.svg'
import ghost from '../assets/types-images/ghost.svg'
import grass from '../assets/types-images/grass.svg'
import ground from '../assets/types-images/ground.svg'
import ice from '../assets/types-images/ice.svg'
import normal from '../assets/types-images/normal.svg'
import poison from '../assets/types-images/poison.svg'
import psychic from '../assets/types-images/psychic.svg'
import rock from '../assets/types-images/rock.svg'
import steel from '../assets/types-images/steel.svg'
import water from '../assets/types-images/water.svg'

export const searchPokemonTypes = (type) => {
    switch(type) {
        case "bug":
            return bug;
        case "dark":
            return dark;
        case "dragon":
            return dragon;
        case "electric":
            return electric;
        case "fairy":
            return fairy;
        case "fighting":
            return fighting;
        case "fire":
            return fire;
        case "flying":
            return flying;
        case "ghost":
            return ghost;
        case "grass":
            return grass;
        case "ground":
            return ground;
        case "ice":
            return ice;
        case "normal":
            return normal;
        case "poison":
            return poison;
        case "psychic":
            return psychic;
        case "rock":
            return rock;
        case "steel":
            return steel;
        case "water":
            return water;
        default:
            return null;
    }
}


