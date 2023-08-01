
// import React, { useState } from 'react';
// import axios from 'axios';

// const BookingForm = ({ packages }) => {
//   const [booking, setBooking] = useState({
//     packageId: 0,
//     travelerName: '',
//     numberOfAdults: 0,
//     numberOfChildrenWithBed: 0,
//     numberOfChildrenWithoutBed: 0,
//     totalCost: 0,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setBooking(prevBooking => ({
//       ...prevBooking,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('/api/Bookings', booking)
//       .then(response => {
//         console.log(response.data);
//         // Handle success (e.g., show a success message or redirect)
//       })
//       .catch(error => {
//         console.error('Error creating booking:', error);
//         // Handle error (e.g., show an error message)
//       });
//   };

//   return (
//     <div>
//       <h1>Travel Packages</h1>
//       {packages.map(packages => (
//         <div key={packages.id} className="package-card">
//           <h2>{packages.title}</h2>
//           <p>Approximate Destination: {packages.approximateDestination}</p>
//           <p>From: {packages.from}</p>
//           <p>Duration: {packages.duration}</p>
//           <p>Accommodation: {packages.accommodation}</p>
//           <p>Transportation: {packages.transportation}</p>
//           <p>Adult Cost: {packages.adultCost}</p>
//           <p>Child with Bed Cost: {packages.childWithBedCost}</p>
//           <p>Child without Bed Cost: {packages.childWithoutBedCost}</p>
//           <form onSubmit={handleSubmit}>
//             <input type="hidden" name="packageId" value={packages.id} />
//             <input type="text" name="travelerName" placeholder="Traveler Name" onChange={handleChange} />
//             <input type="number" name="numberOfAdults" placeholder="Number of Adults" onChange={handleChange} />
//             <input type="number" name="numberOfChildrenWithBed" placeholder="Number of Children with Bed" onChange={handleChange} />
//             <input type="number" name="numberOfChildrenWithoutBed" placeholder="Number of Children without Bed" onChange={handleChange} />
//             <button type="submit">Book Now</button>
//           </form>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BookingForm;
