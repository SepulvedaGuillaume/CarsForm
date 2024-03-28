import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <h1>Cars</h1>
      <nav className="crumbs">
        <ol>
          <li className="crumb">
            <Link to="/">Home</Link>
          </li>
          <li className="crumb">
            <Link to="/cars">Cars</Link>
          </li>
          <li className="crumb">
            <Link to="/addcar">New car</Link>
          </li>
        </ol>
      </nav>
      <Outlet />
    </>
  );
}
