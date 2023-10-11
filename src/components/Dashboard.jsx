import React from 'react'
import { Link , } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
    navigate("/admin/login");
    
  };
  return (
    <div>
    <div className="container-fluid">
      <div className="row">
        <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
          <div className="position-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
              <Link to="/ordered" className="nav-link">
                Ordered
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/dashboard/products" className="nav-link">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/dashboard/customers" className="nav-link">
                  Customers
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/dashboard/settings" className="nav-link">
                  Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/login" className="nav-link">
                <button className="btn btn-primary" onClick={handleLogout}>
                   Logout
                </button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
       
        </main>
      </div>
    </div>
      
    </div>
  )
}

export default Dashboard
