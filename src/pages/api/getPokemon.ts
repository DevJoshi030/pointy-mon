// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { generateRandomIds } from "@/utils/generateRandomIds";
import type { NextApiRequest, NextApiResponse } from "next";
import { PokemonClient } from "pokenode-ts";

export type Data = {
  firstId: number;
  secondId: number;
  firstPokeName: string;
  secondPokeName: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req);
  const [firstId, secondId] = generateRandomIds();
  console.log(firstId, secondId);
  const api = new PokemonClient();

  const firstPoke = await api.getPokemonById(firstId);
  const secondPoke = await api.getPokemonById(secondId);

  console.log(firstPoke.name, secondPoke.name);
  const firstPokeName = firstPoke.name;
  const secondPokeName = secondPoke.name;
  res.status(200).json({ firstId, secondId, firstPokeName, secondPokeName });
}
