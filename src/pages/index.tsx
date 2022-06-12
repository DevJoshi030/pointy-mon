import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import type { Data } from "@/pages/api/getPokemon";
import { getImageLink } from "@/utils/getImageLink";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/getPokemon");
  const data: Data = await res.json();
  return {
    props: {
      firstId: data.firstId,
      secondId: data.secondId,
      firstPokeName: data.firstPokeName,
      secondPokeName: data.secondPokeName,
    },
  };
};

const Home: NextPage<Data> = ({
  firstId,
  secondId,
  firstPokeName,
  secondPokeName,
}) => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text text-2xl p-2">Which is more pointy?</div>
      <div className="flex max-w-2xl justify-between p-8 items-center">
        <div className="flex flex-col">
          <div className="text text-2xl p-2 self-center">{firstPokeName}</div>
          <div className="w-36 h-36 border rounded-full">
            <Image src={getImageLink(firstId)} width="144px" height="144px" />
          </div>
          <button className="border rounded-full m-2">Choose</button>
        </div>
        <div className="p-8 text text-xl">vs</div>
        <div className="flex flex-col">
          <div className="w-text text-2xl p-2 self-center">
            {secondPokeName}
          </div>
          <div className="w-36 h-36 border rounded-full">
            <Image src={getImageLink(secondId)} width="144px" height="144px" />
          </div>
          <button className="border rounded-full m-2">Choose</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
