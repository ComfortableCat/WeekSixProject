import { useState, useEffect } from "react";
import Counter from "./components/Counter";
import Cookie from "./components/Cookie";
import Content from "./components/Content";
import SettingsBtn from "./components/SettingsBtn";

export default function App() {
  const [multiClick, setMultiClick] = useState(
    JSON.parse(localStorage.getItem("MultiClick")) || 1
  );
  const [cps, setCps] = useState(JSON.parse(localStorage.getItem("cps")) || 1);
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem("count")) || 0
  );
  const [volume, setVolume] = useState(
    JSON.parse(localStorage.getItem("volume")) || 80
  );

  useEffect(() => {
    localStorage.setItem("cps", cps);
    localStorage.setItem("count", count);
    localStorage.setItem("multiClick", multiClick);
    localStorage.setItem("volume", volume);
  }, [cps, count, multiClick, volume]);
  useEffect(() => {
    const incrementCookies = setInterval(() => {
      setCount((count) => count + cps);
    }, 1000);
    return () => clearInterval(incrementCookies);
  }, [cps]);

  function changeVolume(event) {
    setVolume(event.currentTarget.value);
  }
  function priceCheck(cost) {
    if (cost <= count) {
      return true;
    } else {
      return false;
    }
  }

  function reduceCount(cost) {
    setCount((cookie) => cookie - cost);
  }
  function increaseMultiClick(increase) {
    setMultiClick((multi) => Math.trunc(multi * increase));
  }
  function increaseCps(increase) {
    setCps((cps) => cps + increase);
  }
  return (
    <>
      <header>
        <Counter name="Cookies" number={count} />
        <Counter name="Cps" number={cps} />
        <SettingsBtn changeVolume={changeVolume} volume={volume} />
      </header>
      <main>
        <Cookie setCount={setCount} multiClick={multiClick} volume={volume} />
        <div className="content">
          <Content
            priceCheck={priceCheck}
            reduceCount={reduceCount}
            increaseCps={increaseCps}
            increaseMultiClick={increaseMultiClick}
            multiClick={multiClick}
          />
        </div>
      </main>
    </>
  );
}
