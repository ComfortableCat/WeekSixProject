import { useState, useEffect } from "react";
import UpgradeUnit from "./UpgradeUnit";

export default function Upgrades({ priceCheck, reduceCount, increaseCps }) {
  const [upgrades, setUpgrades] = useState(
    JSON.parse(localStorage.getItem("upgrades"))
  );
  //----------------------------ValidatesLocalStorageForUpgrades----------------------------//
  useEffect(() => {
    async function fetchUpgrades() {
      const response = await fetch(
        `https://cookie-upgrade-api.vercel.app/api/upgrades`
      );
      const data = await response.json();
      data.forEach((data) => {
        data.count = 0;
        data.currentCost = data.cost;
      });
      setUpgrades(data);
    }

    console.log("sent fetch");
    if (!upgrades) {
      fetchUpgrades();
    }
  }, [upgrades]);

  useEffect(() => {
    localStorage.setItem("upgrades", JSON.stringify(upgrades));
  }, [upgrades]);
  function buyUpgrade(id) {
    if (priceCheck(upgrades[id - 1].currentCost) === true) {
      const tempUpgrades = [...upgrades];
      tempUpgrades[id - 1].count = tempUpgrades[id - 1].count + 1;
      reduceCount(upgrades[id - 1].currentCost);
      increaseCps(upgrades[id - 1].increase);
      tempUpgrades[id - 1].currentCost = Math.trunc(
        tempUpgrades[id - 1].currentCost * 1.05
      );
      setUpgrades(tempUpgrades);
    } else {
      //CANT AFFORD
    }
  }

  return (
    <>
      <p className="upgradeInfo">Upgrades</p>
      {upgrades !== null &&
        upgrades.map((upgrade, i) => {
          return (
            <UpgradeUnit key={i} upgrade={upgrade} buyUpgrade={buyUpgrade} />
          );
        })}
    </>
  );
}
