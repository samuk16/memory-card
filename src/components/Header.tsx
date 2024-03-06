import { Button } from "./Button";
import { Link } from "react-router-dom";

function Header({ locationPath }: { locationPath: string }) {
  function checkLocationPath() {
    return locationPath !== "/" ? "grayscale brightness-50" : "";
  }
  return (
    <header className=" absolute top-0 w-screen grid grid-cols-3 items-center p-10px border-b-1 border-style-solid border-transparent border-b-[#C8AA6E] z-12">
      <Link to={"/difficult"} className="w-fit no-underline">
        <Button children="PLAY" variant="play" playOff={checkLocationPath()} />
      </Link>
      <h1 className="justify-self-end xl:text-5xl md:text-3xl text-2xl sm:col-start-2 col-start-3 sm:justify-self-center text-[#ffffffde]">
        Memory Legends
      </h1>
    </header>
  );
}

export { Header };
