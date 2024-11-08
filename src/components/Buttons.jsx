export default function Buttons({ setShowUpgrades, showUpgrades }) {
  function handleClick(e) {
    if (showUpgrades && e.currentTarget.textContent === "Click Power") {
      setShowUpgrades(false);
    } else if (!showUpgrades && e.currentTarget.textContent === "Upgrades") {
      setShowUpgrades(true);
    }
  }
  return (
    <nav>
      <button onClick={handleClick}>Upgrades</button>
      <button onClick={handleClick}>Click Power</button>
    </nav>
  );
}
