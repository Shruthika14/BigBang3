// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const PackageList = () => {
//   const [packages, setPackages] = useState([]);

//   const fetchPackages = async () => {
//     try {
//       const response = await axios.get('https://localhost:7222/api/Package');
//       setPackages(response.data);
//     } catch (error) {
//       console.error('Error fetching packages:', error);
//     }
//   };

//   useEffect(() => {
//     fetchPackages();
//   }, []);

//   return (
//     <div>
//       <h2>Tour Packages</h2>
//       <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//         {packages.map((pkg) => (
//           <div key={pkg.packageId} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
//             <h3>{pkg.title}</h3>
//             <p>{pkg.approximateDestination}</p>
//             <p>{pkg.description}</p>
//             <p>From: {pkg.from}</p>
//             <p>Duration: {pkg.duration}</p>
//             <p>Accommodation: {pkg.accommodation}</p>
//             <p>Transportation: {pkg.transportation}</p>
//             <p>Adult Cost: {pkg.adultCost}</p>
//             <p>Child Cost: {pkg.childCost}</p>
//             <p>Inclusions: {pkg.inclusions}</p>
//             <p>Exclusions: {pkg.exclusions}</p>
//             <img src={`https://localhost:7222/Package_Images/${pkg.imageUrl}`} alt={pkg.title} style={{ maxWidth: '100%', height: 'auto' }} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <h1>My App</h1>
//       <PackageList />
//     </div>
//   );
// };

// export default App;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';
// import info1 from "../assets/info1.png";
// import info2 from "../assets/info2.png";
// import info3 from "../assets/info3.png";

// const PackageList = () => {
//   const [packages, setPackages] = useState([]);

//   const fetchPackages = async () => {
//     try {
//       const response = await axios.get('https://localhost:7222/api/Package');
//       setPackages(response.data);
//     } catch (error) {
//       console.error('Error fetching packages:', error);
//     }
//   };

//   useEffect(() => {
//     fetchPackages();
//   }, []);

//   return (
//     <Section>
//       <div className="title">
//         <h2>Tour Packages</h2>
//       </div>
//       <div className="packages">
//         {packages.map((pkg) => (
//           <div className="destination" key={pkg.packageId}>
//             <img src={`https://localhost:7222/Package_Images/${pkg.imageUrl}`} alt={pkg.title} />
//             <h3>{pkg.title}</h3>
//             <p>{pkg.approximateDestination}</p>
//             <div className="info">
//               <div className="services">
//                 <p>From: {pkg.from}</p>
//                 <p>Duration: {pkg.duration}</p>
//                 <p>Accommodation: {pkg.accommodation}</p>
//                 <p>Transportation: {pkg.transportation}</p>
//                 <p>Adult Cost: {pkg.adultCost}</p>
//                 <p>Child Cost: {pkg.childCost}</p>
//                 <p>Inclusions: {pkg.inclusions}</p>
//                 <p>Exclusions: {pkg.exclusions}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </Section>
//   );
// };

// const Section = styled.section`
//   padding: 2rem 0;

//   .title {
//     text-align: center;
//   }

//   .packages {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     gap: 3rem;
//     padding: 0 3rem;
//   }

//   .destination {
//     padding: 1rem;
//     display: flex;
//     flex-direction: column;
//     gap: 0.5rem;
//     background-color: #8338ec14;
//     border-radius: 1rem;
//     transition: 0.3s ease-in-out;

//     &:hover {
//       transform: translateX(0.4rem) translateY(-1rem);
//       box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
//     }

//     img {
//       width: 100%;
//     }

//     .info {
//       display: flex;
//       align-items: center;

//       .services {
//         display: flex;
//         flex-direction: column;
//         gap: 0.5rem;
//       }
//     }
//   }

//   @media screen and (min-width: 280px) and (max-width: 768px) {
//     .packages {
//       grid-template-columns: 1fr;
//       padding: 0;
//     }
//   }
// `;

// const App = () => {
//   return (
//     <div>
      
//       <PackageList />
//     </div>
//   );
// };

// export default App;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';
// import info1 from "../assets/info1.png";
// import info2 from "../assets/info2.png";
// import info3 from "../assets/info3.png";
// import { Link } from 'react-router-dom';

// const PackageList = () => {
//   const [packages, setPackages] = useState([]);

//   const fetchPackages = async () => {
//     try {
//       const response = await axios.get('https://localhost:7222/api/Package');
//       setPackages(response.data);
//     } catch (error) {
//       console.error('Error fetching packages:', error);
//     }
//   };

//   useEffect(() => {
//     fetchPackages();
//   }, []);

//   return (
//     <Section>
//       <div className="title">
//         <h2>Tour Packages</h2>
//       </div>
//       <div className="packages">
//         {packages.map((pkg) => (
//           <div className="destination" key={pkg.packageId}>
//             <img src={`https://localhost:7222/Package_Images/${pkg.imageUrl}`} alt={pkg.title} />
//             <h3>{pkg.title}</h3>
//             <p>{pkg.approximateDestination}</p>
//             <div className="info">
//               <div className="services">
//                 <p>From: {pkg.from}</p>
//                 <p>Duration: {pkg.duration}</p>
//                 <p>Accommodation: {pkg.accommodation}</p>
//                 <p>Transportation: {pkg.transportation}</p>
//                 <p>Adult Cost: {pkg.adultCost}</p>
//                 <p>Child Cost: {pkg.childCost}</p>
//                 <p>Inclusions: {pkg.inclusions}</p>
//                 <p>Exclusions: {pkg.exclusions}</p>
//               </div>
//               <div className="book-now">
//                 <button>Book Now</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </Section>
//   );
// };

// const Section = styled.section`
//   padding: 2rem 0;

//   .title {
//     text-align: center;
//   }

//   .packages {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     gap: 3rem;
//     padding: 0 3rem;
//   }

//   .destination {
//     padding: 1rem;
//     display: flex;
//     flex-direction: column;
//     gap: 0.5rem;
//     background-color: #8338ec14;
//     border-radius: 1rem;
//     transition: 0.3s ease-in-out;

//     &:hover {
//       transform: translateX(0.4rem) translateY(-1rem);
//       box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
//     }

//     img {
//       width: 100%;
//     }

//     .info {
//       display: flex;
//       align-items: center;
//       justify-content: space-between;

//       .services {
//         display: flex;
//         flex-direction: column;
//         gap: 0.5rem;
//       }
//     }

//     .book-now {
//       display: flex;
//       justify-content: center;
//       margin-top: 1rem;

//       button {
//         background-color: #007bff;
//         color: #fff;
//         padding: 0.75rem 1rem;
//         border: none;
//         border-radius: 0.5rem;
//         cursor: pointer;
//         transition: background-color 0.3s ease-in-out;

//         &:hover {
//           background-color: #0056b3;
//         }
//       }
//     }
//   }

//   @media screen and (min-width: 280px) and (max-width: 768px) {
//     .packages {
//       grid-template-columns: 1fr;
//       padding: 0;
//     }
//   }
// `;

// const App = () => {
//   return (
//     <div>
      
//       <PackageList />
//     </div>
//   );
// };

// export default App;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// const PackageList = () => {
//   const [packages, setPackages] = useState([]);

//   const fetchPackages = async () => {
//     try {
//       const response = await axios.get('https://localhost:7222/api/Package');
//       setPackages(response.data);
//     } catch (error) {
//       console.error('Error fetching packages:', error);
//     }
//   };

//   useEffect(() => {
//     fetchPackages();
//   }, []);

//   return (
//     <Section>
//       <div className="title">
//         <h2>Tour Packages</h2>
//       </div>
//       <div className="packages">
//         {packages.map((pkg) => (
//           <div className="destination" key={pkg.packageId}>
//             <img src={`https://localhost:7222/Package_Images/${pkg.imageUrl}`} alt={pkg.title} />
//             <h3>{pkg.title}</h3>
//             <p>{pkg.approximateDestination}</p>
//             <div className="info">
//               <div className="services">
//                 <p>From: {pkg.from}</p>
//                 <p>Duration: {pkg.duration}</p>
//                 <p>Accommodation: {pkg.accommodation}</p>
//                 <p>Transportation: {pkg.transportation}</p>
//                 <p>Adult Cost: {pkg.adultCost}</p>
//                 <p>Child Cost: {pkg.childCost}</p>
//                 <p>Inclusions: {pkg.inclusions}</p>
//                 <p>Exclusions: {pkg.exclusions}</p>
//               </div>
//               <div className="book-now">
//                 <Link to="/booking">
//                   <button>Book Now</button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </Section>
//   );
// };

// const Section = styled.section`
//   padding: 2rem 0;

//   .title {
//     text-align: center;
//   }

//   .packages {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     gap: 3rem;
//     padding: 0 3rem;
//   }

//   .destination {
//     height: 380px;
//     padding: 1rem;
//     display: flex;
//     flex-direction: column;
//     gap: 0.5rem;
//     background-color: #8338ec14;
//     border-radius: 1rem;
//     transition: 0.3s ease-in-out;

//     &:hover {
//       transform: translateX(0.4rem) translateY(-1rem);
//       box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
//     }

//     img {
//       width: 100%;
//       object-fit: cover;
//       border-radius: 1rem 1rem 0 0;
//     }

//     .info {
//       display: flex;
//       align-items: center;
//       justify-content: space-between;

//       .services {
//         display: flex;
//         flex-direction: column;
//         gap: 0.5rem;
//       }
//     }

//     .book-now {
//       display: flex;
//       justify-content: center;
//       margin-top: auto;

//       button {
//         background-color: #007bff;
//         color: #fff;
//         padding: 0.75rem 1rem;
//         border: none;
//         border-radius: 0.5rem;
//         cursor: pointer;
//         transition: background-color 0.3s ease-in-out;

//         &:hover {
//           background-color: #0056b3;
//         }
//       }
//     }
//   }

//   @media screen and (min-width: 280px) and (max-width: 768px) {
//     .packages {
//       grid-template-columns: 1fr;
//       padding: 0;
//     }
//   }
// `;

// const App = () => {
//   return (
//     <div>
//       <PackageList />
//     </div>
//   );
// };

// export default App;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import BookingForm from './booking';

// const PackageList = () => {
//   const [packages, setPackages] = useState([]);

//   const fetchPackages = async () => {
//     try {
//       const response = await axios.get('https://localhost:7222/api/Package');
//       setPackages(response.data);
//     } catch (error) {
//       console.error('Error fetching packages:', error);
//     }
//   };

//   useEffect(() => {
//     fetchPackages();
//   }, []);

//   return (
//     <Section>
//       <div className="title">
//         <h2>Tour Packages</h2>
//       </div>
//       <div className="packages">
//         {packages.map((pkg) => (
//           <div className="destination" key={pkg.packageId}>
//             <img
//               src={`https://localhost:7222/Package_Images/${pkg.imageUrl}`}
//               alt={pkg.title}
//               width="570"
//               height="416"
//             />
//             <h3>{pkg.title}</h3>
//             <p>{pkg.approximateDestination}</p>
//             <div className="info">
//               <div className="services">
//                 <p>From: {pkg.from}</p>
//                 <p>Duration: {pkg.duration}</p>
//                 <p>Accommodation: {pkg.accommodation}</p>
//                 <p>Transportation: {pkg.transportation}</p>
//                 <p>Adult Cost: {pkg.adultCost}</p>
//                 <p>Child Cost: {pkg.childCost}</p>
//                 <p>Inclusions: {pkg.inclusions}</p>
//                 <p>Exclusions: {pkg.exclusions}</p>
//               </div>
//               <div className="book-now">
//                 <Link to="/booking">
//                   <button>Book Now</button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </Section>
//   );
// };

// const Section = styled.section`
//   padding: 2rem 0;
//   min-height: calc(100vh - 80px);

//   .title {
//     text-align: center;
//     margin-bottom: 2rem;
//   }

//   .packages {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     gap: 3rem;
//     padding: 0 3rem;
//   }

//   .destination {
//     height: 100%;
//     padding: 1rem;
//     display: flex;
//     flex-direction: column;
//     gap: 0.5rem;
//     background-color: #8338ec14;
//     border-radius: 1rem;
//     transition: 0.3s ease-in-out;

//     &:hover {
//       transform: translateX(0.4rem) translateY(-1rem);
//       box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
//     }

//     img {
//       width: 100%;
//       height: 416px; /* Fixed height to maintain aspect ratio */
//       object-fit: cover;
//       border-radius: 1rem 1rem 0 0;
//     }

//     .info {
//       display: flex;
//       align-items: center;
//       justify-content: space-between;

//       .services {
//         display: flex;
//         flex-direction: column;
//         gap: 0.5rem;
//       }
//     }

//     .book-now {
//       display: flex;
//       justify-content: center;
//       margin-top: auto;

//       button {
//         background-color: #007bff;
//         color: #fff;
//         padding: 0.75rem 1rem;
//         border: none;
//         border-radius: 0.5rem;
//         cursor: pointer;
//         transition: background-color 0.3s ease-in-out;

//         &:hover {
//           background-color: #0056b3;
//         }
//       }
//     }
//   }

//   @media screen and (min-width: 280px) and (max-width: 768px) {
//     .packages {
//       grid-template-columns: 1fr;
//       padding: 0;
//     }
//   }
// `;

// const App = () => {
//   return (
//     <div>
//       <PackageList />
//     </div>
//   );
// };

// export default App;





// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import BookingForm from './booking';

// const TourPackage = () => {
//   const [packages, setPackages] = useState([]);

//   const fetchPackages = async () => {
//     try {
//       const response = await axios.get('https://localhost:7222/api/Package');
//       setPackages(response.data);
//     } catch (error) {
//       console.error('Error fetching packages:', error);
//     }
//   };

//   useEffect(() => {
//     fetchPackages();
//   }, []);

//   return (
//     <Section>
//       <div className="title">
//         <h2>Tour Packages</h2>
//       </div>
//       <div className="packages">
//         {packages.map((pkg) => (
//           <div className="destination" key={pkg.packageId}>
//             <img
//               src={`https://localhost:7222/Package_Images/${pkg.imageUrl}`}
//               alt={pkg.title}
//               width="570"
//               height="416"
//             />
//             <h3>{pkg.title}</h3>
//             <p>{pkg.approximateDestination}</p>
//             <div className="info">
//               <div className="services">
//                 <p>From: {pkg.from}</p>
//                 <p>Duration: {pkg.duration}</p>
//                 <p>Accommodation: {pkg.accommodation}</p>
//                 <p>Transportation: {pkg.transportation}</p>
//                 <p>Adult Cost: {pkg.adultCost}</p>
//                 <p>Child Cost: {pkg.childCost}</p>
//                 <p>Inclusions: {pkg.inclusions}</p>
//                 <p>Exclusions: {pkg.exclusions}</p>
//               </div>
//               <div className="book-now">
//                 <Link to={`/booking/${pkg.packageId}`}>
//                   <button>Book Now</button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </Section>
//   );
// };

// const Section = styled.section`
//   /* Styles for the section */
// `;

// export default TourPackage;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// const TourPackage = () => {
//   const [packages, setPackages] = useState([]);

//   const fetchPackages = async () => {
//     try {
//       const response = await axios.get('https://localhost:7222/api/Package');
//       setPackages(response.data);
//     } catch (error) {
//       console.error('Error fetching packages:', error);
//     }
//   };

//   useEffect(() => {
//     fetchPackages();
//   }, []);

//   return (
//     <Section>
//       <div className="title">
//         <h2>Tour Packages</h2>
//       </div>
//       <div className="packages">
//         {packages.map((pkg) => (
//           <div className="destination" key={pkg.packageId}>
//             <img
//               src={`https://localhost:7222/Package_Images/${pkg.imageUrl}`}
//               alt={pkg.title}
//               width="570"
//               height="416"
//             />
//             <h3>{pkg.title}</h3>
//             <p>{pkg.approximateDestination}</p>
//             <div className="info">
//               <div className="services">
//                 <p>From: {pkg.from}</p>
//                 <p>Duration: {pkg.duration}</p>
//                 <p>Accommodation: {pkg.accommodation}</p>
//                 <p>Transportation: {pkg.transportation}</p>
//                 <p>Adult Cost: {pkg.adultCost}</p>
//                 <p>Child Cost: {pkg.childCost}</p>
//                 <p>Inclusions: {pkg.inclusions}</p>
//                 <p>Exclusions: {pkg.exclusions}</p>
//               </div>
//               <div className="book-now">
//                 <Link to={`/booking/${pkg.packageId}`}>
//                   <button>Book Now</button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </Section>
//   );
// };

// const Section = styled.section`
//   /* Styles for the section */
// `;

// export default TourPackage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TourPackage = () => {
  const [packages, setPackages] = useState([]);

  const fetchPackages = async () => {
    try {
      const response = await axios.get('https://localhost:7222/api/Package');
      setPackages(response.data);
    } catch (error) {
      console.error('Error fetching packages:', error);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  return (
    <Section>
      <div className="title">
        <h2>Tour Packages</h2>
      </div>
      <PackageList>
        {packages.map((pkg) => (
          <PackageCard key={pkg.packageId}>
            <PackageImage
              src={`https://localhost:7222/Package_Images/${pkg.imageUrl}`}
              alt={pkg.title}
            />
            <h3>{pkg.title}</h3>
            <p>{pkg.approximateDestination}</p>
            <PackageInfo>
              <p>From: {pkg.from}</p>
              <p>Duration: {pkg.duration}</p>
              <p>Accommodation: {pkg.accommodation}</p>
              <p>Transportation: {pkg.transportation}</p>
              <p>Adult Cost: {pkg.adultCost}</p>
              <p>Child Cost: {pkg.childCost}</p>
              <p>Inclusions: {pkg.inclusions}</p>
              <p>Exclusions: {pkg.exclusions}</p>
            </PackageInfo>
            <div className="book-now">
              <Link to={`/booking/${pkg.packageId}`}>
                <StyledButton>Book Now</StyledButton>
              </Link>
            </div>
          </PackageCard>
        ))}
      </PackageList>
    </Section>
  );
};

const Section = styled.section`
  /* Styles for the section */
`;

const PackageList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PackageCard = styled.div`
  width: 570px;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: aliceblue;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const PackageImage = styled.img`
  width: 535px;
  height: 417px;
`;

const PackageInfo = styled.div`
  margin-top: 1rem;
`;

const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

export default TourPackage;
