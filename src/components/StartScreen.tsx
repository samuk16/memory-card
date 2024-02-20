import { Button } from "./Button";
// import { Header } from "./Header";

function StartScreen() {
  // fetchData();
  return (
    <div className="flex flex-col justify-between w-screen h-screen dinamic-bg-bgStartScreen-webp bg-no-repeat bg-cover shadow-[inset_170px_70px_270px_100px_rgba(0,0,0,0.6)]">
      {/* // <div className="flex flex-col justify-between w-full h-full dinamic-bg-bgStartScreen-webp bg-no-repeat bg-cover shadow-[inset_170px_70px_270px_100px_rgba(0,0,0,0.6)]"> */}
      <div className="absolute w-full h-full opacity-50 bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-[#000000] z-1"></div>
      <div className="flex flex-col justify-around h-full relative z-2">
        <div className="flex flex-col gap-10 pl-5">
          <div>
            <h2 className="text-[#F0E6D2] text-3xl">PATCH 13.23 NOTES</h2>
            <p className="font-spiegel w-xl text-[#A09B8C]">
              In this week’s patch we’re focusing on addressing a few outliers
              and refining changes made in a few of the last patches, like those
              to K’Sante. We’re focusing more and more on getting the 2024
              changes polished and ready for 14.1, so be aware that this patch
              and 13.24 may be a bit smaller and less complex than usual as 14.1
              will undoubtedly shake things up!
            </p>
          </div>
          <a
            href="http://www.leagueoflegends.com/en-us/news/game-updates/patch-13-23-notes/"
            target="_blank"
            className="w-fit"
          >
            <Button variant="square" children="CHECK IT NOW" />
          </a>
        </div>
        <div className="flex items-center justify-center gap-5 text-[#C8AA6E]">
          <a
            href="http://www.leagueoflegends.com/en-us/news/game-updates/patch-13-23-notes/"
            target="_blank"
            className="group visited:text-[#C8AA6E] no-underline text-[#C8AA6E]"
          >
            <div className="cursor-pointer test23">
              <div className=" t1 dinamic-bg-imgCard3-jpg bg-no-repeat bg-cover bg-center w-350px h-220px border border-[#785A28] border-solid group-hover:border-[#FFEFBD]"></div>
              <p className="group-hover:text-[#FFEFBD]">
                /dev: season 2024 map changes
              </p>
            </div>
          </a>
          <a
            href="http://www.leagueoflegends.com/en-us/news/game-updates/remix-rumble-pass-and-more/"
            target="_blank"
            className="visited:text-[#C8AA6E] no-underline text-[#C8AA6E] group"
          >
            <div className="cursor-pointer">
              <div className="dinamic-bg-imgCard1-jpg bg-no-repeat bg-cover bg-center w-350px h-220px border border-[#785A28] border-solid group-hover:border-[#FFEFBD]"></div>
              <p className="group-hover:text-[#FFEFBD]">
                Remix rumble pass and more
              </p>
            </div>
          </a>
          <a
            href="http://www.leagueoflegends.com/en-us/news/game-updates/2024-gameplay-preview/"
            target="_blank"
            className="visited:text-[#C8AA6E] no-underline text-[#C8AA6E] group"
          >
            <div className="cursor-pointer">
              <div className="dinamic-bg-imgCard2-jpg bg-no-repeat bg-cover bg-center w-350px h-220px border border-solid border-[#785A28] group-hover:border-[#FFEFBD]"></div>
              <p className="group-hover:text-[#FFEFBD]">
                2024 gameplay preview
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export { StartScreen };
