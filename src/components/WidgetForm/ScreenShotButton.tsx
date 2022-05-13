import html2canvas from 'html2canvas';
import { backgroundPosition } from 'html2canvas/dist/types/css/property-descriptors/background-position';
import { Camera, Trash } from 'phosphor-react';
import React, { useState } from 'react';
import { Loading } from '../Loding';

// import { Container } from './styles';
interface ScreenshotButtonProps {
  onScreenshotTook: (screenshot: string | null) => void;
  screenshot: string | null;
}

export function ScreenShotButton({
  onScreenshotTook,
  screenshot,
}: ScreenshotButtonProps) {
  const [isTakeScreenshot, setIsTakeScreenshot] = useState(false);

  const handleTakeScreenshot = async () => {
    setIsTakeScreenshot(true);
    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');
    onScreenshotTook(base64image);
    setIsTakeScreenshot(false);
  };
  if (screenshot) {
    return (
      <button
        type="button"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180,
        }}
        onClick={() => onScreenshotTook(null)}
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400  hover:text-zinc-100 transition-colors"
      >
        <Trash weight="fill" />
      </button>
    );
  }
  return (
    <button
      type="button"
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-400 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
      onClick={handleTakeScreenshot}
    >
      {!isTakeScreenshot ? <Camera className="w-6 h-6" /> : <Loading />}
    </button>
  );
}
