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
      l2: "w-screen sm:absolute sm:h-screen fixed top-0 bottom-0 flex items-center justify-center bg-[#040d16] z-11",
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
