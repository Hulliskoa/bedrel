import React, { useState } from "react";

interface PrimaryButtonProps {
  title: string;
  alt?: boolean;
  onPress: () => void;
}

function PrimaryButton({ title, alt, onPress }: PrimaryButtonProps) {
  const [clicked, setClicked] = useState(false);

  const onButtonClick = () => {
    setClicked(true);
    if (onPress) onPress();
  };

  function isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }

  const onLeave = () => {
    setClicked(false);
  };

  return (
    <link
      className='no-highlights  whitespace-nowrap self-center flex'
      onTouchEnd={() => onLeave()}
      onTouchStart={() => onButtonClick()}
      onMouseUp={() => onLeave()}
      onMouseDown={() => onButtonClick()}
    >
      <div className='bg-transparent font-semibold relative  flex '>
        <div
          className={`${
            alt
              ? "bg-flamingo group-hover:bg-flamingo"
              : "bg-buttercup group-hover:bg-buttercup"
          } text-transparent rounded-full border px-6 py-2 border-black inset-0 `}
        >
          {title}
        </div>
        <div
          className={` transition-all absolute ${
            clicked
              ? "bottom-0.5 right-0.5 bg-retro-green"
              : "bottom-1 right-1 bg-retro-green"
          } rounded-full px-6 py-2 flex-1 border  border-black`}
        >
          {title}
        </div>
      </div>
    </link>
  );
}

export default PrimaryButton;
