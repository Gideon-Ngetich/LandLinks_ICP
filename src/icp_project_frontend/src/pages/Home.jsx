import React from 'react'
import TopNav from '../components/Navbar'

const Home = () => {

  return (
    <>
      <TopNav />
      <div>
        <div className='w-screen h-screen bg-cover bg-center flex justify-center items-center' style={{ backgroundImage: `url('https://www.horizonpromoters.com/images/main-slider/slider1/1.jpg')` }}>
          <div className='w-screen h-3/4 flex flex-col justify-center items-center'>
            <p className='font-bold text-5xl'>Welcome to LandLinks</p>
            <span className='text-xl w-3/4 my-5 text-white text-center'>Explore the future of real estate with LandLinks, leveraging blockchain for secure and transparent property transactions. Buy or sell land and properties seamlessly. Join us today!</span>
          </div>
        </div>

        <div className='w-full flex flex-col justify-center items-center py-16 bg-slate-300'>
          <span>
            <h1 className='text-4xl font-bold' style={{ 'fontFamily': 'Courgette' }}>~ Our Services ~</h1>
          </span>
          <div className='flex w-full justify-center items-center gap-40 mx-10 py-10'>
            <div className='block'>
              <span className='text-2xl font-bold text-center flex justify-center '>
                Buy and Sell Land
              </span>
              <div className='w-[450px] h-68 bg-cover bg-opacity-30 my-5 bg-center bg-no-repeat items-center justify-center text-center rounded-md' style={{ backgroundImage: `url('https://media.istockphoto.com/id/1324257674/photo/land-plot-in-aerial-view.jpg?s=612x612&w=0&k=20&c=VGDq45TIa6SPDhZrfGQsD3mE3Uj1Uw_-T29mJ2hnE6M=')` }}>
                <span className='flex justify-center items-center text-center p-10 text-xl bg-slate-200 bg-opacity-35'>

                  Buy or sell land effortlessly with our secure blockchain-powered platform. Explore a wide range of listings and enjoy transparent, hassle-free transactions. Join us and unlock the potential of property ownership.

                </span>
              </div>
            </div>

            <div className='block'>
              <span className='text-2xl font-bold text-center flex justify-center '>
                Buy and Sell Property
              </span>
              <div className='w-[450px] h-68 bg-cover bg-opacity-100 my-5 bg-center bg-no-repeat items-center justify-center text-center rounded-md' style={{ backgroundImage: `url('https://c1.wallpaperflare.com/preview/260/583/682/new-home-for-sale-home-house.jpg')` }}>
                <span className='flex justify-center items-center text-center  p-10 text-xl bg-slate-200 bg-opacity-35'>

                  Buy or sell land effortlessly with our secure blockchain-powered platform. Explore a wide range of listings and enjoy transparent, hassle-free transactions. Join us and unlock the potential of property ownership.

                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full flex flex-col justify-center items-center py-16 bg-slate-300'>
          <span>
            <h1 className='text-4xl font-bold' style={{ 'fontFamily': 'Courgette' }}>~ Why Choose Us ~</h1>
          </span>

          <div className='flex gap-10 my-10 px-10'>
            <div className='flex justify-center items-center gap-3'>
              <span>
                <img className='w-32 h-32' src="https://cryptologos.cc/logos/internet-computer-icp-logo.png" alt="" />
              </span>
              <div className='flex flex-col gap-5 items-center justify-center w-80 text-center'>
                <span className='font-bold text-xl'>ICP Blockchain Integration</span>
                <span>Implementing ICP blockchain to ensure secure and tamper-proof transaction records.</span>
              </div>

            </div>

            <div className='flex justify-center items-center gap-3'>
              <span>
                <img className='w-32 h-32' src="https://cdn.iconscout.com/icon/premium/png-256-thumb/smart-contract-2074533-1748304.png?f=webp" alt="" />
              </span>
              <div className='flex flex-col gap-5 items-center justify-center w-80 text-center'>
                <span className='font-bold text-xl'>Smart Contract Adoption</span>
                <span>Utilizing smart contracts for automated and transparent real estate agreements.</span>
              </div>

            </div>

            <div className='flex justify-center items-center gap-3'>
              <span>
                <img className='w-48 h-48' src="https://media.licdn.com/dms/image/C5612AQEbtmQcsM2TUw/article-cover_image-shrink_720_1280/0/1552337287072?e=2147483647&v=beta&t=el0ch_LwbrHeREV_HZUuhfNB94hxV5U5DxW3vqOXOtc" alt="" />
              </span>
              <div className='flex flex-col gap-5 items-center justify-center w-80 text-center'>
                <span className='font-bold text-xl'>Decentralized Identity Verification</span>
                <span>Introducing decentralized identity verification for enhanced security and privacy.</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>


  )
}

export default Home