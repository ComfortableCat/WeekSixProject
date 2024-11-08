import { useState } from "react";
import SettingsPage from "./SettingsPage";

export default function SettingsBtn({ changeVolume, volume }) {
  const [show, setShow] = useState(false);
  function handleClick() {
    //event.currentTarget.style.transform = rotate(0.125);
    setShow((show) => !show);
  }
  return (
    <>
      <button
        className="settingsBtn"
        onClick={(event) => handleClick(event)}
      ></button>
      {show && <SettingsPage changeVolume={changeVolume} volume={volume} />}
    </>
  );
}
