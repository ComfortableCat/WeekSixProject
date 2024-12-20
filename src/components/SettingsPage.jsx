export default function SettingsPage({ changeVolume, volume }) {
  return (
    <div className="settingsPage">
      <p>Volume: {volume}</p>
      <input
        onInput={(event) => changeVolume(event)}
        type="range"
        max="100"
        min="0"
        value={volume}
      ></input>
      <button onClick={() => window.location.reload()}>SAVE</button>
      <button
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
      >
        RESET
      </button>
    </div>
  );
}
