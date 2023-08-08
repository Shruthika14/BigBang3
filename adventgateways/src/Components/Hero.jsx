// import React from "react";
// import styled from "styled-components";
// import homeImage from "../assets/banner-t.jpg";
// import Reccomend from "./Reccomend";
// import Testimonials from "./Testimonials";
// import LoginForm from "./Authentication/login";
// import SignupForm from "./Authentication/registration";
// export default function Hero() {
//   return (
//   <div>
//     <Section id="hero">
//       <div className="background">
//         <img src={homeImage} alt="" />
//       </div>
//       <div className="content">
//         <div className="title">
//           <h1>TRAVEL TO EXPLORE</h1>
//           <p>
//           Discover the world with our travel tourism website, offering curated journeys to breathtaking destinations, personalized itineraries, and unforgettable experiences for wanderers and adventurers alike!
//           </p>
//         </div>
//         <div className="search">
//           <div className="container">
//             <label htmlFor="">Where you want to go</label>
//             <input type="text" placeholder="Search Your location" />
//           </div>
//           <div className="container">
//             <label htmlFor="">Check-in</label>
//             <input type="date" />
//           </div>
//           <div className="container">
//             <label htmlFor="">Check-out</label>
//             <input type="date" />
//           </div>
//           <button>Explore Now</button>
//         </div>
//       </div>
//     </Section>
//    <Reccomend></Reccomend>
//    <Testimonials></Testimonials>
//    </div>
//   );
// }

// const Section = styled.section`
//   position: relative;
//   margin-top: 2rem;
//   width: 100%;
//   height: 100%;

//   .background {
//     height: 100%;
//     img {
//       width: 100%;
//       filter: brightness(60%);
//     }
//   }
//   .content {
//     height: 100%;
//     width: 100%;
//     position: absolute;
//     top: 0;
//     z-index: 3;
//     text-align: center;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     gap: 1rem;
//     .title {
//       color: white;
//       h1 {
//         font-size: 3rem;
//         letter-spacing: 0.2rem;
//       }
//       p {
//         text-align: center;
//         padding: 0 30vw;
//         margin-top: 0.5rem;
//         font-size: 1.2rem;
//       }
//     }
//     .search {
//       display: flex;
//       background-color: #ffffffce;
//       padding: 0.5rem;
//       border-radius: 0.5rem;
//       .container {
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         flex-direction: column;
//         padding: 0 1.5rem;
//         label {
//           font-size: 1.1rem;
//           color: #03045e;
//         }
//         input {
//           background-color: transparent;
//           border: none;
//           text-align: center;
//           color: black;
//           &[type="date"] {
//             padding-left: 3rem;
//           }

//           &::placeholder {
//             color: black;
//           }
//           &:focus {
//             outline: none;
//           }
//         }
//       }
//       button {
//         padding: 1rem;
//         cursor: pointer;
//         border-radius: 0.3rem;
//         border: none;
//         color: white;
//         background-color: #4361ee;
//         font-size: 1.1rem;
//         text-transform: uppercase;
//         transition: 0.3s ease-in-out;
//         &:hover {
//           background-color: #023e8a;
//         }
//       }
//     }
//   }
//   @media screen and (min-width: 280px) and (max-width: 980px) {
//     height: 25rem;
//     .background {
//       background-color: palegreen;
//       img {
//         height: 100%;
//       }
//     }
//     .content {
//       .title {
//         h1 {
//           font-size: 1rem;
//         }
//         p {
//           font-size: 0.8rem;
//           padding: 1vw;
//         }
//       }
//       .search {
//         flex-direction: column;
//         padding: 0.8rem;
//         gap: 0.8rem;
//         /* padding: 0; */
//         .container {
//           padding: 0 0.8rem;
//           input[type="date"] {
//             padding-left: 1rem;
//           }
//         }
//         button {
//           padding: 1rem;
//           font-size: 1rem;
//         }
//         /* display: none; */
//       }
//     }
//   }
// `; 

// import React, { useState } from 'react';
// import styled from 'styled-components';
// import LoginForm from './Authentication/login';
// import SignupForm from './signupform';
// import homeImage from '../assets/banner-t.jpg';
// import Reccomend from './Reccomend';
// import Testimonials from './Testimonials';

// export default function Hero() {
//   const [showSignupForm, setShowSignupForm] = useState(false);

//   const handleExploreNowClick = () => {
//     setShowSignupForm(true);
//   };
//   return (
//     <Wrapper>
//       <Section id="hero">
//         <Background>
//           <img src={homeImage} alt="" />
//         </Background>
//         <Content>
//           <Title>
//             <h1>TRAVEL TO EXPLORE</h1>
//             <p>
//               Discover the world with our travel tourism website, offering curated journeys to breathtaking destinations, personalized itineraries, and unforgettable experiences for wanderers and adventurers alike!
//             </p>
//           </Title>
//           <Search>
//             <SearchContainer>
//               <SearchLabel>Where you want to go</SearchLabel>
//               <SearchInput type="text" placeholder="Search Your location" />
//             </SearchContainer>
//             <SearchContainer>
//               <SearchLabel>Check-in</SearchLabel>
//               <SearchInput type="date" />
//             </SearchContainer>
//             <SearchContainer>
//               <SearchLabel>Check-out</SearchLabel>
//               <SearchInput type="date" />
//             </SearchContainer>
//             <ExploreButton onClick={handleExploreNowClick}>Explore Now</ExploreButton>
//           </Search>
//         </Content>
//       </Section>
//       {showLoginForm && (
//         <Card>
//           <LoginForm />
//         </Card>
//       )}
//       {showSignupForm && (
//         <Card>
//           <SignupForm />
//         </Card>
//       )}
//       <Reccomend />
//       <Testimonials />
//     </Wrapper>
//   );
// };

// const Wrapper = styled.div`
//   position: relative;
// `;

// const Section = styled.section`
//   position: relative;
//   margin-top: 2rem;
//   width: 100%;
//   height: 100%;

//   /* Your existing styles for the section */
// `;

// const Background = styled.div`
//   height: 100%;
//   img {
//     width: 100%;
//     filter: brightness(60%);
//   }
// `;

// const Content = styled.div`
//   height: 100%;
//   width: 100%;
//   position: absolute;
//   top: 0;
//   z-index: 3;
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: 1rem;

//   /* Your existing styles for content */
// `;

// const Title = styled.div`
//   color: white;
//   h1 {
//     font-size: 3rem;
//     letter-spacing: 0.2rem;
//   }
//   p {
//     text-align: center;
//     padding: 0 30vw;
//     margin-top: 0.5rem;
//     font-size: 1.2rem;
//   }
// `;

// const Search = styled.div`
//   display: flex;
//   background-color: #ffffffce;
//   padding: 0.5rem;
//   border-radius: 0.5rem;

//   /* Your existing styles for search */
// `;

// const SearchContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   padding: 0 1.5rem;
// `;

// const SearchLabel = styled.label`
//   font-size: 1.1rem;
//   color: #03045e;
// `;

// const SearchInput = styled.input`
//   background-color: transparent;
//   border: none;
//   text-align: center;
//   color: black;

//   &[type="date"] {
//     padding-left: 3rem;
//   }

//   &::placeholder {
//     color: black;
//   }

//   &:focus {
//     outline: none;
//   }
// `;

// const ExploreButton = styled.button`
//   padding: 1rem;
//   cursor: pointer;
//   border-radius: 0.3rem;
//   border: none;
//   color: white;
//   background-color: #4361ee;
//   font-size: 1.1rem;
//   text-transform: uppercase;
//   transition: 0.3s ease-in-out;

//   &:hover {
//     background-color: #023e8a;
//   }
// `;

// const Card = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background-color: white;
//   padding: 20px;
//   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
//   z-index: 10;

//   /* Your styles for the card */
// `;


import React, { useState } from 'react';
import styled from 'styled-components';
import LoginForm from './Authentication/login';
import SignupForm from './Authentication/registration';
import homeImage from '../assets/banner-t.jpg';
import Reccomend from './Reccomend';
import Testimonials from './Testimonials';

export default function Hero() {
  const [showSignupForm, setShowSignupForm] = useState(false);

  const handleExploreNowClick = () => {
    setShowSignupForm(true);
  };
  
  return (
    <Wrapper>
      <Section id="hero">
        <Background>
          <img src={homeImage} alt="" />
        </Background>
        <Content>
          <Title>
            <h1>TRAVEL TO EXPLORE</h1>
            <p>
              Discover the world with our travel tourism website, offering curated journeys to breathtaking destinations, personalized itineraries, and unforgettable experiences for wanderers and adventurers alike!
            </p>
          </Title>
          <Search>
            <SearchContainer>
              <SearchLabel>Where you want to go</SearchLabel>
              <SearchInput type="text" placeholder="Search Your location" />
            </SearchContainer>
            <SearchContainer>
              <SearchLabel>Check-in</SearchLabel>
              <SearchInput type="date" />
            </SearchContainer>
            <SearchContainer>
              <SearchLabel>Check-out</SearchLabel>
              <SearchInput type="date" />
            </SearchContainer>
            <ExploreButton onClick={handleExploreNowClick}>Explore Now</ExploreButton>
          </Search>
        </Content>
      </Section>
      {showSignupForm && (
        <Card>
          <SignupForm />
        </Card>
      )}
      <Reccomend />
      <Testimonials />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;
  /* Your existing styles for the section */
`;

const Background = styled.div`
  height: 100%;
  img {
    width: 100%;
    filter: brightness(60%);
  }
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 3;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  /* Your existing styles for content */
`;

const Title = styled.div`
  color: white;
  h1 {
    font-size: 3rem;
    letter-spacing: 0.2rem;
  }
  p {
    text-align: center;
    padding: 0 30vw;
    margin-top: 0.5rem;
    font-size: 1.2rem;
  }
`;

const Search = styled.div`
  display: flex;
  background-color: #ffffffce;
  padding: 0.5rem;
  border-radius: 0.5rem;
  /* Your existing styles for search */
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 1.5rem;
`;

const SearchLabel = styled.label`
  font-size: 1.1rem;
  color: #03045e;
`;

const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  text-align: center;
  color: black;

  &[type="date"] {
    padding-left: 3rem;
  }

  &::placeholder {
    color: black;
  }

  &:focus {
    outline: none;
  }
`;

const ExploreButton = styled.button`
  padding: 1rem;
  cursor: pointer;
  border-radius: 0.3rem;
  border: none;
  color: white;
  background-color: #4361ee;
  font-size: 1.1rem;
  text-transform: uppercase;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #023e8a;
  }
`;

const Card = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  /* Your styles for the card */
`;
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import LoginForm from './Authentication/login';
// import SignupForm from './Authentication/registration';
// import homeImage from '../assets/banner-t.jpg';
// import Reccomend from './Reccomend';
// import Testimonials from './Testimonials';
// import { Card } from '@mui/material';




// export default function Hero() {
//   const [showLoginForm, setShowLoginForm] = useState(false);
//   const [showSignupForm, setShowSignupForm] = useState(false);

//   const handleExploreNowClick = () => {
//     setShowLoginForm(true);
//   };

//   const handleSignupClick = () => {
//     setShowSignupForm(true);
//   };

//   return (
//     <Wrapper>
//       <Section id="hero">
//         <Background>
//           <img src={homeImage} alt="" />
//         </Background>
//         <Content>
//           <Title>
//             <h1>TRAVEL TO EXPLORE</h1>
//             <p>
//               Discover the world with our travel tourism website, offering curated journeys to breathtaking destinations, personalized itineraries, and unforgettable experiences for wanderers and adventurers alike!
//             </p>
//           </Title>
//           <Search>
//             <SearchContainer>
//               <SearchLabel>Where you want to go</SearchLabel>
//               <SearchInput type="text" placeholder="Search Your location" />
//             </SearchContainer>
//             <SearchContainer>
//               <SearchLabel>Check-in</SearchLabel>
//               <SearchInput type="date" />
//             </SearchContainer>
//             <SearchContainer>
//               <SearchLabel>Check-out</SearchLabel>
//               <SearchInput type="date" />
//             </SearchContainer>
//             <ExploreButton onClick={handleExploreNowClick}>Explore Now</ExploreButton>
//           </Search>
//           <ButtonContainer>
//             <Button onClick={handleSignupClick}>Sign Up</Button>
//             <Button onClick={() => setShowLoginForm(true)}>Login</Button>
//           </ButtonContainer>
//         </Content>
//       </Section>
//       {showLoginForm && (
//         <Card>
//           <LoginForm />
//         </Card>
//       )}
//       {showSignupForm && (
//         <Card>
//           <SignupForm />
//         </Card>
//       )}
//       <Reccomend />
//       <Testimonials />
//     </Wrapper>
//   );
// }

// // Rest of your styled components remain unchanged

// const ButtonContainer = styled.div`
//   display: flex;
//   margin-top: 1rem;
// `;

// const Button = styled.button`
//   padding: 0.5rem 1rem;
//   margin: 0 0.5rem;
//   cursor: pointer;
//   border-radius: 0.3rem;
//   border: none;
//   color: white;
//   background-color: #4361ee;
//   font-size: 1rem;
//   text-transform: uppercase;
//   transition: 0.3s ease-in-out;

//   &:hover {
//     background-color: #023e8a;
//   }
// `;
