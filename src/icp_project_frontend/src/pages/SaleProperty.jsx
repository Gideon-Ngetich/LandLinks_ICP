import React from 'react'
import TopNav from '../components/Navbar'

const SaleProperty = () => {
  return (
    <>
      <TopNav />
      <div>
        <span>
          <h1>Sell land or Property</h1>
        </span>
        <div className='flex m-20 justify-center items-center gap-10 my-10'>
          <div className='border p-10'>
            <span className='text-3xl font-bold my-5'>LAND</span>
            <div>
              <form action="" className='flex flex-col my-5'>
                <label htmlFor="">Name</label>
                <input type="text" name="" id="" />
                <label htmlFor="">Location</label>
                <input type="text" placeholder='Kiambu'/>
                <label htmlFor="">Size</label>
                <input type="text" placeholder='50 X 100'/>
                <label htmlFor="">Price</label>
                <input type="text" placeholder='KES 23000'/>
                <label htmlFor="">Description</label>
                <textarea name="" id="" cols="30" rows="10" placeholder='Type the description'></textarea>
                
              </form>
            </div>
          </div>

          <div className='border p-10'>
            <span className='text-3xl font-bold my-5'>Property</span>
            <div>
              <form action="" className='flex flex-col my-5'>
                <label htmlFor="">Name</label>
                <input type="text" name="" id="" />
                <label htmlFor="">Location</label>
                <input type="text" placeholder='Kiambu'/>
                <label htmlFor="">Size</label>
                <input type="text" placeholder='50 X 100'/>
                <label htmlFor="">Price</label>
                <input type="text" placeholder='KES 23000'/>
                <label htmlFor="">Description</label>
                <textarea name="" id="" cols="30" rows="10" placeholder='Type the description'></textarea>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SaleProperty