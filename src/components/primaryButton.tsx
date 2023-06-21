import React, { useState } from "react";

interface PrimaryButtonProps {
  title: string;
  alt?: boolean;
  onPress?: () => void;
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
      onPointerEnter={() => onButtonClick()}
      onPointerLeave={() => onLeave()}
    >
      <div className='bg-transparent relative '>
        <div
          className={`${
            alt ? "bg-flamingo" : "bg-buttercup"
          } text-transparent rounded-full relative bottom-1 right-1 border-2 px-5 py-2 border-black inset-0 z-0`}
        >
          {title}
        </div>
        <div
          className={`bg-retro-green transition-all absolute ${
            clicked ? "bottom-0 right-0" : "bottom-1 right-1"
          } z-1 rounded-full px-5 py-2 border-2 border-black`}
        >
          {title}
        </div>
      </div>
    </button>
  );
}

export default PrimaryButton;
