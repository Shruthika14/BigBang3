// // import React, { useState } from "react";
// // import styled from "styled-components";
// // import axios from'axios';

// // export default function FeedbackForm({ onSubmit }) {
// //     const FeedbackForm = async (feedback) => {
// //         try {
// //           await axios.post('https://localhost:7222/api/Testimonials', feedback);
// //           console.log('Feedback submitted successfully');
// //           // After successful submission, fetch testimonials again to get the updated list
// //           fetchTestimonials();
// //         } catch (error) {
// //           console.error('Error submitting feedback:', error);
// //         }
// //       };
    
// //   const [name, setName] = useState("");
// //   const [message, setMessage] = useState("");

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     onSubmit({ name, message });
// //     setName("");
// //     setMessage("");
// //   };

// //   return (
// //     <FormWrapper>
// //       <h2>Leave a Feedback</h2>
// //       <Form onSubmit={handleSubmit}>
// //         <input
// //           type="text"
// //           placeholder="Your Name"
// //           value={name}
// //           onChange={(e) => setName(e.target.value)}
// //           required
// //         />
// //         <textarea
// //           placeholder="Your Feedback Message"
// //           value={message}
// //           onChange={(e) => setMessage(e.target.value)}
// //           required
// //         ></textarea>
// //         <button type="submit">Submit</button>
// //       </Form>
// //     </FormWrapper>
// //   );
// // }

// // const FormWrapper = styled.div`
// //   padding: 2rem;
// //   background-color: aliceblue;
// //   border-radius: 0.5rem;
// //   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
// //   transition: 0.3s ease-in-out;

// //   h2 {
// //     text-align: center;
// //     margin-bottom: 1rem;
// //   }
// // `;

// // const Form = styled.form`
// //   display: flex;
// //   flex-direction: column;

// //   input,
// //   textarea {
// //     margin-bottom: 1rem;
// //     padding: 0.5rem;
// //     border: 1px solid #ccc;
// //     border-radius: 0.3rem;
// //   }

// //   button {
// //     background-color: #8338ec;
// //     color: white;
// //     border: none;
// //     padding: 0.5rem 1rem;
// //     border-radius: 0.3rem;
// //     cursor: pointer;
// //   }
// // `;
// import React, { useState } from 'react';
// import axios from 'axios';

// const FeedbackForm = () => {
//   const [name, setName] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post('https://localhost:7222/api/Testimonials', {
//         name,
//         message,
//         date: new Date().toISOString(), // Assuming 'date' is a required field in the Testimonial model
//       });

//       // Clear the form after successful submission
//       setName('');
//       setMessage('');
//     } catch (error) {
//       console.error('Error submitting feedback:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Feedback Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="message">Message:</label>
//           <textarea
//             id="message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Submit Feedback</button>
//       </form>
//     </div>
//   );
// };

// export default FeedbackForm;

import React, { useState } from 'react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import styled from 'styled-components';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://localhost:7222/api/Testimonials', {
        name,
        message,
        rating,
        date: new Date().toISOString(), // Assuming 'date' is a required field in the Testimonial model
      });

      // Clear the form after successful submission
      setName('');
      setMessage('');
      setRating(0);
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <FormWrapper>
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <label>Rating:</label>
          <StarRatings
            rating={rating}
            starRatedColor="#FFD700"
            changeRating={(newRating) => setRating(newRating)}
            numberOfStars={5}
            name="rating"
          />
        </FormGroup>
        <SubmitButton type="submit">Submit Feedback</SubmitButton>
      </form>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  padding: 2rem;
  background-color: aliceblue;
  border-radius: 0.5rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: 0.3s ease-in-out;

  h2 {
    text-align: center;
    margin-bottom: 1rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.3rem;
  }

  /* Styling for the star rating */
  .ratings {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.5rem;

    .star {
      font-size: 2rem;
      color: #ccc;
      cursor: pointer;
      transition: color 0.3s;
    }

    .star.active {
      color: #FFD700;
    }
  }
`;

const SubmitButton = styled.button`
  background-color: #8338ec;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  cursor: pointer;
  width: 100%;
`;

export default FeedbackForm;
