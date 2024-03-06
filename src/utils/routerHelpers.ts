import { redirect } from "react-router-dom";
import {
  setDifficult,
  setSkinsState,
  getDataForNames,
  getAllDataChampions,
} from "./fetchData";
interface ActionData {
  request: Request;
}
export async function action({ request }: ActionData) {
  const formData = await request.formData();
  setDifficult(parseInt(formData.get("difficult")?.toString() ?? "5"));

  const inputSkins = document.getElementById("sk");
  setSkinsState((inputSkins as HTMLInputElement).checked);
  return redirect(`/game`);
}
export async function loader() {
  await getDataForNames();
  const champions = getAllDataChampions();
  return champions;
}
