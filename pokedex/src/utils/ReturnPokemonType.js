import bug from "../assets/poke-types/bug.png";
import dark from "../assets/poke-types/dark.png";
import dragon from "../assets/poke-types/dragon.png";
import electric from "../assets/poke-types/electric.png";
import fairy from "../assets/poke-types/fairy.png";
import fighting from "../assets/poke-types/fighting.png";
import fire from "../assets/poke-types/fire.png";
import flying from "../assets/poke-types/flying.png";
import ghost from "../assets/poke-types/ghost.png";
import grass from "../assets/poke-types/grass.png";
import ground from "../assets/poke-types/ground.png";
import ice from "../assets/poke-types/ice.png";
import normal from "../assets/poke-types/normal.png";
import poison from "../assets/poke-types/poison.png";
import psychic from "../assets/poke-types/psychic.png";
import rock from "../assets/poke-types/rock.png";
import steel from "../assets/poke-types/steel.png";
import water from "../assets/poke-types/water.png";

  export const getTypes = (type) => {
    switch(type) {
      case "bug":
        return bug;
      case "bark":
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
        return water;
    }
  };

