import { Button } from "./Button.tsx";
import { Form, Link } from "react-router-dom";

function DifficultyMenu() {
  return (
    <div className="flex flex-col justify-between w-screen h-[100dvh] dinamic-bg-bgDifficultMenu-webp bg-no-repeat bg-cover transition-all">
      <div className="absolute w-full h-[100dvh] opacity-60 bg-gradient-to-b from-[#0A1428] to-[#091428] z-1 transition-all"></div>
      <div className="flex items-center justify-center flex-col gap-10 relative h-[100dvh] z-2 transition-all">
        <h2 className="text-[#C8AA6E] text-3xl">CHOOSE DIFFICULTY</h2>

        <Form
          id="dificultyForm"
          method="post"
          className="flex gap-10 flex-col items-center"
        >
          <label
            htmlFor="ez"
            className="lab1 relative text-[#A09B8C] flex gap-2 w-100px hover:text-[#F0E6D2] transition-colors ease-in-out has-[:checked]:text-[#F0E6D2]"
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
            className="lab1 text-[#A09B8C] flex gap-2 w-100px hover:text-[#F0E6D2] transition-colors ease-in-out has-[:checked]:text-[#F0E6D2]"
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
            className="lab1 text-[#A09B8C] flex gap-2 w-100px hover:text-[#F0E6D2] transition-colors ease-in-out has-[:checked]:text-[#F0E6D2]"
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
        </Form>
        <div className="w-300px h-2px bg-[#C8AA6E]"></div>

        <Form
          method="post"
          id="skinsForm"
          className="flex gap-10 flex-col items-center"
        >
          <label
            htmlFor="sk"
            className="lab1 gr text-[#A09B8C] flex gap-2 w-100px hover:text-[#F0E6D2] transition-colors ease-in-out has-[:checked]:text-[#F0E6D2]"
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
      <div className="relative self-center bottom-15 z-2">
        <Link to={"/"} className="w-fit no-underline">
          <Button variant="cancel" children="" />
        </Link>

        <Button
          variant="confirm"
          children="CONFIRM"
          type="submit"
          form="dificultyForm"
          onClick={() => {}}
        ></Button>
      </div>
    </div>
  );
}
export { DifficultyMenu };
