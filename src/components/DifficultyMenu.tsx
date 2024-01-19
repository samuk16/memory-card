import { Button } from "./Button.tsx";
import { Header } from "./Header.tsx";
import { setDifficult, setSkinsState } from "../utils/fetchData.ts";
import { Form, redirect, useNavigate } from "react-router-dom";
function DifficultyMenu() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-between w-screen h-screen dinamic-bg-bgDifficultMenu-webp bg-no-repeat bg-cover">
      <div className="absolute w-full h-full opacity-60 bg-gradient-to-b from-[#0A1428] to-[#091428]"></div>
      <Header />
      <div className="flex items-center justify-center flex-col gap-10 relative h-full">
        <h2 className="text-[#C8AA6E] text-3xl">CHOOSE DIFFICULTY</h2>

        <Form
          id="dificultyForm"
          method="post"
          className="flex gap-10 flex-col items-center"
        >
          {/* <div></div> */}
          {/* <div className="flex gap-10 flex-col h-full"> */}
          <label
            htmlFor="ez"
            className="lab1 relative text-[#A09B8C] flex gap-2 w-100px"
          >
            <input
              type="radio"
              name="difficult"
              id="ez"
              className="inp1 rotate-45 absolute opacity-0 cursor-pointer h-0 w-0"
              value={2}
            />
            EASY
            <span className=" sp1 absolute top-0 left-0 h-20px w-20px"></span>
          </label>
          <label
            htmlFor="md"
            className="lab1 text-[#A09B8C] flex gap-2 w-100px"
          >
            <input
              type="radio"
              name="difficult"
              id="md"
              className="inp1 rotate-45"
              value={5}
            />
            MEDIUM
            <span className=" sp1 absolute top-0 left-0 h-20px w-20px"></span>
          </label>
          <label
            htmlFor="hr"
            className="lab1 text-[#A09B8C] flex gap-2 w-100px"
          >
            <input
              type="radio"
              name="difficult"
              id="hr"
              className="rotate-45"
              value={11}
            />
            HARD
            <span className=" sp1 absolute top-0 left-0 h-20px w-20px"></span>
          </label>

          {/* </div> */}
        </Form>
        <div className="w-300px h-2px bg-[#C8AA6E]"></div>

        <Form
          method="post"
          id="skinsForm"
          className="flex gap-10 flex-col items-center"
        >
          <label
            htmlFor="sk"
            className="lab1 gr text-[#A09B8C] flex gap-2 w-100px"
          >
            <input
              type="checkbox"
              name="skins"
              id="sk"
              className="rotate-45"
              value={"true"}
            />
            SKINS
            <span className=" sp1 absolute top-0 left-0 h-20px w-20px"></span>
          </label>
        </Form>
      </div>
      <div className="relative self-center">
        {/* <Link to={"/"} className="w-fit no-underline"> */}
        <Button variant="cancel" children="" onClick={() => navigate(-1)} />
        {/* </Link> */}
        {/* <Link to={"/game"} className="w-fit no-underline"> */}
        <Button
          variant="confirm"
          children="CONFIRM"
          type="submit"
          form="dificultyForm"
        ></Button>
        {/* </Link> */}
      </div>

      <footer className="self-center p-10px text-xs font-spiegel">
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
interface ActionData {
  request: Request;
}
export async function action({ request }: ActionData) {
  const formData = await request.formData();
  setDifficult(
    parseInt(formData.get("difficult") ? formData.get("difficult") : "5"),
  );

  const inputSkins = document.getElementById("sk");
  setSkinsState((inputSkins as HTMLInputElement).checked);
  return redirect(`/game`);
}

export { DifficultyMenu };
