import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <div>
          <p>Pending Tasks</p>
          <ul></ul>
        </div>
        <div>
          <p>Completed Tasks</p>
          <ul></ul>
        </div>
      </div>
    </div>
  );
}
