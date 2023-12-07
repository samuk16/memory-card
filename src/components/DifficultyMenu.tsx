import { Button } from "./Button.tsx";
function DifficultyMenu() {
  return (
    <div className="flex flex-col justify-between w-screen h-screen dinamic-bg-bgHome-webp bg-no-repeat bg-cover">
      <div className="absolute w-full h-full opacity-60 bg-gradient-to-b from-[#0A1428] to-[#091428]"></div>
      <header className=" relative grid grid-cols-3 p-10px border-b-1 border-style-solid border-transparent border-b-[#C8AA6E]">
        <Button children="PLAY" variant="play" />
        <h1 className="justify-self-center">Memory Legends</h1>
      </header>

      <div className="flex items-center justify-center flex-col gap-10 relative h-full">
        <h2 className="text-[#C8AA6E] text-3xl">CHOOSE DIFFICULTY</h2>

        <div className="flex gap-10 flex-col">
          <label
            htmlFor="ez"
            className="lab1 relative text-[#A09B8C] flex gap-2"
          >
            <input
              type="radio"
              name="difficult"
              id="ez"
              className="inp1 rotate-45 absolute opacity-0 cursor-pointer h-0 w-0"
            />
            EASY
            <span className=" sp1 absolute top-0 left-0 h-20px w-20px"></span>
          </label>
          <label htmlFor="md" className="lab1 text-[#A09B8C] flex gap-2">
            <input
              type="radio"
              name="difficult"
              id="md"
              className="inp1 rotate-45"
            />
            MEDIUM
            <span className=" sp1 absolute top-0 left-0 h-20px w-20px"></span>
          </label>
          <label htmlFor="hr" className="lab1 text-[#A09B8C] flex gap-2">
            <input
              type="radio"
              name="difficult"
              id="hr"
              className="rotate-45"
            />
            HARD
            <span className=" sp1 absolute top-0 left-0 h-20px w-20px"></span>
          </label>
        </div>
      </div>
      <div className="relative self-center">
        <Button variant="cancel" children="" />
        <Button variant="confirm" children="CONFIRM"></Button>
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

export { DifficultyMenu };
