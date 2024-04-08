import React, { useState } from "react";
import "./MyComponent.css";
const ApiCaller = () => {
  const [checkInAlert, setCheckInAlert] = useState(false);
  const [checkOutAlert, setCheckOutAlert] = useState(false);

  const handleCheckIn = () => {
    setCheckInAlert(true);
    setTimeout(() => {
      setCheckInAlert(false);
    }, 3000); // Hide the alert after 3 seconds (3000 milliseconds)
  };

  const handleCheckOut = () => {
    setCheckOutAlert(true);
    setTimeout(() => {
      setCheckOutAlert(false);
    }, 3000); // Hide the alert after 3 seconds (3000 milliseconds)
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card bg-dark text-white"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <div className="d-flex justify-content-center mt-5">
                  <div className="loader">
                    <div className="loader-square"></div>
                    <div className="loader-square"></div>
                    <div className="loader-square"></div>
                    <div className="loader-square"></div>
                    <div className="loader-square"></div>
                    <div className="loader-square"></div>
                    <div className="loader-square"></div>
                  </div>
                </div>
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">
                    Access Control
                  </h2>
                  <p className="text-white-50 mb-5">
                    Please choose your action!
                  </p>

                  <div className="d-flex justify-content-around mt-4">
                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="button"
                      onClick={handleCheckIn}
                    >
                      Check-in
                    </button>
                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="button"
                      onClick={handleCheckOut}
                    >
                      Check-out
                    </button>
                  </div>

                  {/* Green Alerts */}
                  {checkInAlert && (
                    <div
                      className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4"
                      role="alert"
                    >
                      <strong className="font-bold">
                        Check-in Successful!
                      </strong>
                    </div>
                  )}
                  {checkOutAlert && (
                    <div
                      className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4"
                      role="alert"
                    >
                      <strong className="font-bold">
                        Check-out Successful!
                      </strong>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiCaller;

// import React from "react";
// import "./MyComponent.css";
// import axios from "axios";

// const ApiCaller = () => {
//   const callFirstApi = async () => {
//     try {
//       const response = await axios.post(
//         `http://localhost:4000/api/attendance/attendance/check-in` // Using the studentId in the URL
//       );
//       console.log(response.data);
//       // Handle your response data here
//     } catch (error) {
//       console.error("Error fetching data from the first API:", error);
//     }
//   };

//   const callSecondApi = async () => {
//     try {
//       const response = await axios.post(
//         `http://localhost:4000/api/attendance/attendance/check-out`
//       );
//       console.log(response.data);
//       // Handle your response data here
//     } catch (error) {
//       console.error("Error fetching data from the second API:", error);
//     }
//   }; // This closing brace was missing

//   return (
//     <section className="vh-100 gradient-custom">
//       <div className="container py-5 h-100">
//         <div className="row d-flex justify-content-center align-items-center h-100">
//           <div className="col-12 col-md-8 col-lg-6 col-xl-5">
//             <div
//               className="card bg-dark text-white"
//               style={{ borderRadius: "1rem" }}
//             >
//               <div className="card-body p-5 text-center">
//                 <div className="d-flex justify-content-center mt-5">
//                   <div className="loader">
//                     <div className="loader-square"></div>
//                     <div className="loader-square"></div>
//                     <div className="loader-square"></div>
//                     <div className="loader-square"></div>
//                     <div className="loader-square"></div>
//                     <div className="loader-square"></div>
//                     <div className="loader-square"></div>
//                   </div>
//                 </div>
//                 <div className="mb-md-5 mt-md-4 pb-5">
//                   <h2 className="fw-bold mb-2 text-uppercase">
//                     Access Control
//                   </h2>
//                   <p className="text-white-50 mb-5">
//                     Please choose your action!
//                   </p>

//                   <div className="d-flex justify-content-around mt-4">
//                     <button
//                       className="btn btn-outline-light btn-lg px-5"
//                       type="button"
//                       onClick={callFirstApi}
//                     >
//                       Check-in
//                     </button>
//                     <button
//                       className="btn btn-outline-light btn-lg px-5"
//                       type="button"
//                       onClick={callSecondApi}
//                     >
//                       Check-out
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ApiCaller;
