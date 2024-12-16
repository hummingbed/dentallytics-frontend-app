import { Link } from "react-router-dom";
function Home() {




  return (
    <div>
      <h1>This is the home page</h1>
      <Link to="products">Click to view our about page</Link> <br />
      <Link to="analysis">Click to view our analysis page</Link> <br />
      <Link to="dashboard/mca-analysis">Click to view our analysis page</Link> <br />
    </div>
  );
}

export default Home;