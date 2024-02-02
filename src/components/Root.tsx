import { Header } from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import { PageLoading } from "./PageLoading";
import { useEffect, useState } from "react";
function Root() {
  const location = useLocation();
  const [showBlackScreen, setShowBlackScreen] = useState(false);

  useEffect(() => {
    // Muestra la pantalla negra
    setShowBlackScreen(true);

    // Crea un temporizador para ocultar la pantalla negra después de un intervalo
    const timer = setTimeout(() => {
      setShowBlackScreen(false);
    }, 150); // 500ms para el efecto de pantalla negra

    // Limpia el temporizador si el componente se desmonta antes de que se oculte la pantalla negra
    return () => clearTimeout(timer);
  }, [location]);
  return (
    <div className="w-screen h-screen ">
      <Header />
      <div>
        <PageLoading visible={showBlackScreen} variant="l1" />

        <Outlet />
      </div>
      <footer className="self-center p-10px text-xs font-spiegel absolute bottom-0 z-0 text-[#A09B8C] w-screen flex justify-center">
        {/* <footer className="self-center p-10px text-xs font-spiegel text-[#A09B8C] flex justify-center"> */}
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

export { Root };
