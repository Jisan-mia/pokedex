import axios from "axios";

export const fetchEachPokemonData = async (api) => {
  const resData = await axios.get(api);
  return resData.data
}

