import './styles.scss'
import reactLogo from './assets/react.svg'

function AppHeader() {
  
  return (
    <div className="app-header-container">
    <a href="./" target="_blank">
      <img src={reactLogo} className="logo react" alt="React logo" />
    </a> To do App
  </div>
  )
}

export default AppHeader
