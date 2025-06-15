"use client";
type Props = {
  onClick: () => void;
};

const MainPlayButton = ({ onClick }: Props) => {
  return (
    <div>
      <button
        onClick={onClick}
        className=" border border-solid border-white vedioPlayButton main_play_button flex justify-center items-center rounded-[50%]">
        <svg
          className="lg:ml-1 md:ml-1 sm:ml-[2px] xs:ml-[2px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39 44"
          fill="none">
          <g filter="url(#filter0_b_24_923)">
            <path
              d="M36.7655 18.4552C39.6053 20.1269 39.6053 24.234 36.7655 25.9057L7.46214 43.1557C4.58042 44.8521 0.946384 42.7744 0.946384 39.4305V4.93042C0.946384 1.58647 4.58043 -0.491228 7.46215 1.20515L36.7655 18.4552Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_b_24_923"
              x="-47.0379"
              y="-47.3816"
              width="133.916"
              height="139.123"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="23.9916" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_24_923"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_24_923"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </button>
    </div>
  );
};

export default MainPlayButton;
