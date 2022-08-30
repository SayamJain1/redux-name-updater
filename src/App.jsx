import "./App.css";
import Header from "./compoents/Header";
import Update from "./compoents/Update";
import { useSelector } from "react-redux";

function App() {
  const store = useSelector((state) => state.name);
  return (
    <div>
      <h3>Name updating app build using Redux-toolkit.</h3>
      <div
        style={{
          padding: "40px",
          border: "5px solid brown",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
        className="App"
      >
        App component - {store.name}
        <Header />
        <Update />
      </div>
    </div>
  );
}

export default App;
