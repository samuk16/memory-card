interface ButtonProps {
  children: React.ReactNode;
  variant: "play" | "confirm" | "square";
}

const variants = {
  play: {
    "1div": "relative flex justify-center items-center",
    "2div":
      "logoLol absolute -left-20px -top-7px w-67px h-67px bg-contain bg-no-repeat dinamic-bg-lolIcon-webp",
    "3div":
      "borderGradietn flex justify-end items-center dinamic-bg-backgroundBtnBlue-svg bg-cover bg-no-repeat h-50px w-198px",

    btn: "lol relative w-163px h-42px bg-transparent border-none dinamic-bg-borderBtnBlue-svg bg-cover cursor-pointer mr-4px",
  },
  confirm: {
    "1div": "relative flex justify-center items-center",
    "2div":
      "logoLol absolute -left-20px -top-7px w-67px h-67px bg-contain bg-no-repeat dinamic-bg-lolIcon-webp",
    "3div":
      "borderGradietn flex justify-end items-center dinamic-bg-backgroundBtnBlue-svg bg-cover bg-no-repeat h-50px w-198px",
    btn: "",
  },
  square: {
    "1div": "",
    "2div": "",
    "3div": "",
    btn: "relative w-150px h-40px border-none dinamic-bg-bgBtnsqua-svg bg-contain bg-no-repeat cursor-pointer text-base",
  },
};
function Button({ children, variant }: ButtonProps) {
  return (
    <div className={variants[variant]["1div"]}>
      <div className={variants[variant]["2div"]}></div>
      <div className={variants[variant]["3div"]}>
        <button className={variants[variant].btn} children={children}></button>
      </div>
    </div>
  );
}

export { Button };
