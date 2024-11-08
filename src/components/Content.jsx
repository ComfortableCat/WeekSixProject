import { useState } from "react";
import Buttons from "./Buttons";
import Upgrades from "./Upgrades";
import ClickUpgrades from "./ClickUpgrades";

export default function Content({
  priceCheck,
  reduceCount,
  increaseMultiClick,
  increaseCps,
  multiClick,
}) {
  //console.log("Content");
  const [showUpgrades, setShowUpgrades] = useState(true);
  return (
    <>
      <Buttons setShowUpgrades={setShowUpgrades} showUpgrades={showUpgrades} />
      <div className="upgradeContainer">
        {showUpgrades ? (
          <Upgrades
            priceCheck={priceCheck}
            reduceCount={reduceCount}
            increaseCps={increaseCps}
          />
        ) : (
          <ClickUpgrades
            priceCheck={priceCheck}
            reduceCount={reduceCount}
            increaseMultiClick={increaseMultiClick}
            multiClick={multiClick}
          />
        )}
      </div>
    </>
  );
}
