import React from "react";
import { useNavigate } from "react-router-dom";


function TopNav() {
    const login = useNavigate('/login');
    
    return (
        <>
            <div className="flex w-screen h-12 items-center justify-between bg-green-400 px-20">
                <div>
                    <p className="font-bold text-2xl" style={{'fontFamily': 'Signika'}}>LANDLINKS</p><img src="" alt="" />
                </div>
                <div className="flex gap-10">
                    <ul className="flex gap-16 text-xl">
                        <li className="hover:border-b-2 duration-100 ease-in">
                            <a href='/'>Home</a>
                        </li>
                        <li className="hover:border-b-2 duration-100 ease-in">
                            <a href="/marketplace">MarketPlace</a>
                        </li>
                        <li className="hover:border-b-2 duration-100 ease-in">
                            <a href="/transactions">Transactions</a>
                        </li>
                        <li className="hover:border-b-2 duration-100 ease-in">
                            <a href="">About Us</a>
                        </li>
                    </ul>
                </div>
                <div className="ml-20 ">
                    <a className="px-5 py-2 rounded-md text-white  bg-blue-800" href="/login">
                        Login
                    </a>
                </div>
            </div>
        </>
    );bb
}

export default TopNav;