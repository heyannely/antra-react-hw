//3/12/205
/*

Build a custom hook to that synchronizes component state with localStorage, ensuring that the data remains available across browser sessions
Think about 2 more custom hook ideas and build them

*/

import { useLocalStorage } from "./hooks/useLocalStorage";
import useToggle from "./hooks/useToggle";
import useCopyToClipboard from "./hooks/useCopyClipboard";

console.log("customhooks");

export default function CustomHooksStorage() {
  //localstorage
  const [value, setValue] = useLocalStorage("savedValue", "");
  //custom hooks
  const [isVisible, toggleVisibility] = useToggle();
  const { copied, copy } = useCopyToClipboard();

  const boxStyle = {
    padding: "5px",
    border: "1px solid lightgray",
    margin: "10px",
  };

  return (
    <div
      style={{ padding: "5px", margin: "10px", border: "1px solid lightgray" }}
    >
      <h1>Local Storage & Custom Hooks</h1>
      {/* localstorage demonstration*/}
      <div style={boxStyle}>
        <h3>Local Storage Demo</h3>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border p-2"
        />
        <p>Saved Value: {value}</p>
      </div>

      {/* //toggle hook demonstration*/}
      <div style={boxStyle}>
        <h3>Toggle Text Hook</h3>
        <button onClick={toggleVisibility}>
          {isVisible ? "Hide Text" : "Show Text"}
        </button>
        {isVisible && <p>ToggleText</p>}
      </div>

      {/* cliboard hook demonstration */}
      <div style={boxStyle}>
        <h3>Copy Text Hook</h3>
        <button onClick={() => copy("Hello, this text is copied!")}>
          {copied ? "Copied!" : "Copy Text"}
        </button>{" "}
        <span>"Hello, this text is copied!"</span>
        <div>
          <input></input>
        </div>
      </div>
    </div>
  );
}
