import React from 'react';

const BusTicket = () => {
  return (
    <div className="bus-ticket">
      <div className="ticket-header">
        <h2>Bus Ticket</h2>
      </div>
      <div className="ticket-details">
        <div className="passenger-info">
          <p><span className="label">Passenger:</span> John Doe</p>
        </div>
        <div className="route-info">
          <p><span className="label">From:</span> City A</p>
          <p><span className="label">To:</span> City B</p>
        </div>
        <div className="bus-info">
          <p><span className="label">Bus:</span> ABC123</p>
          <p><span className="label">Seat:</span> A1</p>
          <p><span className="label">Date:</span> 2023-01-01</p>
          <p><span className="label">Departure Time:</span> 12:00 PM</p>
          <p><span className="label">Boarding Point:</span> Bus Stop A</p>
          <p><span className="label">Arrival Time:</span> 03:00 PM</p>
          <p><span className="label">Drop-off Point:</span> Bus Stop B</p>
        </div>
      </div>
      <div className="qr-code">
        <img src="https://pngimg.com/uploads/qr_code/qr_code_PNG25.png" alt="QR Code"  height ="150px" width  ="150px"/>
      </div>
      <style jsx>{`
        .bus-ticket {
          border: 2px solid #3498db;
          border-radius: 10px;
          padding: 20px;
          width: 400px;
          margin: 20px auto;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        }

        .ticket-header {
          text-align: center;
          margin-bottom: 20px;
        }

        .ticket-details {
          margin-bottom: 20px;
        }

        .passenger-info,
        .route-info,
        .bus-info {
          margin-bottom: 15px;
        }

        .label {
          font-weight: bold;
          margin-right: 5px;
        }

        .qr-code {
          text-align: center;
        }

        img {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default BusTicket;
