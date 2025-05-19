import React, { useState, useEffect } from 'react';

const vehicleBrands = [
  'Tata Motors', 
  'Ashok Leyland', 
  'Mahindra', 
  'Volvo', 
  'Mercedes-Benz', 
  'Eicher Motors', 
  'Other'
];

export default function EngineExVehicleForm() {
  const [formData, setFormData] = useState({
    name: '',
    registrationNumber: '',
    brand: '',
    purchaseDate: '',
    lastServiceDate: ''
  });

  const [validations, setValidations] = useState({
    name: { isValid: false, message: '' },
    registrationNumber: { isValid: false, message: '' },
    brand: { isValid: false, message: '' },
    purchaseDate: { isValid: false, message: '' },
    lastServiceDate: { isValid: false, message: '' }
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const validateName = (name) => {
    const isValid = name.trim().length >= 2 && /^[a-zA-Z\s]+$/.test(name);
    return {
      isValid,
      message: isValid ? '' : 'Name must be at least 2 characters and contain only letters'
    };
  };

  const validateRegistrationNumber = (regNo) => {
    const regexPattern = /^[A-Z]{2}\s?[0-9]{2}\s?[A-Z]{1,2}\s?[0-9]{4}$/;
    const isValid = regexPattern.test(regNo.replace(/\s/g, ''));
    return {
      isValid,
      message: isValid ? '' : 'Invalid registration number format (e.g., KA01AB1234)'
    };
  };

  const validatePurchaseDate = (date) => {
    const selectedDate = new Date(date);
    const currentDate = new Date();
    const minValidDate = new Date('1990-01-01');
    
    const isValid = selectedDate <= currentDate && selectedDate >= minValidDate;
    return {
      isValid,
      message: isValid ? '' : 'Purchase date must be between 1990 and today'
    };
  };

  const validateLastServiceDate = (date) => {
    const selectedDate = new Date(date);
    const currentDate = new Date();
    const purchaseDate = new Date(formData.purchaseDate);
    
    const isValid = selectedDate <= currentDate && 
                    (!formData.purchaseDate || selectedDate >= purchaseDate);
    return {
      isValid,
      message: isValid ? '' : 'Service date must be after purchase date and not in the future'
    };
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Update form data
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    let validation;
    switch (name) {
      case 'name':
        validation = validateName(value);
        break;
      case 'registrationNumber':
        validation = validateRegistrationNumber(value);
        break;
      case 'brand':
        validation = { 
          isValid: value !== '', 
          message: value ? '' : 'Please select a vehicle brand' 
        };
        break;
      case 'purchaseDate':
        validation = validatePurchaseDate(value);
        break;
      case 'lastServiceDate':
        validation = validateLastServiceDate(value);
        break;
      default:
        validation = { isValid: true, message: '' };
    }

    setValidations(prevState => ({
      ...prevState,
      [name]: validation
    }));
  };

  useEffect(() => {
    const allFieldsValid = Object.values(validations).every(field => field.isValid);
    setIsFormValid(allFieldsValid);
  }, [validations]);

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log('Form submitted:', formData);
      alert('Vehicle assessment initiated! Redirecting to analysis...');
    } else {
      // Mark all fields as touched to show validation messages
      const touchedValidations = Object.keys(validations).reduce((acc, key) => {
        acc[key] = validations[key];
        return acc;
      }, {});
      setValidations(touchedValidations);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="bg-purple-600 text-white text-center py-4 rounded-t-lg">
        <h2 className="text-2xl font-bold">EngineEx</h2>
        <p className="text-sm">Vehicle Registration Form</p>
      </div>
      
      <form className="p-6 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Owner's Name <span className="text-red-500">*</span>
          </label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Annu"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {!validations.name.isValid && validations.name.message && (
            <p className="text-xs text-red-500 mt-1">{validations.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Car Registration Number <span className="text-red-500">*</span>
          </label>
          <input 
            type="text" 
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleChange}
            placeholder="e.g., KA-01-AB-1234"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {!validations.registrationNumber.isValid && validations.registrationNumber.message && (
            <p className="text-xs text-red-500 mt-1">{validations.registrationNumber.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Car Brand <span className="text-red-500">*</span>
          </label>
          <select
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">e.g., Tata, Ashok Leyland</option>
            {vehicleBrands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
          {!validations.brand.isValid && validations.brand.message && (
            <p className="text-xs text-red-500 mt-1">{validations.brand.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Car Purchase Date <span className="text-red-500">*</span>
          </label>
          <input 
            type="date" 
            name="purchaseDate"
            value={formData.purchaseDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {!validations.purchaseDate.isValid && validations.purchaseDate.message && (
            <p className="text-xs text-red-500 mt-1">{validations.purchaseDate.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last Service Date <span className="text-red-500">*</span>
          </label>
          <input 
            type="date" 
            name="lastServiceDate"
            value={formData.lastServiceDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          {!validations.lastServiceDate.isValid && validations.lastServiceDate.message && (
            <p className="text-xs text-red-500 mt-1">{validations.lastServiceDate.message}</p>
          )}
        </div>

        <button 
          type="submit"
          disabled={!isFormValid}
          className={`w-full py-3 rounded-md text-white font-bold transition-colors duration-300 
            ${isFormValid 
              ? 'bg-purple-600 hover:bg-purple-700' 
              : 'bg-gray-400 cursor-not-allowed'}`}
        >
          Submit Registration
        </button>
      </form>
    </div>
  );
}