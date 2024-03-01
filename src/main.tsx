import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./App.css";
import "virtual:uno.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StartScreen } from "./components/StartScreen.tsx";
import { DifficultyMenu } from "./components/DifficultyMenu.tsx";
import { action as difficultyAction } from "./utils/routerHelpers.ts";
import { loader as gameLoader } from "./utils/routerHelpers.ts";
import { GameBoard } from "./components/GameBoard.tsx";
import { Root } from "./components/Root.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <StartScreen />,
      },
      {
        path: "difficult",
        element: <DifficultyMenu />,
        action: difficultyAction,
      },
      {
        path: "game",
        element: <GameBoard />,
        loader: gameLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
