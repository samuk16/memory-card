import { Button } from "./Button";
import { Link } from "react-router-dom";
type EndGameProps = {
  title: string;
  finalGrade: string;
};
function EndGame({ finalGrade, title }: EndGameProps) {
  return (
    <>
      <div className="sm:absolute fixed inset-0 w-full h-full z-12 backdrop-blur-sm transition-all"></div>
      <div className="sm:absolute fixed inset-0 w-full h-full  opacity-50 bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-[#000000] z-12 transition-all"></div>
      <div className="sm:absolute fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-502px h-249px dinamic-bg-borderEndGame1-svg bg-transparent border-none flex flex-col items-center justify-between pb-3px pl-2px pt-20px z-13 drop-shadow-[0_0px_0px_rgba(183,157,103,.1)] hover:drop-shadow-[0_0px_15px_rgba(183,157,103,.5)] transition-all">
        <p className="text-2xl">{title}</p>

        <div className="w-120px h-140px dinamic-bg-bgPoint3-svg bg-transparent border-none bg-no-repeat bg-cover z-10 flex items-center justify-center pb-20px pl-5px">
          <p className="text-4xl">{finalGrade}</p>
        </div>

        <Link to={"/difficult"} className="w-fit no-underline">
          <Button variant="square" children="CONTINUE" />
        </Link>
      </div>
    </>
  );
}

export { EndGame };
