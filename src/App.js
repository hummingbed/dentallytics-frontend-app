import { BrowserRouter as Router } from 'react-router-dom';
import routes from './route/routes';
import MainLayout from "./layouts/MainLayout/MainLayout";

function App() {
  return (
    <Router>
      <div className="App">
        <MainLayout>
          {routes}
        </MainLayout>
      </div>
    </Router>

  );
}

export default App;

