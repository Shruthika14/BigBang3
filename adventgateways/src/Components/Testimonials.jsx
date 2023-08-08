// import React from "react";
// import styled from "styled-components";
// import avatarImage from "../assets/avatarImage.jpeg";
// export default function Testimonials() {
//   return (
//     <Section id="testimonials">
//       <div className="title">
//         <h2>Happy Customers</h2>
//       </div>
//       <div className="testimonials">
//         <div className="testimonial">
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
//             asperiores eaque.
//           </p>
//           <div className="info">
//             <img src={avatarImage} alt="" />
//             <div className="details">
//               <h4>Kishan Sheth</h4>
//               <span>CEO - Shashaan Web Solutions</span>
//             </div>
//           </div>
//         </div>
//         <div className="testimonial">
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
//             asperiores eaque.
//           </p>
//           <div className="info">
//             <img src={avatarImage} alt="" />
//             <div className="details">
//               <h4>Kishan Sheth</h4>
//               <span>CEO - Shashaan Web Solutions</span>
//             </div>
//           </div>
//         </div>
//         <div className="testimonial">
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
//             asperiores eaque.
//           </p>
//           <div className="info">
//             <img src={avatarImage} alt="" />
//             <div className="details">
//               <h4>Kishan Sheth</h4>
//               <span>CEO - Shashaan Web Solutions</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Section>
//   );
// }

// const Section = styled.section`
//   margin: 5rem 0;
//   .title {
//     text-align: center;
//     margin-bottom: 2rem;
//   }
//   .testimonials {
//     display: flex;
//     justify-content: center;
//     margin: 0 2rem;
//     gap: 2rem;
//     .testimonial {
//       background-color: aliceblue;
//       padding: 2rem;
//       border-radius: 0.5rem;
//       box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
//       transition: 0.3s ease-in-out;
//       &:hover {
//         transform: translateX(0.4rem) translateY(-1rem);
//         box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
//       }
//       .info {
//         display: flex;
//         justify-content: center;
//         gap: 1rem;
//         align-items: center;
//         margin-top: 1rem;
//         img {
//           border-radius: 3rem;
//           height: 3rem;
//         }
//         .details {
//           span {
//             font-size: 0.9rem;
//           }
//         }
//       }
//     }
//   }
//   @media screen and (min-width: 280px) and (max-width: 768px) {
//     .testimonials {
//       flex-direction: column;
//       margin: 0;
//       .testimonial {
//         justify-content: center;
//         .info {
//           flex-direction: column;
//           justify-content: center;
//         }
//       }
//     }
//   }
// `;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Testimonials = () => {
//   const [testimonials, setTestimonials] = useState([]);

//   useEffect(() => {
//     const fetchTestimonials = async () => {
//       try {
//         const response = await axios.get('https://localhost:7222/api/Testimonials');
//         setTestimonials(response.data);
//       } catch (error) {
//         console.error('Error fetching testimonials:', error);
//       }
//     };

//     fetchTestimonials();
//   }, []);

//   return (
//     <div>
//       <h1>Testimonials</h1>
//       <ul>
//         {testimonials.map((testimonial) => (
//           <li key={testimonial.testimonialId}>
//             <p>Name: {testimonial.name}</p>
//             <p>Message: {testimonial.message}</p>
//             <p>Date: {testimonial.date}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Testimonials;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';

// const Testimonials = () => {
//   const [testimonials, setTestimonials] = useState([]);

//   useEffect(() => {
//     const fetchTestimonials = async () => {
//       try {
//         const response = await axios.get('/api/Testimonials');
//         setTestimonials(response.data);
//       } catch (error) {
//         console.error('Error fetching testimonials:', error);
//       }
//     };

//     fetchTestimonials();
//   }, []);

//   return (
//     <Container>
//       <Heading>Testimonials</Heading>
//       <TestimonialList>
//         {testimonials.map((testimonial) => (
//           <TestimonialItem key={testimonial.testimonialId}>
//             <Name>Name: {testimonial.name}</Name>
//             <Message>Message: {testimonial.message}</Message>
//             <Date>Date: {testimonial.date}</Date>
//           </TestimonialItem>
//         ))}
//       </TestimonialList>
//     </Container>
//   );
// };

// export default Testimonials;

// const Container = styled.div`
//   max-width: 600px;
//   margin: 0 auto;
//   padding: 20px;
// `;

// const Heading = styled.h1`
//   text-align: center;
//   font-size: 2rem;
//   margin-bottom: 20px;
//   color: #333;
// `;

// const TestimonialList = styled.ul`
//   list-style: none;
//   padding: 0;
// `;

// const TestimonialItem = styled.li`
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   padding: 10px;
//   margin: 10px 0;
//   background-color: #f9f9f9;
// `;

// const Name = styled.p`
//   font-weight: bold;
//   margin-bottom: 5px;
// `;

// const Message = styled.p`
//   margin-bottom: 5px;
// `;

// const Date = styled.p`
//   color: #666;
//   font-size: 0.8rem;
//   margin-bottom: 0;
// `;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';

// const Testimonial = () => {
//   const [testimonials, setTestimonials] = useState([]);

//   useEffect(() => {
//     fetchTestimonials();
//   }, []);

//   const fetchTestimonials = async () => {
//     try {
//       const response = await axios.get('/api/Testimonials');
//       setTestimonials(response.data);
//     } catch (error) {
//       console.error('Error fetching testimonials:', error);
//     }
//   };

//   return (
//     <Container>
//       <Heading>Testimonials</Heading>
//       <TestimonialList>
//         {testimonials.map((testimonial) => (
//           <TestimonialItem key={testimonial.testimonialId}>
//             <Name>Name: {testimonial.name}</Name>
//             <Message>Message: {testimonial.message}</Message>
//             <Date>Date: {testimonial.date}</Date>
//           </TestimonialItem>
//         ))}
//       </TestimonialList>
//     </Container>
//   );
// };

// export default Testimonial;

// const Container = styled.div`
//   max-width: 600px;
//   margin: 0 auto;
//   padding: 20px;
// `;

// const Heading = styled.h1`
//   text-align: center;
//   font-size: 2rem;
//   margin-bottom: 20px;
//   color: #333;
// `;

// const TestimonialList = styled.ul`
//   list-style: none;
//   padding: 0;
// `;

// const TestimonialItem = styled.li`
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   padding: 10px;
//   margin: 10px 0;
//   background-color: #f9f9f9;
// `;

// const Name = styled.p`
//   font-weight: bold;
//   margin-bottom: 5px;
// `;

// const Message = styled.p`
//   margin-bottom: 5px;
// `;

// const Date = styled.p`
//   color: #666;
//   font-size: 0.8rem;
//   margin-bottom: 0;
// `;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import avatarImage from '../assets/avatarImage.jpeg';

// const Testimonials = () => {
//   const [testimonials, setTestimonials] = useState([]);

//   useEffect(() => {
//     const fetchTestimonials = async () => {
//       try {
//         const response = await axios.get('https://localhost:7222/api/Testimonials');
//         setTestimonials(response.data);
//       } catch (error) {
//         console.error('Error fetching testimonials:', error);
//       }
//     };

//     fetchTestimonials();
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4, // Number of testimonials to show at a time
//     slidesToScroll: 1,
//     autoplay: true, // Enable autoplay
//     autoplaySpeed: 3000, // Autoplay speed in milliseconds (e.g., 3000ms = 3 seconds)
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <Container>
//       <Heading>Happy Customers</Heading>
//       <TestimonialsSlider {...settings}>
//         {testimonials.map((testimonial) => (
//           <TestimonialItem key={testimonial.testimonialId}>
//             <TestimonialContent>
//               <p>{testimonial.message}</p>
//             </TestimonialContent>
//             <UserInfo>
//               <UserAvatar src={testimonial.avatar || avatarImage} alt="User Avatar" />
//               <UserName>{testimonial.name}</UserName>
//               <UserDesignation>{testimonial.designation}</UserDesignation>
//             </UserInfo>
//           </TestimonialItem>
//         ))}
//       </TestimonialsSlider>
//     </Container>
//   );
// };

// export default Testimonials;

// const Container = styled.section`
//   margin: 5rem 0;
// `;

// const Heading = styled.h2`
//   text-align: center;
//   margin-bottom: 2rem;
// `;

// const TestimonialsSlider = styled(Slider)`
//   .slick-slide {
//     margin: 0 10px; /* Set the gap between testimonials */
//   }
// `;

// const TestimonialItem = styled.div`
//   background-color: aliceblue;
//   padding: 2rem;
//   border-radius: 0.5rem;
//   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
//   transition: 0.3s ease-in-out;
//   &:hover {
//     transform: translateX(0.4rem) translateY(-1rem);
//     box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
//   }
// `;

// const TestimonialContent = styled.div`
//   p {
//     margin: 0;
//   }
// `;

// const UserInfo = styled.div`
//   display: flex;
//   align-items: center;
//   margin-top: 1rem;
// `;

// const UserAvatar = styled.img`
//   border-radius: 3rem;
//   height: 3rem;
// `;

// const UserName = styled.h4`
//   margin: 0;
//   margin-left: 1rem;
// `;

// const UserDesignation = styled.span`
//   font-size: 0.9rem;
// `;





// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import StarRatings from "react-star-ratings";
// import avatarImage from "../assets/avatarImage.jpeg";

// const Testimonials = () => {
//   const [testimonials, setTestimonials] = useState([]);

//   useEffect(() => {
//     fetchTestimonials();
//   }, []);

//   const fetchTestimonials = async () => {
//     try {
//       const response = await fetch("https://localhost:7222/api/Testimonials"); 
//       const data = await response.json();
//       setTestimonials(data);
//     } catch (error) {
//       console.error("Error fetching testimonials:", error);
//     }
//   };

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <Container>
//       <Heading>Happy Customers</Heading>
//       <TestimonialsSlider {...settings}>
//         {testimonials.map((testimonial) => (
//           <TestimonialItem key={testimonial.testimonialId}>
//             <TestimonialContent>
//               <p>{testimonial.message}</p>
//             </TestimonialContent>
//             <UserInfo>
//               <UserAvatar src={testimonial.avatar || avatarImage} alt="User Avatar" />
//               <div>
//                 <UserName>{testimonial.name}</UserName>
//                 <UserDesignation>{testimonial.designation}</UserDesignation>
//                 <StarRatings
//                   rating={testimonial.rating}
//                   starRatedColor="#FFD700"
//                   numberOfStars={5}
//                   starDimension="20px"
//                   starSpacing="2px"
//                 />
//               </div>
//             </UserInfo>
//           </TestimonialItem>
//         ))}
//       </TestimonialsSlider>
//     </Container>
//   );
// };

// const Container = styled.section`
//   margin: 5rem 0;
//   /* Add any other styles as needed */
// `;

// const Heading = styled.h2`
//   text-align: center;
//   margin-bottom: 2rem;
//   /* Add any other styles as needed */
// `;

// const TestimonialsSlider = styled(Slider)`
//   display: flex;
//   justify-content: center;
//   margin: 0 2rem;
//   gap: 2rem; /* Add gap between each testimonial */
//   .slick-dots {
//     bottom: -40px;
//   }
//   /* Add any other styles as needed */
// `;

// const TestimonialItem = styled.div`
//   background-color: aliceblue;
//   padding: 2rem;
//   border-radius: 0.5rem;
//   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
//   transition: 0.3s ease-in-out;
//   &:hover {
//     transform: translateX(0.4rem) translateY(-1rem);
//     box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
//   }
//   /* Add any other styles as needed */
// `;

// const TestimonialContent = styled.div`
//   /* Add any styles for the testimonial content */
// `;

// const UserInfo = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 1rem;
//   align-items: center;
//   margin-top: 1rem;
//   /* Add any other styles as needed */
// `;

// const UserAvatar = styled.img`
//   border-radius: 3rem;
//   height: 3rem;
//   /* Add any other styles as needed */
// `;

// const UserName = styled.h4`
//   /* Add any styles for the user name */
// `;

// const UserDesignation = styled.span`
//   font-size: 0.9rem;
//   /* Add any styles for the user designation */
// `;

// export default Testimonials;


import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRatings from "react-star-ratings";
import avatarImage from "../assets/avatarImage.jpeg";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch("https://localhost:7222/api/Testimonials"); 
      const data = await response.json();
      
      // Check if data is an array, and transform if necessary
      if (Array.isArray(data)) {
        setTestimonials(data);
      } else if (typeof data === "object") {
        // Transform the object into an array if needed
        const testimonialsArray = Object.values(data);
        setTestimonials(testimonialsArray);
      } else {
        console.error("Invalid data format:", data);
      }
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Heading>Happy Customers</Heading>
      <TestimonialsSlider {...settings}>
        {testimonials.map((testimonial) => (
          <TestimonialItem key={testimonial.testimonialId}>
            <TestimonialContent>
              <p>{testimonial.message}</p>
            </TestimonialContent>
            <UserInfo>
              <UserAvatar src={testimonial.avatar || avatarImage} alt="User Avatar" />
              <div>
                <UserName>{testimonial.name}</UserName>
                <UserDesignation>{testimonial.designation}</UserDesignation>
                <StarRatings
                  rating={testimonial.rating}
                  starRatedColor="#FFD700"
                  numberOfStars={5}
                  starDimension="20px"
                  starSpacing="2px"
                />
              </div>
            </UserInfo>
          </TestimonialItem>
        ))}
      </TestimonialsSlider>
    </Container>
  );
};

const Container = styled.section`
  margin: 5rem 0;
  /* Add any other styles as needed */
`;

const Heading = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  /* Add any other styles as needed */
`;

const TestimonialsSlider = styled(Slider)`
  display: flex;
  justify-content: center;
  margin: 0 2rem;
  gap: 2rem; /* Add gap between each testimonial */
  .slick-dots {
    bottom: -40px;
  }
  /* Add any other styles as needed */
`;

const TestimonialItem = styled.div`
  background-color: aliceblue;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: translateX(0.4rem) translateY(-1rem);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  /* Add any other styles as needed */
`;

const TestimonialContent = styled.div`
  /* Add any styles for the testimonial content */
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  margin-top: 1rem;
  /* Add any other styles as needed */
`;

const UserAvatar = styled.img`
  border-radius: 3rem;
  height: 3rem;
  /* Add any other styles as needed */
`;

const UserName = styled.h4`
  /* Add any styles for the user name */
`;

const UserDesignation = styled.span`
  font-size: 0.9rem;
  /* Add any styles for the user designation */
`;

export default Testimonials;
