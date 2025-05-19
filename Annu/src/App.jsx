import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    ownerName: '',
    regNumber: '',
    carBrand: '',
    purchaseDate: '',
    serviceDate: ''
  });

  const [submittedData, setSubmittedData] = useState(null); // For showing preview

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const formatDate = (isoDate) => {
    if (!isoDate) return '';
    const [year, month, day] = isoDate.split("-");
    return `${day}-${month}-${year}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedData = {
      ...formData,
      purchaseDate: formatDate(formData.purchaseDate),
      serviceDate: formatDate(formData.serviceDate),
    };

    localStorage.setItem('vehicleRegistration', JSON.stringify(formattedData));
    setSubmittedData(formattedData);
    alert('Registration submitted and saved to localStorage!');
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <div className="form-header">
          <h1>EngineEx</h1>
          <p>Vehicle Registration Form</p>
        </div>

        <div className="form-content">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="ownerName">Owner's Name <span className="required">*</span></label>
              <input
                type="text"
                name="ownerName"
                placeholder="Enter full name"
                value={formData.ownerName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="regNumber">Car Registration Number <span className="required">*</span></label>
              <input
                type="text"
                name="regNumber"
                placeholder="e.g., KA-01-AB-1234"
                value={formData.regNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="carBrand">Car Brand <span className="required">*</span></label>
              <input
                type="text"
                name="carBrand"
                placeholder="e.g., Tata, Ashok Leyland"
                value={formData.carBrand}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group date-wrapper">
              <label htmlFor="purchaseDate">Car Purchase Date <span className="required">*</span></label>
              <div className="date-input-container">
                <input
                  type="date"
                  name="purchaseDate"
                  id="purchaseDate"
                  value={formData.purchaseDate}
                  onChange={handleChange}
                  required
                />
                <span
                  className="calendar-icon"
                  onClick={() => document.getElementById('purchaseDate').showPicker?.()}
                >
                  📅
                </span>
              </div>
            </div>

            <div className="form-group date-wrapper">
              <label htmlFor="serviceDate">Last Service Date <span className="required">*</span></label>
              <div className="date-input-container">
                <input
                  type="date"
                  name="serviceDate"
                  id="serviceDate"
                  value={formData.serviceDate}
                  onChange={handleChange}
                  required
                />
                <span
                  className="calendar-icon"
                  onClick={() => document.getElementById('serviceDate').showPicker?.()}
                >
                  📅
                </span>
              </div>
            </div>

            <button type="submit" className="submit-btn">Submit Registration</button>
          </form>

          {submittedData && (
            <div className="date-preview">
              <h3>Submitted Data</h3>
              <p><strong>Owner:</strong> {submittedData.ownerName}</p>
              <p><strong>Registration No:</strong> {submittedData.regNumber}</p>
              <p><strong>Brand:</strong> {submittedData.carBrand}</p>
              <p><strong>Purchase Date:</strong> {submittedData.purchaseDate}</p>
              <p><strong>Last Service:</strong> {submittedData.serviceDate}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;