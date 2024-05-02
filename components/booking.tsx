'use client';

import React, { useState } from 'react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Replace this with your email sending logic
    console.log('Form submitted:', formData);
    // Reset form fields after submission
    setFormData({
      name: '',
      surname: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      message: ''
    });
  };

  return (
    <div className="flex items-center justify-center h-full w-full p-3 py-2 mb-10 ">
  <div className="bg-gray-100 dark:bg-gray-800 p-8 max-w-md w-full rounded-lg">
    <div className="text-center space-y-2">
      <h2 className="text-2xl font-bold p-2">Make a booking</h2>
      <p className="text-gray-500 dark:text-gray-400 pb-10">Fill out the form below to schedule your appointment.</p>
    </div>
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4">
        <div className="space-y-2">
          <label className="p-2" htmlFor="name">Name</label>
          <input id="name"  className="w-full p-2 border-2 border-solid rounded-lg" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
        </div>
        <div className="space-y-2">
          <label  className="p-2"htmlFor="surname">Surname</label>
          <input id="surname"  className="w-full p-2 border-2 border-solid rounded-lg" value={formData.surname} onChange={handleChange} placeholder="Enter your surname" />
        </div>
      </div>
      <div className="space-y-2">
        <label className="p-2" htmlFor="email">Email</label>
        <input id="email" className="w-full p-2 border-2 border-solid rounded-lg" value={formData.email} onChange={handleChange} placeholder="Enter your email" type="email" />
      </div>
      <div className="space-y-2">
        <label className="p-2" htmlFor="phone">Phone</label>
        <input id="phone" className="w-full p-2 border-2 border-solid rounded-lg" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" />
      </div>
      <div className="space-y-2">
        <label className="p-2" htmlFor="date">Date</label>
        <input className="w-full p-2 border-2 border-solid rounded-lg" id="date" value={formData.date} onChange={handleChange} type="date" />
      </div>
      <div className="space-y-2">
        <label className="p-2" htmlFor="time">Time</label>
        <input className="w-full p-2 border-2 border-solid rounded-lg" id="time" value={formData.time} onChange={handleChange} type="time" />
      </div>
      <div className="space-y-2">
        <label className="p-2" htmlFor="message">Message</label>
        <textarea className="w-full p-2 border-2 border-solid rounded-lg" id="message" value={formData.message} onChange={handleChange} placeholder="Enter your message" />
      </div>
      <div className="p-3">
        <button className="w-full border rounded-lg bg-orange-400 p-2" type="submit">
          Submit Enquiry
        </button>
      </div>
    </form>
  </div>
</div>

  );
}


