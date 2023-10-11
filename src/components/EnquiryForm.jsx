import React, { useState } from 'react';
import './EnquiryForm.css'; 

const EnquiryForm = ({ onFormSubmit }) => {
 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEnquiry = {
      name,
      email,
      message,
    };

    onFormSubmit(newEnquiry);

    setName('');
    setEmail('');
    setMessage('');
    alert("You are Submitted the form successfully");
  };

  return (
    <div className="enquiry-form-container">
      <div className="enquiry-form">
        <h2>Enquiry Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
