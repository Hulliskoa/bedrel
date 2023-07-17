import React, { useEffect, useState } from "react";

interface PartnerCardProps {
  partnerName?: string;
  partnertext?: string;
  alt?: boolean;
  onPress: () => void;
  partnerImage: string;
  seminar?: boolean;
  stand?: boolean;
}

function PartnerCard({
  partnerName,
  partnertext,
  seminar,
  stand,
  onPress,
  partnerImage,
}: PartnerCardProps) {
  const [clicked, setClicked] = useState(false);
  const [bgColor, setBgColor] = useState("bg-buttercup-shade-1");

  useEffect(() => {
    if (seminar && stand) {
      setBgColor("bg-retro-green-shade-1");
      return;
    }
    if (seminar) {
      setBgColor("bg-buttercup-shade-1");
      return;
    }
    if (stand) {
      setBgColor("bg-flamingo-shade-1");
      return;
    }
  }, [seminar, stand]);

  const onButtonClick = () => {
    setClicked(true);
    if (onPress) onPress();
  };
  const onLeave = () => {
    setClicked(false);
  };

  return (
    <button
      className='no-highlights h-[302px]  max-w-[292px] col-span-6 md:col-span-3 whitespace-nowrap flex'
      onTouchEnd={() => onLeave()}
      onTouchStart={() => onButtonClick()}
      onMouseUp={() => onLeave()}
      onMouseDown={() => onButtonClick()}
    >
      <div className='bg-transparent h-full w-full  font-semibold relative flex '>
        <div
          className={`${bgColor} text-transparent h-full w-full  border rounded-md px-6 py-2 border-black inset-0 `}
        />
        <div
          className={` transition-all absolute ${
            clicked
              ? "bottom-0.5 right-0.5 bg-white"
              : "bottom-1 right-1 bg-white"
          }   flex-1 grid gap-y-3 pb-6 border-[1px] h-full  w-full rounded-md   border-black`}
        >
          <img
            className='rounded-md rounded-b-none border-b'
            src={partnerImage}
            alt='partner'
          />
          <div className='flex flex-row  px-6 gap-x-2 items-center'>
            {seminar && (
              <div className='bg-buttercup-shade-1 px-1.5 py-1 font-medium text-xs rounded-md'>
                Seminar
              </div>
            )}
            {stand && (
              <div className='bg-flamingo-shade-1 px-1.5 py-1 font-medium text-xs  rounded-md'>
                Stand
              </div>
            )}
          </div>
          <div className='gap-y-1 flex flex-col px-6'>
            <div className='font-semibold whitespace-pre-wrap text-start text-base '>
              {partnerName}
            </div>

            <div className='font-normal whitespace-pre-wrap text-start text-sm '>
              {partnertext}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

export default PartnerCard;
