import { useState, useEffect } from "react";
import Counter from "./components/Counter";
import Cookie from "./components/Cookie";
import Content from "./components/Content";

export default function App() {
  const [multiClick, setMultiClick] = useState(1);
  const [cps, setCps] = useState(JSON.parse(localStorage.getItem("cps")) || 1);
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem("count")) || 0
  );

  //-------------------------------incrementByCpsEverySecond--------------------------------//
  useEffect(() => {
    const incrementCookies = setInterval(() => {
      setCount((count) => count + cps);
    }, 1000);
    return () => clearInterval(incrementCookies);
  }, [cps]);

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
      </header>
      <main>
        <Cookie setCount={setCount} multiClick={multiClick} />
        <div className="content">
          <Content
            priceCheck={priceCheck}
            reduceCount={reduceCount}
            increaseCps={increaseCps}
            increaseMultiClick={increaseMultiClick}
          />
        </div>
      </main>
    </>
  );
}
