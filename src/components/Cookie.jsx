import { useRef } from "react";
const audios = ["/sounds/Eat1.ogg", "/sounds/Eat2.ogg", "/sounds/Eat3.ogg"];

export default function Cookie({ setCount, multiClick }) {
  const soundIndex = useRef(0);

  function handleClick() {
    setCount((count) => count + multiClick);
    let audio = new Audio(audios[soundIndex.current]);
    audio.play();
    soundIndex.current = soundIndex.current + 1;
    if (soundIndex.current > 2) {
      soundIndex.current = 0;
    }
  }
  return (
    <>
      <img
        className="cookie"
        src="/images/MC cookie.webp"
        onClick={() => handleClick()}
      />
    </>
  );
}
