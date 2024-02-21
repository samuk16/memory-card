type PageLoadingProps = {
  visible?: boolean;
  imgWait?: boolean;
  variant: "l1" | "l2";
};

function PageLoading({ visible, variant }: PageLoadingProps) {
  const variants = {
    loading1: {
      l1: `w-screen h-screen absolute flex items-center justify-center bg-[#040d16] z-11 transition-opacity duration-150 
      ${visible ? "opacity-100" : "opacity-0"}`,
      l2: "w-screen h-screen absolute flex items-center justify-center bg-[#040d16] z-11",
      // btn: "lol hover:text-[#cdfafa] relative w-163px h-42px bg-transparent border-none dinamic-bg-borderBtnBlue-svg bg-cover cursor-pointer mr-4px ",
    },
  };
  return (
    <div
      className={variants.loading1[variant]}
      style={{ pointerEvents: visible ? "auto" : "none" }}
      id="pageLoading"
    >
      <div className="loader"></div>
    </div>
  );
}

export { PageLoading };
