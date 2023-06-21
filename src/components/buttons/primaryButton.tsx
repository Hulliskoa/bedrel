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
  };

  const onLeave = () => {
    setClicked(false);
  };

  return (
    <button
      className='no-highlights whitespace-nowrap mx-auto self-center flex'
      onPointerEnter={() => onButtonClick()}
      onPointerLeave={() => onLeave()}
      onClick={() => onPress()}
    >
      <div className='bg-transparent relative flex '>
        <div
          className={`${
            alt ? "bg-flamingo" : "bg-buttercup"
          } text-transparent rounded-full border-2 px-5 py-2 border-black inset-0 z-0`}
        >
          {title}
        </div>
        <div
          className={` transition-all absolute ${
            clicked
              ? "bottom-0 right-0 bg-retro-green-shade-1"
              : "bottom-1 right-1 bg-retro-green"
          } z-1 rounded-full px-5 py-2 flex-1 border-2 z-1 border-black`}
        >
          {title}
        </div>
      </div>
    </button>
  );
}

export default PrimaryButton;
