"use client";
type Props = {
  onClick: () => void;
};

const FullScreenButton = ({ onClick }: Props) => {
  return (
    <button onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="lg:size-[35px] md:size-[30px] sm:size-[20px] xs:size-[20px]"
        viewBox="0 0 24 25"
        fill="none">
        <path
          d="M7.96191 3.79688H5.06211C4.54939 3.79688 4.05767 4.00055 3.69513 4.3631C3.33258 4.72564 3.12891 5.21736 3.12891 5.73008V8.62988M20.5277 8.62988V5.73008C20.5277 5.21736 20.3241 4.72564 19.9615 4.3631C19.599 4.00055 19.1072 3.79688 18.5945 3.79688H15.6947M15.6947 21.1957H18.5945C19.1072 21.1957 19.599 20.992 19.9615 20.6295C20.3241 20.2669 20.5277 19.7752 20.5277 19.2625V16.3627M3.12891 16.3627V19.2625C3.12891 19.7752 3.33258 20.2669 3.69513 20.6295C4.05767 20.992 4.54939 21.1957 5.06211 21.1957H7.96191"
          stroke="white"
          strokeWidth="2.17485"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default FullScreenButton;
