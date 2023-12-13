import { Header } from "./Header";

function GameBoard() {
  return (
    <div className="flex flex-col justify-between w-screen h-screen dinamic-bg-bgGameBoard-webp bg-no-repeat bg-cover">
      <Header />
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center flex-wrap gap-10 max-w-[1423px]">
          <div className="flex flex-col justify-end shadow-xl dinamic-bg-ch1-jpg bg-no-repeat bg-cover bg-center w-200px h-300px border-2 border-solid border-[#0A323C]">
            <p className="p-3 bg-[#0A1428]">GWEN</p>
          </div>
          <div className="flex flex-col justify-end shadow-xl dinamic-bg-ch2-jpg bg-no-repeat bg-cover bg-center w-200px h-300px border-2 border-solid border-[#0A323C]">
            <p className="p-3 bg-[#0A1428]">KAI'SA</p>
          </div>
          <div className="flex flex-col justify-end shadow-xl dinamic-bg-ch3-jpg bg-no-repeat bg-cover bg-center w-200px h-300px border-2 border-solid border-[#0A323C]">
            <p className="p-3 bg-[#0A1428]">KENNEN</p>
          </div>
          {/* <div className="flex flex-col justify-end shadow-xl dinamic-bg-ch3-jpg bg-no-repeat bg-cover bg-center w-200px h-300px border-2 border-solid border-[#0A323C]">
            <p className="p-3 bg-[#0A1428]">KENNEN</p>
          </div>
          <div className="flex flex-col justify-end shadow-xl dinamic-bg-ch3-jpg bg-no-repeat bg-cover bg-center w-200px h-300px border-2 border-solid border-[#0A323C]">
            <p className="p-3 bg-[#0A1428]">KENNEN</p>
          </div>
          <div className="flex flex-col justify-end shadow-xl dinamic-bg-ch3-jpg bg-no-repeat bg-cover bg-center w-200px h-300px border-2 border-solid border-[#0A323C]">
            <p className="p-3 bg-[#0A1428]">KENNEN</p>
          </div> */}
          {/* <div className="flex flex-col justify-end shadow-xl dinamic-bg-ch3-jpg bg-no-repeat bg-cover bg-center w-200px h-300px border-2 border-solid border-[#0A323C]">
            <p className="p-3 bg-[#0A1428]">KENNEN</p>
          </div>
          <div className="flex flex-col justify-end shadow-xl dinamic-bg-ch3-jpg bg-no-repeat bg-cover bg-center w-200px h-300px border-2 border-solid border-[#0A323C]">
            <p className="p-3 bg-[#0A1428]">KENNEN</p>
          </div>
          <div className="flex flex-col justify-end shadow-xl dinamic-bg-ch3-jpg bg-no-repeat bg-cover bg-center w-200px h-300px border-2 border-solid border-[#0A323C]">
            <p className="p-3 bg-[#0A1428]">KENNEN</p>
          </div>
          <div className="flex flex-col justify-end shadow-xl dinamic-bg-ch3-jpg bg-no-repeat bg-cover bg-center w-200px h-300px border-2 border-solid border-[#0A323C]">
            <p className="p-3 bg-[#0A1428]">KENNEN</p>
          </div>
          <div className="flex flex-col justify-end shadow-xl dinamic-bg-ch3-jpg bg-no-repeat bg-cover bg-center w-200px h-300px border-2 border-solid border-[#0A323C]">
            <p className="p-3 bg-[#0A1428]">KENNEN</p>
          </div>
          <div className="flex flex-col justify-end shadow-xl dinamic-bg-ch3-jpg bg-no-repeat bg-cover bg-center w-200px h-300px border-2 border-solid border-[#0A323C]">
            <p className="p-3 bg-[#0A1428]">KENNEN</p>
          </div> */}
        </div>
      </div>
      <footer className="self-center p-10px text-xs font-spiegel text-[#A09B8C]">
        Memory Legends is not endorsed by Riot Games and does not reflect the
        views or opinions of Riot Games or anyone officially involved in
        producing or managing Riot Games properties.
        <br />
        Riot Games and all associated properties are trademarks or registered
        trademarks of Riot Games, Inc
      </footer>
    </div>
  );
}

export { GameBoard };
