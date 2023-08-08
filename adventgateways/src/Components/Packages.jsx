import React from "react";
import styled from "styled-components";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";

export default function Services() {
  const data = [
    {
      icon: service1,
      title: "Get Best Prices",
      subTitle:
        "Pay through our application and save thousands and get amazing rewards.",
    },
    {
      icon: service2,
      title: "Covid Safe",
      subTitle:
        "We have all the curated hotels that have all the precaution for a covid safe environment.",
    },
    {
      icon: service3,
      title: "Flexible Payment",
      subTitle:
        " Enjoy the flexible payment through our app and get rewards on every payment.",
    },
    {
      icon: service4,
      title: "Find The Best Near You",
      subTitle:
        "Find the best hotels and places to visit near you in a single click.",
    },
  ];
  return (
    <Section id="services">
      {data.map((service, index) => {
        return (
          <div className="service">
            <div className="icon">
              <img src={service.icon} alt="" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.subTitle}</p>
          </div>
        );
      })}
    </Section>
  );
}

const Section = styled.section`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  .service {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: aliceblue;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .icon {
      img {
        height: 2.4rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const PackageComponent = () => {
//   const [packages, setPackages] = useState([]);
//   const apiUrl = "https://localhost:7222/api/package"; // Replace with your API URL

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(apiUrl);
//       setPackages(response.data);
//     } catch (error) {
//       console.error("Error fetching data: ", error);
//     }
//   };

//   const handleCreatePackage = async () => {
//     // Replace with your package data
//     const newPackage = {
//       Title: "New Package",
//       ApproximateDestination: "New Destination",
//       Description:"aaa",
//       From:"bbb",
//       Duration:"ccc",
//       Accomodation:"ddd",
//       Transportation:"eee",
//       AdultCost:"fff",
//       ChildCost:"ggg",
//       Inclusions:"hhh",
//       Exclusions:"iii",
//       ImageUrl:"jjj",

//       // Other properties...
//     };

//     try {
//       const response = await axios.post(apiUrl, newPackage);
//       console.log("Created package: ", response.data);
//       fetchData(); // Fetch data again to update the package list
//     } catch (error) {
//       console.error("Error creating package: ", error);
//     }
//   };

//   const handleUpdatePackage = async (packageId) => {
//     // Replace with updated package data
//     const updatedPackage = {
//       PackageId: packageId,
//       Title: "Updated Package",
//       ApproximateDestination: "Updated Destination",
//       // Other properties...
//     };

//     try {
//       const response = await axios.put(`${apiUrl}/${packageId}`, updatedPackage);
//       console.log("Updated package: ", response.data);
//       fetchData(); // Fetch data again to update the package list
//     } catch (error) {
//       console.error("Error updating package: ", error);
//     }
//   };

//   const handleDeletePackage = async (packageId) => {
//     try {
//       const response = await axios.delete(`${apiUrl}/${packageId}`);
//       console.log("Deleted package: ", response.data);
//       fetchData(); // Fetch data again to update the package list
//     } catch (error) {
//       console.error("Error deleting package: ", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Packages</h1>
//       <button onClick={handleCreatePackage}>Create Package</button>
//       <ul>
//         {packages.map((pkg) => (
//           <li key={pkg.packageId}>
//             {pkg.title} - {pkg.approximateDestination}
//             <button onClick={() => handleUpdatePackage(pkg.packageId)}>
//               Update
//             </button>
//             <button onClick={() => handleDeletePackage(pkg.packageId)}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PackageComponent;
