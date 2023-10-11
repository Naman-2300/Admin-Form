import React,{useState}from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import EnquiryForm from "./components/EnquiryForm";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import Ordered from "./components/Ordered";


const App = () => {

    const [submittedEnquiries, setSubmittedEnquiries] = useState([]);

    const handleFormSubmit = (newEnquiry) => {
      setSubmittedEnquiries([...submittedEnquiries, newEnquiry]);
    };
  
  
  return (
    <Router>
    <div>
      <Nav/>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/enquiry" element={<EnquiryForm  onFormSubmit={handleFormSubmit} />} />
        <Route path="/ordered" element={<Ordered submittedEnquiries={submittedEnquiries} />} />
      </Routes>
    </div>
  </Router>
  );
};

export default App;
