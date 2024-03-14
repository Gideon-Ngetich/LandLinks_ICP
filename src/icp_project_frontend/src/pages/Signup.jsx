// import React, { useEffect, useState } from 'react';
// import { AuthClient } from "@dfinity/auth-client";

// const Signup = () => {


//     useEffect(() => {
//         const init = async () => {
//             try {
//                 const authClient = await AuthClient.create();

//                 // Setup event listener for the "Internet Identity" button
//                 const statusButton = document.getElementById("status");
//                 statusButton.addEventListener("click", async () => {
//                     try {
//                         // Initiate II authentication process
//                         const response = await authClient.login({
//                             identityProvider: "https://identity.ic0.app/#authorize"
//                         });

//                         if (response.status === "authorized") {
//                             // If authentication is successful, handleAuthenticated
//                             console.log("Authenticated successfully!");
//                         } else {
//                             console.error("Authentication failed:", response);
//                         }
//                     } catch (error) {
//                         console.error("Authentication error:", error);
//                     }
//                 });

//                 // Setup event listener for the "Close" button
//                 const closeButton = document.getElementById("close-button");
//                 closeButton.addEventListener("click", () => {
//                     const status = document.getElementById("status");
//                     status.classList.add("hidden");
//                 });
//             } catch (error) {
//                 console.error('Error initializing auth client:', error);
//             }
//         };

//         init();

//         // Cleanup event listeners
//         return () => {
//             const statusButton = document.getElementById("status");
//             statusButton.removeEventListener("click", () => {});
           
            
//             const Signup = () => {
//                 const [authenticated, setAuthenticated] = useState(false);
            
//                 useEffect(() => {
//                     const init = async () => {
//                         try {
//                             const authClient = await AuthClient.create();
            
//                             if (await authClient.isAuthenticated()) {
//                                 setAuthenticated(true);
//                             } else {
//                                 await authClient.login({
//                                     identityProvider: "https://identity.ic0.app/#authorize",
//                                     onSuccess: async () => {
//                                         setAuthenticated(true);
//                                     },
//                                     onError: async (err) => {
//                                         console.error("Authentication error:", err);
//                                     }
//                                 });
//                             }
//                         } catch (error) {
//                             console.error('Error initializing auth client:', error);
//                         }
//                     };
            
//                     init();
            
//                     return () => {
//                         // Cleanup if needed
//                     };
//                 }, []); // Empty dependency array ensures useEffect runs only once
            
//                 const handleLogout = async () => {
//                     try {
//                         const authClient = await AuthClient.create();
//                         await authClient.logout();
//                         setAuthenticated(false);
//                     } catch (error) {
//                         console.error('Error logging out:', error);
//                     }
//                 };
            
//                 return (
//                     <div>
//                         {authenticated ? (
//                             <>
//                                 <h1>Welcome, User!</h1>
//                                 <button onClick={handleLogout}>Logout</button>
//                             </>
//                         ) : (
//                             <button id='status'>Internet Identity</button>
//                         )}
//                     </div>
//                 );
//             };
                    
//             const closeButton = document.getElementById("close-button");
//             closeButton.removeEventListener("click", () => {});
//         };
//     }, []); // Empty dependency array ensures useEffect runs only once

//     return (
//         <div>
//             <button id='status'>Internet Identity</button>
//             <button id='close-button'>Close</button>
//         </div>
//     );
// };

// export default Signup;
