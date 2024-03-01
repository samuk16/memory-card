interface CardProps {
  name: string;
  skinId: string;
  changeSection?: () => void;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

function Card({ name, skinId, onClick }: CardProps) {
  const size = 200;
  const concaveSize = 33;
  const relativeConcave = concaveSize / size;
  return (
    <div
      style={{
        position: "relative",
        width: `${size}px`,
        height: `300px`,
      }}
      data-card={name}
      onClick={
        onClick && typeof onClick === "function" ? (e) => onClick(e) : undefined
      }
    >
      <svg width="0" height="0">
        <defs>
          <clipPath id="concaveCorners" clipPathUnits="objectBoundingBox">
            <path
              d={`
                      M 0,${relativeConcave} 
                      Q 0,0 ${relativeConcave},0 
                      H ${1 - relativeConcave} 
                      Q 1,0 1,${relativeConcave} 
                      V ${1 - relativeConcave} 
                      Q 1,1 ${1 - relativeConcave},1 
                      H ${relativeConcave} 
                      Q 0,1 0,${1 - relativeConcave} 
                      Z`}
            />
          </clipPath>
        </defs>
      </svg>

      <div
        className="divConcave absolute top-0 bg-cover w-200px h-300px "
        style={{
          backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_${skinId}.jpg)`,
        }}
      />
      <div className="absolute top-0 dinamic-bg-bgBorderCard-svg w-200px h-300px cursor-pointer"></div>
    </div>
  );
}
export { Card };
