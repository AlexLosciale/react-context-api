import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/chi-siamo">Chi Siamo</Link></li>
          <li><Link to="/posts">Lista Post</Link></li>
        </ul>
      </nav>
    </div>
  );
};
export default Layout;