import "./styles.css";
import confetti from "canvas-confetti";
import { GlobalHotKeys } from "react-hotkeys";

export default function App() {
  const keyMap = {
    burstEvent: "c h a n g w o r k s"
  };

  const burst = (angle, x, y) =>
    confetti({
      particleCount: 100,
      angle: angle,
      spread: 75,
      startVelocity: 60,
      origin: {
        x: x,
        y: y
      }
    });

  const handleBurst = () => {
    burst(45, 0.15, 0.75);
    burst(135, 0.85, 0.75);
  };

  const handler = {
    burstEvent: handleBurst
  };

  return (
    <GlobalHotKeys keyMap={keyMap} handlers={handler}>
      <div className="App">
        <h1>Type "changworks"</h1>
      </div>
    </GlobalHotKeys>
  );
}
