//  // import React, { useEffect } from "react";
//  // import Footer from "./Components/Footer"; // import Hero from "./Components/Hero";
// // // import Navbar from "./Components/Navbar";
// // // import Recommend from "./Components/Reccomend";
// // // import ScrollToTop from "./Components/ScrollToTop";
// // // import Packages from "./Components/Packages";
// // // import Testimonials from "./Components/Testimonials";
// // // import scrollreveal from "scrollreveal";
// // // // import Signup from "./Components/Signup";
// // // import TourPackages from "./Components/TourPackages";
// // // import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// // // import FeedbackForm from "./Components/feedbackform";
// // // import AuthForm from "./Components/Authentication/AuthForm";
// // // export default function App() {
// // //   useEffect(() => {
// // //     const sr = scrollreveal({
// // //       origin: "top",
// // //       distance: "80px",
// // //       duration: 2000,
// // //       reset: true,
// // //     });
// // //     sr.reveal(
// // //       `
// // //         nav,
// // //         #hero,
// // //         #Packages,
// // //         #recommend,
// // //         TourPackages,
// // //         #Feedback,
// // //         footer
// // //         `,
// // //       {
// // //         opacity: 0,
// // //         interval: 300,
// // //       }
// // //     );
// // //   }, []);
// // //   return (
// // //     <div>
// // //       <Router>
// // //       <ScrollToTop />
// // //       <Navbar />
// // //       <Hero />
// // //       <Packages />
// // //       <Recommend />
// // //       <TourPackages/>
// // //       <FeedbackForm/>
// // //       <Testimonials />
// // //       <Footer />
// //     <AuthForm/>
// //       </Router>
// //     </div>
// //    );
// // //  }
// //  import React, { useEffect } from "react";
// //  import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// //  import Footer from "./Components/Footer";
// //  import Navbar from "./Components/Navbar";
// //  import scrollreveal from "scrollreveal";
// //  import TourPackages from "./Components/TourPackages";
// //  import Testimonials from "./Components/Testimonials";
// //  import FeedbackForm from "./Components/feedbackform";
// //  import AuthForm from "./Components/Authentication/AuthForm";
// //  import Hero from "./Components/Hero";
// //  import Reccomend from "./Components/Reccomend";
// //  import BookingForm from "./Components/booking";
// //  import BookingPage from "./Components/bookingpage";
// //  import ImageUploader from "./Components/AdminPortal/ImageGallery";
// //  import UploadedImage from "./Components/uploadedimage";
// //  import RegisterPage from "./Components/Authentication/registration";
// // import { Login } from "@mui/icons-material";

// //  export default function App() {
// //     useEffect(() => {
// //    const sr = scrollreveal({
// //      origin: "top",
// //         distance: "80px",
// //      duration: 2000,
// //      reset: true,
// //  });
// //   sr.reveal(
// //     `
// //      nav,
// //     #hero,
      
// //    #recommend,
// //     TourPackages,
// //    #Feedback,
// //        footer
// //        `,
// //      {
// //        opacity: 0,
// //        interval: 300,
// //      }
// //   );
// //  }, []);

// //    return (
// //      <div>
// //        <Router>
// //        <Navbar />
// //          <Routes>
// //            <Route path="/" element={<Hero />} />
// //            <Route path="/registration" element={<AuthForm />} />
// //            <Route path="/login" element={<AuthForm/>} />
// //            <Route path="/Tourpackages" element={<TourPackages />} />
// //            <Route path="/Testimonials" element={<Testimonials />} />
// //            <Route path="/feedbackform" element={<FeedbackForm />} />
// //            <Route path="/recommend" element={<Reccomend />} />
// //            <Route path="/booking" element={<BookingForm />} />
// //         <Route path="/booking/:packageId" element={<BookingPage/>}/>
// //            <Route path="/ImageUploader"element={<ImageUploader/>}/>
// //            <Route path="/uploadedimage" element={<UploadedImage/>}/>
//            {/* <Route path="/registration" element={<RegisterPage/>}/>
//            <Route path="/login" element={<Login/>}/> */}
//          {/* </Routes>
//          <Footer />
//        </Router>
//      </div>
//    );
// //  } */}
// /* eslint-disable import/first */


// // import React, { useState } from "react";
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import styled from 'styled-components';
// // import Footer from "./Components/Footer";
// // import Navbar from "./Components/Navbar";
// // import Hero from "./Components/Hero";
// // import TourPackages from "./Components/TourPackages";
// // import Testimonials from "./Components/Testimonials";
// // import FeedbackForm from "./Components/feedbackform";
// // import Reccomend from "./Components/Reccomend";
// // import BookingForm from "./Components/booking";
// // import BookingPage from "./Components/bookingpage";
// // import ImageUploader from "./Components/AdminPortal/ImageGallery";
// // import UploadedImage from "./Components/uploadedimage";
// // import LoginForm from "./Components/Authentication/login";
// // import SignupForm from "./Components/Authentication/registration";
// // import SuccessModal from "./Components/Authentication/successmodal";

// // const StyledContainer = styled.div``;

// // const App = () => {
// //   const [showSuccessModal, setShowSuccessModal] = useState(false);

// //   const handleRegistrationSuccess = () => {
// //     setShowSuccessModal(true);
// //   };

// //   const handleModalClose = () => {
// //     setShowSuccessModal(false);
// //   };

// //   const performSignup = async (userData) => {
// //     try {
// //       // Make an API request to your backend to create a new user account
// //       const response = await fetch('/api/signup', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(userData),
// //       });

// //       if (response.ok) {
// //         // Signup was successful, show success modal or perform other actions
// //         handleRegistrationSuccess();
// //       } else {
// //         // Signup failed, handle the error, show an error message, etc.
// //       }
// //     } catch (error) {
// //       // Handle network or other errors
// //     }
// //   };

// //   return (
// //     <StyledContainer>
// //       <Router>
// //         <Navbar />
// //         <Routes>
// //         <Route
// //             path="/"
// //             element={<Hero onSignup={performSignup} onLogin={performLogin} />}
// //           />
// //           <Route path="/registration" element={<SignupForm onRegistration={performSignup} />} />
// //           <Route path="/login" element={<LoginForm onLogin={() => {}} />} />
// //           <Route path="/Tourpackages" element={<TourPackages />} />
// //           <Route path="/Testimonials" element={<Testimonials />} />
// //           <Route path="/feedbackform" element={<FeedbackForm />} />
// //           <Route path="/recommend" element={<Reccomend />} />
// //           <Route path="/booking" element={<BookingForm />} />
// //           <Route path="/booking/:packageId" element={<BookingPage />} />
// //           <Route path="/ImageUploader" element={<ImageUploader />} />
// //           <Route path="/uploadedimage" element={<UploadedImage />} />
// //         </Routes>
// //         <SuccessModal show={showSuccessModal} onClose={handleModalClose} />
// //         <Footer />
// //       </Router>
// //     </StyledContainer>
// //   );
// // };

// // export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import styled from 'styled-components';
// import Footer from './Components/Footer';
// import Navbar from './Components/Navbar';
// import Hero from './Components/Hero';
// import TourPackages from './Components/TourPackages';
// import Testimonials from './Components/Testimonials';
// import FeedbackForm from './Components/feedbackform';
// import Reccomend from './Components/Reccomend';
// import BookingForm from './Components/booking';
// import BookingPage from './Components/bookingpage';
// import ImageUploader from './Components/AdminPortal/ImageGallery';
// import UploadedImage from './Components/uploadedimage';
// import LoginForm from './Components/Authentication/login';
// import SignupForm from './Components/Authentication/registration';
// import SuccessModal from './Components/Authentication/successmodal';
// import BookingPDFGenerator from './Components/bookingbill';
// import { useHistory } from "react-router-dom";

// const StyledContainer = styled.div``;

// const App = () => {
//   const [showSuccessModal, setShowSuccessModal] = useState(false);

//   const handleRegistrationSuccess = () => {
//     setShowSuccessModal(true);
//   };

//   const handleModalClose = () => {
//     setShowSuccessModal(false);
//   };

//   const performSignup = async (userData) => {
//     try {
//       // Make an API request to your backend for user registration
//       const response = await fetch('https://localhost:7222/api/User/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//       });

//       if (response.ok) {
//         // Registration successful, show success modal or perform other actions
//         handleRegistrationSuccess();
//       } else {
//         // Registration failed, handle the error, show an error message, etc.
//       }
//     } catch (error) {
//       // Handle network or other errors
//     }
//   };

//   const performLogin = async (userData) => {
//     try {
//       // Make an API request to your backend for user login
//       const response = await fetch('https://localhost:7222/api/User/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//       });

//       if (response.ok) {
//         // Login successful, perform actions or update frontend state
//       } else {
//         // Login failed, handle the error, show an error message, etc.
//       }
//     } catch (error) {
//       // Handle network or other errors
//     }
//   };

//   return (
//     <StyledContainer>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route
//             path="/"
//             element={<Hero onSignup={performSignup} onLogin={performLogin} />}
//           />
//           <Route
//             path="/registration"
//             element={<SignupForm onRegistration={performSignup} />}
//           />
//           <Route path="/login" element={<LoginForm onLogin={performLogin} />} />
//           <Route path="/Tourpackages" element={<TourPackages />} />
//           <Route path="/Testimonials" element={<Testimonials />} />
//           <Route path="/feedbackform" element={<FeedbackForm />} />
//           <Route path="/recommend" element={<Reccomend />} />
//           <Route path="/booking" element={<BookingForm />} />
//           <Route path="/booking/:packageId" element={<BookingPage />} />
//           <Route path="/ImageUploader" element={<ImageUploader />} />
//           <Route path="/uploadedimage" element={<UploadedImage />} />
//           <Route path='/bookingbill' element={<BookingPDFGenerator/>}/>
//         </Routes>
//         <SuccessModal show={showSuccessModal} onClose={handleModalClose} />
//         <Footer />
//       </Router>
//     </StyledContainer>
//   );
// };

// export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import TourPackages from './Components/TourPackages';
import Testimonials from './Components/Testimonials';
import FeedbackForm from './Components/feedbackform';
import Reccomend from './Components/Reccomend';
import BookingForm from './Components/booking';
import BookingPage from './Components/bookingpage';
import ImageUploader from './Components/AdminPortal/ImageGallery';
import UploadedImage from './Components/uploadedimage';
import LoginForm from './Components/Authentication/login';
import SignupForm from './Components/Authentication/registration';
import BookingPDFGenerator from './Components/bookingbill';
import AdminDashboard from './Components/AdminPortal/admindashboard';


const StyledContainer = styled.div``;

const App = () => {
  const performSignup = async (userData) => {
    try {
      // Make an API request to your backend for user registration
      const response = await fetch('https://localhost:7222/api/User/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // Registration successful, perform actions or show a success message
      } else {
        // Registration failed, handle the error, show an error message, etc.
      }
    } catch (error) {
      // Handle network or other errors
    }
  };

  const performLogin = async (userData) => {
    try {
      // Make an API request to your backend for user login
      const response = await fetch('https://localhost:7222/api/User/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // Login successful, perform actions or update frontend state
      } else {
        // Login failed, handle the error, show an error message, etc.
      }
    } catch (error) {
      // Handle network or other errors
    }
  };

  return (
    <StyledContainer>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero onSignup={performSignup} onLogin={performLogin} />} />
          <Route path="/registration" element={<SignupForm onRegistration={performSignup} />} />
          <Route path="/login" element={<LoginForm onLogin={performLogin} />} />
          <Route path="/Tourpackages" element={<TourPackages />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/feedbackform" element={<FeedbackForm />} />
          <Route path="/recommend" element={<Reccomend />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/booking/:packageId" element={<BookingPage />} />
          <Route path="/ImageUploader" element={<ImageUploader />} />
          <Route path="/uploadedimage" element={<UploadedImage />} />
          <Route path='/bookingbill' element={<BookingPDFGenerator />} />
          <Route path='/admindashboard' element={<AdminDashboard/>}/>
        </Routes>
        <Footer />
      </Router>
    </StyledContainer>
  );
};

export default App;
