export default function ClickUnit({ upgrade, multiClickUpgrades, buyUpgrade }) {
  //.log("multiClickUpgrades");
  return (
    <>
      {multiClickUpgrades[upgrade.id - 1].owned === false && (
        <div key={upgrade.id} className={"clickUpgrade " + upgrade.id}>
          <p>
            {upgrade.name} cost: {upgrade.cost} cookies
          </p>
          <button onClick={() => buyUpgrade(upgrade.id)}>BUY</button>
        </div>
      )}
    </>
  );
}
