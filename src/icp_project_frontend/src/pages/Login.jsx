import React, { useState, useEffect } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { AuthClient } from "@dfinity/auth-client";
import { Button } from 'flowbite-react';
import TopNav from '../components/Navbar';
import { FaGoogle } from "react-icons/fa";



const LoginPage = () => {
  useEffect(() => {
    const init = async () => {
      try {
        const authClient = await AuthClient.create();

        // Setup event listener for the "Internet Identity" button
        const statusButton = document.getElementById("status");
        statusButton.addEventListener("click", async () => {
          try {
            // Initiate II authentication process
            const response = await authClient.login({
              identityProvider: "https://identity.ic0.app/#authorize"
            });

            if (response.status === "authorized") {
              // If authentication is successful, handleAuthenticated
              console.log("Authenticated successfully!");
            } else {
              console.error("Authentication failed:", response);
            }
          } catch (error) {
            console.error("Authentication error:", error);
          }
        });

        // Setup event listener for the "Close" button
        const closeButton = document.getElementById("close-button");
        closeButton.addEventListener("click", () => {
          const status = document.getElementById("status");
          status.classList.add("hidden");
        });
      } catch (error) {
        console.error('Error initializing auth client:', error);
      }
    };

    init();

    // Cleanup event listeners
    return () => {
      const statusButton = document.getElementById("status");
      statusButton.removeEventListener("click", () => { });


      const Signup = () => {
        const [authenticated, setAuthenticated] = useState(false);

        useEffect(() => {
          const init = async () => {
            try {
              const authClient = await AuthClient.create();

              if (await authClient.isAuthenticated()) {
                setAuthenticated(true);
              } else {
                await authClient.login({
                  identityProvider: "https://identity.ic0.app/#authorize",
                  onSuccess: async () => {
                    setAuthenticated(true);
                  },
                  onError: async (err) => {
                    console.error("Authentication error:", err);
                  }
                });
              }
            } catch (error) {
              console.error('Error initializing auth client:', error);
            }
          };

          init();

          return () => {
            // Cleanup if needed
          };
        }, []); // Empty dependency array ensures useEffect runs only once

        const handleLogout = async () => {
          try {
            const authClient = await AuthClient.create();
            await authClient.logout();
            setAuthenticated(false);
          } catch (error) {
            console.error('Error logging out:', error);
          }
        };

        return (
          <div>
            {authenticated ? (
              <>
                <h1>Welcome, User!</h1>
                <button onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <button id='status' className='text-red-500 '>Internet Identity</button>
            )}
          </div>
        );
      };

      const closeButton = document.getElementById("close-button");
      closeButton.removeEventListener("click", () => { });
    };
  }, []);
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };

  return (
    <>
      <TopNav />
       <div className='flex flex-col justify-center items-center border'>
      <p className='text-3xl font-bold text-center my-10'>Sign In</p>
      <div className='flex flex-col gap-5 my-10'>
        <div>
          <label htmlFor="" className='font-bold flex  '>Email</label>
          <input type="email" />
        </div>
        <div>
          <label htmlFor="password" className='flex font-bold'>Pasword</label>
          <input id='password' type="password" />
        </div>
        <div className='flex justify-center py-5'>
          <button className='px-10 py-3 bg-green-800 text-white font-bold rounded-md hover:bg-green-700 ease-in duration-100'>Login</button>
        </div>
      </div>
      <div className='text-center'>
        <p className='font-bold'>- or -</p>
        <p>Sign in with</p>
      </div>

      <div className='flex gap-5 my-5'>
        <button onClick={() => signInWithGoogle()} disabled={authing}>
          <img width="48" height="48" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" />
        </button>
        <button id='status' className='text-red-500'><img width="64" height="64" src="https://cryptologos.cc/logos/internet-computer-icp-logo.png" alt="external-Internet-Computer-cryptocurrency-black-fill-lafs" /></button>
      </div>


      <div>

        <Button id='close-button' className='hidden'>Close</Button>
      </div>
    </div>
    </>
   
  );
};

export default LoginPage;