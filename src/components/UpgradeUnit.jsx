export default function UpgradeUnit({ upgrade, buyUpgrade }) {
  return (
    <div className={"upgrade " + upgrade.id}>
      <p>
        {upgrade.name} {upgrade.currentCost}
      </p>
      <p>{upgrade.count} owned</p>
      <button onClick={() => buyUpgrade(upgrade.id)}>BUY</button>
    </div>
  );
}
