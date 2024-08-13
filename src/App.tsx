import Home from "./domain/pages/Home";
import AppFooter from "./domain/components/AppFooter/AppFooter";
import AppHeader from "./domain/components/AppHeader/AppHeader";

function App() {
  return (
    <div className="app-container">
      <AppHeader />
      <main className="app-content">
        <Home></Home>
      </main>
      <AppFooter />
    </div>
  );
}

export default App;
