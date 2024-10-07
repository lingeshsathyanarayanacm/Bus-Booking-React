import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import './pay.css';
import { Link } from 'react-router-dom'; // Import Link

function PaymentStatus() {
  const [paymentStatus, setPaymentStatus] = useState("Processing");
  const [showTicketButton, setShowTicketButton] = useState(false);

  // Simulate a successful payment after 2 seconds
  useEffect(() => {
    const simulatePayment = setTimeout(() => {
      setPaymentStatus("Payment Successful");
      setShowTicketButton(true);
    }, 2000);

    // Clear the timeout when the component unmounts or when payment is successful
    return () => clearTimeout(simulatePayment);
  }, []);

  const handleViewTicket = () => {
    // Handle the logic to view the ticket here
    console.log("View Ticket");
    // For example, you can navigate to a new page or show a modal
  };

  return (
    <div className="payment-container">
      <div className={`payment-status ${paymentStatus === "Payment Successful" ? "success" : ""}`}>
        <h2>{paymentStatus}</h2>
        {paymentStatus === "Processing" && (
          <p>Your payment is currently being processed...</p>
        )}
        {paymentStatus === "Payment Successful" && (
          <div>
            <div className="success-icon">
              <FaCheckCircle />
            </div>
            {showTicketButton && (
              <button className="view-ticket-button" onClick={handleViewTicket}>
              <Link to="/ticket" style={{ color: 'white', textDecoration: 'none' }}>
                View Ticket
              </Link>
            
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default PaymentStatus;
