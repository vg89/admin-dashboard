import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import { lazy,Suspense } from "react";
import Loader from "./components/Loader";
import { Link } from "react-router-dom";

const Dashboard =lazy(()=>import("./pages/Dashboard"));
const Products =lazy(()=>import("./pages/Products"));
const Transactions =lazy(()=>import("./pages/Transactions"));
const Customers =lazy(()=>import("./pages/Customers"));
const NewProduct =lazy(()=>import("./pages/management/NewProduct"));
const ProductManagement =lazy(()=>import("./pages/management/ProductManagement"));
const TransactionManagement =lazy(()=>import('./pages/management/TransactionManagement'));
const BarCharts =lazy(()=>import("./pages/charts/BarCharts"));
const LineCharts =lazy(()=>import("./pages/charts/LineCharts"));
const PieCharts =lazy(()=>import("./pages/charts/PieCharts"));
const Coupon =lazy(()=>import("./pages/apps/Coupon"));
const Toss =lazy(()=>import("./pages/apps/Toss"));
const Stopwatch =lazy(()=>import("./pages/apps/Stopwatch"));


const App = () => {
  return (
  
  <Router>
    <Suspense fallback={<Loader/>}>
     <Routes>
      
      {/* by default if the user does not give any router then we redirect the user to the dashboard */}

      <Route path="/" element={<Link to="/admin/dashboard"><button>Visit Dashboard</button></Link>}/> 

      <Route path="/admin/dashboard" element={<Dashboard/>}/> 
      <Route path="/admin/product" element={<Products/>}/>
      <Route path="/admin/transaction" element={<Transactions/>}/>
      <Route path="/admin/customer" element={<Customers/>}/>

      {/* Charts */}

      <Route path="/admin/chart/bar" element={<BarCharts/>}/>
      <Route path="/admin/chart/line" element={<LineCharts/>}/>
      <Route path="/admin/chart/pie" element={<PieCharts/>}/>

      {/* Apps */}

      <Route path="/admin/app/stopwatch" element={<Stopwatch/>}/>
      <Route path="/admin/app/coupon" element={<Coupon/>}/>
      <Route path="/admin/app/toss" element={<Toss/>}/>

      {/* Management:the extra routes in the different pages are written here */}
      <Route path="/admin/product/new" element={<NewProduct/>}/>
      <Route path="/admin/product/:id" element={<ProductManagement/>}/>
      <Route path="/admin/transaction/:id" element={<TransactionManagement/>}/>
    
    </Routes>
    </Suspense>
  </Router>
  );
};

export default App;
