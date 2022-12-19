import React from 'react';
import { useState } from 'react';

const Shipment = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    
    
  const handleNameBlur = (e) => {
    setName(e.target.value);
  };

  const handleAddressBlur = (e) => {
    setAddress(e.target.value);
  };

  const handlePhoneBlur = (e) => {
    setPhone(e.target.value);
  };
  const createNewUser = (e) =>{
    e.preventDefault();
  }

    return (
        <div>
      <h1 className="text">Proceed Shipment</h1>
      <div className="form-container">
        <form onSubmit={createNewUser}>
          <div className="input-group">
            <label htmlFor="">Name</label>
            <input
              onBlur={handleNameBlur}
              type="name"
              name="name"
              id=""
              placeholder="name"
            />
          </div>
          <div className="input-group">
            <label htmlFor="">Address</label>
            <input
              onBlur={handleAddressBlur}
              type="address"
              name="address"
              id=""
              placeholder="address"
            />
          </div>
          <div className="input-group">
            <label htmlFor="">Phone</label>
            <input
              onBlur={handlePhoneBlur}
              type="phone"
              name="phone"
              id=""
              placeholder="phone"
            />
          </div>
          <input className="btn-submit" type="submit" value="Shipment" />
        </form>
      </div>
    </div>
    );
};

export default Shipment;