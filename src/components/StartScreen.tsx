import { Button } from "./Button";
// import { Header } from "./Header";

import { CarouselResponsive } from "./Carousel";

function StartScreen() {
  // fetchData();
  return (
    <div className="flex flex-col justify-between w-screen dinamic-bg-bgStartScreen-webp bg-no-repeat bg-cover shadow-[inset_170px_70px_270px_100px_rgba(0,0,0,0.6)]">
      <div className="absolute w-full h-[100lvh] opacity-50 bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-[#000000] z-1"></div>
      <div className="flex flex-col justify-around h-[100lvh] relative z-2">
        <div className="flex flex-col gap-10 pl-5 pt-5 sm:pt-0">
          <div className="">
            <h2 className="text-[#F0E6D2] text-2xl sm:text-3xl">
              PATCH 13.23 NOTES
            </h2>
            <p className="font-spiegel text-sm w-[90dvw] sm:w-xl sm:text-base text-[#A09B8C]">
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
        <CarouselResponsive />
      </div>
    </div>
  );
}

export { StartScreen };
