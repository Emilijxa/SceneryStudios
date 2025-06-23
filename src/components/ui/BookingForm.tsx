'use client';
import { useState } from 'react';

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="w-full max-w-md mx-auto py-16 px-4" id="booking">
      <h2 className="text-2xl font-bold mb-4 text-white">Book a 15min Planning Call</h2>
      {submitted ? (
        <div className="bg-green-900/80 text-green-200 p-6 rounded-xl text-center">Thank you! We will contact you soon.</div>
      ) : (
        <form className="bg-gray-900/80 p-8 rounded-2xl shadow-xl flex flex-col gap-4" onSubmit={e => {e.preventDefault(); setSubmitted(true);}}>
          <input className="bg-black/60 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400" placeholder="Name" required />
          <input className="bg-black/60 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400" placeholder="Email" type="email" required />
          <input className="bg-black/60 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400" placeholder="Phone (optional)" />
          <input className="bg-black/60 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400" placeholder="Preferred Date/Time" type="datetime-local" required />
          <select className="bg-black/60 border border-gray-700 rounded-lg px-4 py-3 text-white" required>
            <option value="">Type of Shoot</option>
            <option>Street Portraits</option>
            <option>Birthday Portraits</option>
            <option>Graduation Portraits</option>
            <option>Pre-Wedding Portraits</option>
            <option>Family Portraits</option>
            <option>Model Photoshoots</option>
            <option>Events</option>
            <option>Product Photography</option>
            <option>Landscape Photography</option>
          </select>
          <textarea className="bg-black/60 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400" placeholder="Message" rows={3} />
          <button className="w-full bg-white text-black py-3 rounded-xl font-semibold mt-4 hover:bg-gray-200 transition">
            Submit
          </button>
        </form>
      )}
    </section>
  );
} 