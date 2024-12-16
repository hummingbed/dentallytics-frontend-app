import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/Products';
import Login from '../pages/Login/Login';
import ProductDetail from '../pages/ProductDetail';
import AnalysisComponent from '../pages/AnalysisComponent ';
import McaAnalysisDashboard from '../pages/dashboard/McaAnalysisDashboard'
// import PrivateRoute from '../components/PrivateRoute/PrivateRoute';



const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/products" element={<About />} />
    <Route path="/analysis" element={<AnalysisComponent />} />
    <Route path="/products/product/:productId" element={<ProductDetail />} />
    <Route path="/dashboard/mca-analysis/" element={<McaAnalysisDashboard />} />
    {/* <Route path="/dashboard" element={<PrivateRoute isAuthenticated={userIsLoggedIn}><Dashboard /></PrivateRoute>}/> */}
    {/* Add more routes as needed */}
  </Routes>
);

export default routes;