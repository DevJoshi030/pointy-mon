// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { generateRandomIds } from "@/utils/generateRandomIds";
import type { NextApiRequest, NextApiResponse } from "next";
import { PokemonClient } from "pokenode-ts";

export type Data = {
  firstPokeName: string;
  secondPokeName: string;
  firstImgLink: string;
  secondImgLink: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req);
  const [first, second] = generateRandomIds();
  console.log(first, second);
  const api = new PokemonClient();

  const firstPoke = await api.getPokemonById(first);
  const secondPoke = await api.getPokemonById(second);

  const firstImgLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${first}.png`;
  const secondImgLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${second}.png`;

  console.log(firstPoke.name, secondPoke.name, firstImgLink, secondImgLink);
  const firstPokeName = firstPoke.name;
  const secondPokeName = secondPoke.name;
  res
    .status(200)
    .json({ firstPokeName, secondPokeName, firstImgLink, secondImgLink });
}
