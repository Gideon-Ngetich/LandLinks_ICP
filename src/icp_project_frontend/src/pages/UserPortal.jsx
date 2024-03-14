import React from 'react'
import TopNav from '../components/Navbar'

const UserPortal = () => {
  return (
   <>
    <div>
        <TopNav />
        <div>
            <div>
                <img src="" alt="" />

                <div className='flex flex-col justify-center items-center'>
                    <span className='text-3xl font-bold my-10'>My Info</span>
                    <span className='flex flex-col justify-center items-center '>
                        <img className='border rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLPjy47N1mbAXa-TXmviwHyxxAJgnC9GRixA&usqp=CAU" alt="" />
                    </span>
                    <span>
                        <button className='px-5 py-2 m-5 bg-green-500'>Edit Info</button>
                    </span>
                </div>
                <div className='flex gap-5 justify-center items-center my-7'>
                    <span className='text-xl'>First Name: Gideon</span>
                    <span className='text-xl'>Last Name: Ngetich</span>
                    <span className='text-xl'>Email: giddy@test.com</span>
                </div>
            </div>
            <div className='flex justify-center gap-10'>
                <button className='px-16 py-2 bg-green-500'>
                    Sell
                </button>
                <button className='px-5 py-2 bg-green-500'>
                    Manage Uploads
                </button>
            </div>
        </div>
    </div>
   </>
  )
}

export default UserPortal