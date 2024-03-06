import { Champions } from "./championInterfaces";
import { Champion } from "./championDataInterfaces";
let champions: Champions["data"];
const arrChampiosns: string[] = [];
interface Champion1 {
  name: string;
  skinId: number;
}

const championsArr: string[] = [];
let difficult: number | null = 0;
let skins: boolean;
let arrData: Champion[];
let listChecked: string[] = [];
async function fetchData(): Promise<void> {
  try {
    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json`,
      { mode: "cors" },
    );

    const championsData: Champions = await response.json();

    champions = championsData.data;
    extractCh();
  } catch (error) {
    console.log(error);
  }
}

async function getDataChampion(name: string): Promise<Champion> {
  try {
    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion/${name}.json`,
      { mode: "cors" },
    );
    const championData = await response.json();
    return championData.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getDataForNames(): Promise<void> {
  try {
    await fetchData();
    getChampions(getDifficult());
    const promises = listChecked.map(getDataChampion);
    // const results = await Promise.all(promises);
    const results = await Promise.all(
      promises.map((p) =>
        p.catch((e) => {
          console.log(e);
          return undefined;
        }),
      ),
    );
    arrData = results.filter((result) => result !== undefined) as Champion[];
  } catch (error) {
    console.log(error);
  }
}
function getRandomSkinId(objs: Champion[], arrNames: string[]) {
  let objData;
  const arrData: Champion1[] = [];
  for (let i = 0; i < arrNames.length; i++) {
    objData = {
      name: objs[i][arrNames[i]].id,
      skinId:
        objs[i][arrNames[i]].skins[
          Math.floor(Math.random() * objs[i][arrNames[i]].skins.length)
        ].num,
    };
    arrData.push(objData);
  }

  return arrData;
}

function getAllDataChampions() {
  return getRandomSkinId(arrData, listChecked);
}
function getChampions(difficult: number | null) {
  if (!difficult) return;
  if (championsArr.length > 0) {
    championsArr.splice(0, championsArr.length);
  }
  for (let i = 0; i <= difficult; i++) {
    championsArr.push(getRandomChampions());
  }
  listChecked = checkListNames(championsArr);
  return listChecked;
}

function checkListNames(names: string[]) {
  const uniqueNames = new Set(names);
  if (uniqueNames.size !== names.length) {
    for (let i = 0; i <= names.length - uniqueNames.size; i++) {
      uniqueNames.add(getRandomChampions());
    }
  }
  return Array.from(uniqueNames);
}

function getRandomChampions() {
  return arrChampiosns[Math.floor(Math.random() * arrChampiosns.length)];
}

function extractCh() {
  // console.log(champions);
  for (const key in champions) {
    if (Object.prototype.hasOwnProperty.call(champions, key)) {
      const childObj = champions[key as keyof Champions];
      if (Object.prototype.hasOwnProperty.call(childObj, "name")) {
        arrChampiosns.push(childObj.id);
      }
    }
  }
}

function setDifficult(difficultN: number | null) {
  difficult = difficultN;
}

function getDifficult() {
  return difficult;
}

function setSkinsState(state: boolean) {
  skins = state;
}

function getSkinsState() {
  return skins;
}

function shuffleArray(array: Champion1[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  // console.log(array);
  return array;
}

export {
  fetchData,
  getRandomChampions,
  championsArr,
  getChampions,
  setDifficult,
  getDifficult,
  getDataForNames,
  listChecked,
  setSkinsState,
  getAllDataChampions,
  getSkinsState,
  shuffleArray,
};
