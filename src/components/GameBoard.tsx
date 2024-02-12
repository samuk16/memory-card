import { useState } from "react";
import React from "react";
import {
  getDataForNames,
  getAllDataChampions,
  getSkinsState,
  shuffleArray,
} from "../utils/fetchData";
import { Card } from "./Card";
// import { Header } from "./Header";
// import { useLoaderData, useNavigation } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { PageLoading } from "./PageLoading";
import { EndGame } from "./EndGame";
interface loaderData {
  name: string;
  skinId: string;
}

interface victoryState {
  victory: boolean;
  lose: boolean;
}
function GameBoard() {
  // const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [counterState, setCounterState] = useState(0);
  const [victoryStatus, setVictoryStatus] = useState<victoryState>({
    victory: false,
    lose: false,
  });
  const [arrState, setArrayState] = useState(new Set<string>());

  const champions = useLoaderData() as loaderData[];
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const cardName: string = e.currentTarget.dataset.card ?? "";

    if (!arrState.has(cardName)) {
      if (cardName !== undefined) {
        setArrayState(arrState.add(cardName));
        setCounterState(counterState + 1);
        if (counterState > 0 && counterState + 1 === champions.length) {
          console.log("ganaste");
          setVictoryStatus({ ...victoryStatus, victory: true });
          setCounterState(0);
        }
      }
    } else {
      console.log("perdiste");
      setVictoryStatus({ ...victoryStatus, lose: true });
    }
    shuffleArray(champions);
  };

  function loadImage(name: string, skinId: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => {
        resolve(image);
      };
      image.onerror = () => {
        reject(
          new Error(
            `Failed to load image with name ${name} and skinId ${skinId}`,
          ),
        );
      };
      image.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_${skinId}.jpg`;
    });
  }
  const imageLoadPromises = champions.map((objChampion) =>
    loadImage(objChampion.name, objChampion.skinId),
  );
  Promise.all(imageLoadPromises)
    .then(() => {
      console.log("Imagenes cargadas");
      setLoading(false);
    })
    .catch((error) => console.log(error));

  return (
    // <div className="flex flex-col justify-between w-screen h-screen dinamic-bg-bgGameBoard-webp bg-no-repeat bg-cover">
    <div className="flex justify-center items-center w-screen h-screen dinamic-bg-bgGameBoard-webp bg-no-repeat bg-cover">
      <EndGame />
      {/* {loading ? "" : (pageLoadingElement.style.display = "none")} */}
      {loading && <PageLoading variant="l2" />}
      <div className="absolute w-full h-full opacity-50 bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-[#000000] z-1"></div>
      {/* <Header /> */}
      <div className="absolute top-100px right-1/2 translate-x-1/2 w-200px h-68px border-none dinamic-bg-bgBorderSquareXl3-svg bg-contain bg-no-repeat z-10 text-4xl flex items-center justify-center">
        <p>{counterState + " / " + champions.length}</p>
      </div>
      <div className="absolute top-170px right-1/2 translate-x-1/2 w-200px h-68px border-none z-11 text-4xl flex items-center justify-center">
        <p>
          {victoryStatus.victory
            ? "Ganaste"
            : victoryStatus.lose
              ? "Perdiste"
              : ""}
        </p>
      </div>
      <div className="flex items-center justify-center relative z-10 pt-80px">
        <div className="flex items-center justify-center flex-wrap gap-10 max-w-[1423px]">
          {champions.map((objChampion, index) => (
            <Card
              name={objChampion.name}
              skinId={getSkinsState() ? objChampion.skinId : "0"}
              key={index}
              onClick={(e) => handleClick(e)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export { GameBoard };

export async function loader() {
  await getDataForNames();
  const champions = getAllDataChampions();
  return champions;
}
