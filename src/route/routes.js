import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/Products';
import ProductDetail from '../pages/ProductDetail';
import AnalysisComponent from '../pages/AnalysisComponent ';


const routes = (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<About />} />
        <Route path="/analysis" element={<AnalysisComponent />} />
        <Route path="/products/product/:productId" element={<ProductDetail />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
 
  export default routes;