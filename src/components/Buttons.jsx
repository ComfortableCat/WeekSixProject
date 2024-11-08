export default function Buttons({ setShowUpgrades, showUpgrades }) {
  function handleClick(e) {
    if (showUpgrades && e.currentTarget.textContent === "Buildings") {
      setShowUpgrades(false);
    } else if (!showUpgrades && e.currentTarget.textContent === "Upgrades") {
      setShowUpgrades(true);
    }
  }
  return (
    <nav>
      <button onClick={handleClick}>Buildings</button>
      <button onClick={handleClick}>Upgrades</button>
    </nav>
  );
}
