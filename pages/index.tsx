import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text text-2xl p-2">Which is more pointy than two?</div>
      <div className="flex max-w-2xl justify-between p-8 items-center">
        <div className="flex flex-col">
          <div className="w-36 h-36 bg-slate-400">first</div>
          <button className="border rounded-full m-2">Choose</button>
        </div>
        <div className="p-8 text text-xl">vs</div>
        <div className="flex flex-col">
          <div className="w-36 h-36 bg-slate-400">second</div>
          <button className="border rounded-full m-2">Choose</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
