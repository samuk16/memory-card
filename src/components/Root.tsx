import { Header } from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import { PageLoading } from "./PageLoading";
import { useEffect, useState } from "react";
function Root() {
  const location = useLocation();
  const [showBlackScreen, setShowBlackScreen] = useState(false);

  useEffect(() => {
    setShowBlackScreen(true);

    const timer = setTimeout(() => {
      setShowBlackScreen(false);
    }, 150);

    return () => clearTimeout(timer);
  }, [location]);
  return (
    <div className="w-screen min-h-[100dvh]">
      <Header locationPath={location.pathname} />
      <div>
        <PageLoading visible={showBlackScreen} variant="l1" />

        <Outlet />
        <footer className="self-center p-10px text-[9px] sm:text-xs font-spiegel fixed bottom-0 z-0 text-[#A09B8C] w-screen flex justify-center">
          Memory Legends is not endorsed by Riot Games and does not reflect the
          views or opinions of Riot Games or anyone officially involved in
          producing or managing Riot Games properties.
          <br />
          Riot Games and all associated properties are trademarks or registered
          trademarks of Riot Games, Inc
        </footer>
      </div>
    </div>
  );
}

export { Root };
