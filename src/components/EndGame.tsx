import { Button } from "./Button";

function EndGame() {
  return (
    <>
      <div className="absolute w-full h-full z-12 backdrop-blur-sm"></div>
      <div className="absolute w-full h-full  opacity-50 bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-[#000000] z-12"></div>
      <div className="absolute w-502px h-249px dinamic-bg-borderEndGame1-svg bg-transparent border-none flex flex-col items-center justify-between pb-3px pl-2px pt-20px z-13 drop-shadow-[0_0px_0px_rgba(183,157,103,.1)] hover:drop-shadow-[0_0px_15px_rgba(183,157,103,.5)] transition">
        <p className="text-2xl">WIN</p>
        <div className="w-120px h-140px dinamic-bg-bgPoint3-svg bg-transparent border-none bg-no-repeat bg-cover z-10 flex items-center justify-center pb-20px pl-5px">
          <p className="text-4xl">S+</p>
        </div>
        <Button variant="square" children="CONTINUE" />
      </div>
    </>
  );
}

export { EndGame };
// w-160px h-186px
