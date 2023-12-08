import { Button } from "./Button";

function Header() {
  return (
    <header className=" relative grid grid-cols-3 p-10px border-b-1 border-style-solid border-transparent border-b-[#C8AA6E]">
      <Button children="PLAY" variant="play" />
      <h1 className="justify-self-center">Memory Legends</h1>
    </header>
  );
}

export { Header };
