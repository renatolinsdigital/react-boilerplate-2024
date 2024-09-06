import "./AppHeader.scss";
import reactLogo from "@/domain/images/react.svg";

function AppHeader() {
  return (
    <div className="app-header-container">
      <a href="./" className="logo-and-title-container">
        <img src={reactLogo} className="logo" alt="App logo" />
        <span>Boilerplate App</span>
      </a>
    </div>
  );
}

export default AppHeader;
