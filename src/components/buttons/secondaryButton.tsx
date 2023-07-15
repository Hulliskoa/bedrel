import React, { useState } from "react";

interface PrimaryButtonProps {
  title: string;
  alt?: boolean;
  onPress: () => void;
}

function SecondaryButton({ title, alt, onPress }: PrimaryButtonProps) {
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
    <button
      className='no-highlights whitespace-nowrap self-center flex'
      onTouchEnd={() => onLeave()}
      onTouchStart={() => onButtonClick()}
      onMouseUp={() => onLeave()}
      onMouseDown={() => onButtonClick()}
    >
      <div className='bg-transparent  group font-semibold  relative flex '>
        <div
          className={` transition-all absolute ${
            clicked
              ? "bottom-0.5 right-0.5 bg-retro-green"
              : "bottom-1 right-1 bg-retro-green"
          } z-1 rounded-full px-6 py-2 flex-1 border z-1 border-black`}
        >
          {title}
        </div>
      </div>
    </button>
  );
}

export default SecondaryButton;
