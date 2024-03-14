import React from 'react'

const Dashboard = () => {
  return (
    <div>
        <span className='h-96 w-full '>
            Dashboard
        </span>

        <div className='flex gap-10 '>
            <div className='flex flex-col gap-5 items-center justify-between w-1/4 border hover:bg-slate-400'>
                <span>
                <img width="100" height="100" src="https://img.icons8.com/ios/100/like--v1.png" alt="like--v1"/>
                </span>
                <span>
                    My Saved Property
                </span>
                <span>View property you have saved</span>
            </div>

            <div className='flex flex-col gap-5 items-center justify-between w-1/4 border hover:bg-slate-400'>
                <span>
                <img width="100" height="100" src="https://img.icons8.com/ios/100/like--v1.png" alt="like--v1"/>
                </span>
                <span>
                    My Saved Property
                </span>
                <span>View property you have saved</span>
            </div>
        </div>
    </div>
  )
}

export default Dashboard