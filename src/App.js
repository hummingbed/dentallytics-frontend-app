import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import routes from './route/routes';
import MainLayout from "./layouts/MainLayout/MainLayout"; 

function App() {
  return (
    <div className="App">
       <MainLayout>
        {routes}
      </MainLayout>
    </div>
  );
}

export default App;
