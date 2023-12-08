interface ButtonProps {
  children: React.ReactNode;
  variant: "play" | "confirm" | "square" | "cancel";
}

const variants = {
  play: {
    "1div": "mr-auto relative flex justify-center items-center ml-20px",
    "2div":
      "logoLol absolute -left-20px w-67px h-67px bg-contain bg-no-repeat dinamic-bg-lolIcon-webp",
    "3div":
      "borderGradietn flex justify-end items-center dinamic-bg-backgroundBtnBlue-svg bg-cover bg-no-repeat h-50px w-198px",

    btn: "lol hover:text-[#cdfafa] relative w-163px h-42px bg-transparent border-none dinamic-bg-borderBtnBlue-svg bg-cover cursor-pointer mr-4px",
  },
  confirm: {
    "1div": "relative flex justify-center items-center",
    "2div": "",
    "3div":
      "borderGradietn flex justify-end items-center dinamic-bg-backgroundBtnRounded-svg bg-cover bg-no-repeat h-50px w-209px",
    btn: "lol hover:text-[#cdfafa] relative w-163px h-42px bg-transparent border-none dinamic-bg-borderBtnBlue-svg bg-cover cursor-pointer mr-4px text-[#0AC8B9]",
  },
  square: {
    "1div": "",
    "2div": "",
    "3div": "",
    btn: "relative w-150px h-40px border-none dinamic-bg-bgBtnsqua-svg bg-contain bg-no-repeat cursor-pointer text-base",
  },

  cancel: {
    "1div": "flex justify-center items-center",
    "2div": "",
    "3div": "",
    btn: "btnT absolute top-1 left-1 w-42px h-42px border-none dinamic-bg-EllipseBtn-svg bg-contain bg-no-repeat cursor-pointer text-base bg-transparent flex justify-center items-center z-10",
  },
};
function Button({ children, variant }: ButtonProps) {
  return (
    <div className={variants[variant]["1div"]}>
      <div className={variants[variant]["2div"]}></div>
      <div className={variants[variant]["3div"]}>
        <button className={variants[variant].btn}>
          {children == "" ? (
            <div className="x relative i-tabler-x text-[#C8AA6E] w-28px h-28px hover:text-[#F0E6D2]"></div>
          ) : (
            children
          )}
        </button>
      </div>
    </div>
  );
}
export { Button };
