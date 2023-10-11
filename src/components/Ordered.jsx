import React from 'react';
import './Ordered.css'; 

function Ordered({ submittedEnquiries }) {
  return (
    <div>
      {submittedEnquiries.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th className="table-header">Name</th>
              <th className="table-header">Email</th>              
            </tr>
          </thead>
          <tbody>
            {submittedEnquiries.map((enquiry, index) => (
              <tr key={index}>
                <td>{enquiry.name}</td>
                <td>{enquiry.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No enquiries submitted yet.</p>
      )}
    </div>
  );
}

export default Ordered;
