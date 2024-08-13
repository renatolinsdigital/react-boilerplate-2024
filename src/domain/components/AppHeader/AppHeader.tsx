import "./styles.scss";
import reactLogo from "./assets/react.svg";

function AppHeader() {
  return (
    <div className="app-header-container">
      <a href="./" className="logo-and-title-container">
        <img src={reactLogo} className="logo" alt="App logo" />
        <span>To do App</span>
      </a>
    </div>
  );
}

export default AppHeader;
