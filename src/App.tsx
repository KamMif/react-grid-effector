import './App.css'
import {DashboardPage} from "./pages/dashboard/ui/DashboardPage.tsx";
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

function App() {

  return (
      <div className="app">
          <DashboardPage />
      </div>
  )
}

export default App
