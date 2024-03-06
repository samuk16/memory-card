import { useState, useEffect, useRef } from "react";
import React from "react";
import { getSkinsState, shuffleArray } from "../utils/fetchData";
import { Card } from "./Card";
import { useLoaderData } from "react-router-dom";
import { PageLoading } from "./PageLoading";
import { EndGame } from "./EndGame";
interface loaderData {
  name: string;
  skinId: number;
}

interface victoryState {
  victory: boolean;
  lose: boolean;
}

class GameTimer {
  private startTime: number;
  private endTime: number | null;
  constructor() {
    this.startTime = 0;
    this.endTime = null;
  }

  start(): void {
    this.startTime = Date.now();
    this.endTime = null;
  }

  stop(): number {
    if (!this.endTime) {
      this.endTime = Date.now();
    }
    return this.getElapsetTime();
  }
  getElapsetTime(): number {
    if (this.endTime) {
      return Math.floor((this.endTime - this.startTime) / 1000);
    }
    return Math.floor((Date.now() - this.startTime) / 1000);
  }
}
const gameTimer = new GameTimer();
function GameBoard() {
  const gameTimerRef = useRef(gameTimer);
  const timer = gameTimerRef.current;
  useEffect(() => {
    timer.start();
    return () => {
      timer.stop();
    };
  }, [timer]);
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
          setVictoryStatus({ ...victoryStatus, victory: true });
          setCounterState(0);

          finalResult();
        }
      }
    } else {
      setVictoryStatus({ ...victoryStatus, lose: true });

      finalResult();
    }
    shuffleArray(champions);
  };
  function loadImage(name: string, skinId: number): Promise<HTMLImageElement> {
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
      setLoading(false);
    })
    .catch((error) => console.log(error));

  function getRatingBasedOnTime(timeInSeconds: number): string {
    if (timeInSeconds < 30) {
      return "S+";
    } else if (timeInSeconds < 45) {
      return "S";
    } else if (timeInSeconds < 60) {
      return "A";
    } else if (timeInSeconds < 75) {
      return "B";
    } else if (timeInSeconds < 80) {
      return "C";
    } else {
      return "D";
    }
  }

  function finalResult() {
    const timeTaken = gameTimer.stop();
    const finalRating = getRatingBasedOnTime(timeTaken);
    return finalRating;
  }

  return (
    <>
      <div className="fixed w-full h-full opacity-50 bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-[#000000] z-1"></div>
      <div className="flex justify-center items-center w-screen sm:h-screen dinamic-bg-bgGameBoard-webp bg-cover">
        {loading && <PageLoading variant="l2" />}
        <div className="absolute top-100px right-1/2 translate-x-1/2 w-200px h-68px border-none dinamic-bg-bgBorderSquareXl3-svg bg-contain bg-no-repeat z-10 text-4xl flex items-center justify-center text-[#ffffffde]">
          <p>{counterState + " / " + champions.length}</p>
        </div>
        {victoryStatus.victory ? (
          <EndGame finalGrade={finalResult()} title="VICTORY" />
        ) : victoryStatus.lose ? (
          <EndGame finalGrade="D" title="DEFEAT" />
        ) : (
          ""
        )}

        <div className="flex items-center justify-center relative z-10 sm:pt-80px mt-46 mb-20 sm:mt-0 sm:mb-0">
          <div className="flex items-center justify-center flex-wrap gap-10 max-w-[1423px]">
            {}
            {champions.map((objChampion, index) => (
              <Card
                name={objChampion.name}
                skinId={getSkinsState() ? objChampion.skinId : 0}
                key={index}
                onClick={(e) => handleClick(e)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export { GameBoard };
