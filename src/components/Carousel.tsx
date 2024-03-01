import Slider from "react-slick";

function SampleNextArrow() {
  // const { style } = props;
  return <div style={{ display: "none", background: "red" }} />;
}

function SamplePrevArrow() {
  // const { style } = props;
  return <div style={{ display: "none", background: "green" }} />;
}

function CarouselResponsive() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };

  return (
    <div className="w-full flex justify-center">
      <div className="slider-container xl:w-1010px w-350px">
        <Slider {...settings}>
          <a
            href="http://www.leagueoflegends.com/en-us/news/game-updates/patch-13-23-notes/"
            target="_blank"
            className="group visited:text-[#C8AA6E] no-underline text-[#C8AA6E]"
          >
            <div className="cursor-pointer">
              <div className="dinamic-bg-imgCard3-jpg bg-no-repeat bg-cover bg-center w-350px h-220px border border-[#785A28] border-solid group-hover:border-[#FFEFBD]"></div>
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
        </Slider>
      </div>
    </div>
  );
}

export { CarouselResponsive };
