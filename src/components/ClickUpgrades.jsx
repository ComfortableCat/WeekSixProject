import { useEffect, useState } from "react";
import ClickUnit from "./ClickUnit";

const initialValue = [
  { id: 1, name: "Double tap", cost: "150", increase: 2, owned: false },
  { id: 2, name: "Tap dancer", cost: "750", increase: 10, owned: false },
  {
    id: 3,
    name: "Burning Finger",
    cost: "1500",
    increase: 5,
    owned: false,
  },
  {
    id: 4,
    name: "Carpell tapper",
    cost: "5000",
    increase: 2,
    owned: false,
  },
  { id: 5, name: "Godly taps", cost: "15000", increase: 2.5, owned: false },
];

export default function ClickUpgrades({
  priceCheck,
  reduceCount,
  increaseMultiClick,
}) {
  //console.log("clickupgrade");
  const [multiClickUpgrades, setMultiClickUpgrades] = useState(
    JSON.parse(localStorage.getItem("MultiClickUpgrades")) || initialValue
  );
  useEffect(() => {
    localStorage.setItem(
      "MultiClickUpgrades",
      JSON.stringify(multiClickUpgrades)
    );
  }, [multiClickUpgrades]);

  function buyUpgrade(id) {
    if (priceCheck(multiClickUpgrades[id - 1].cost) === true) {
      const tempMultiClickUpgrades = [...multiClickUpgrades];
      tempMultiClickUpgrades[id - 1].owned = true;
      reduceCount(tempMultiClickUpgrades[id - 1].cost);
      increaseMultiClick(tempMultiClickUpgrades[id - 1].increase);
      setMultiClickUpgrades(tempMultiClickUpgrades);
    } else {
      //
    }
  }
  return (
    <>
      {multiClickUpgrades !== null &&
        multiClickUpgrades.map((upgrade, i) => (
          <ClickUnit
            key={i}
            upgrade={upgrade}
            multiClickUpgrades={multiClickUpgrades}
            buyUpgrade={buyUpgrade}
          />
        ))}
    </>
  );
}
