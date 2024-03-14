import React from 'react'
import TopNav from '../components/Navbar'

const Marketplace = () => {
    return (
        <div>
            <div>
                <TopNav />

                <div className='bg-cover bg-center h-[400px] flex justify-center items-center' style={{ backgroundImage: `url('https://wallpapertag.com/wallpaper/middle/a/4/e/711915-nice-nature-wallpapers-2880x1800-for-iphone-6.jpg')` }}>
                    <span className='text-3xl font-bold text-white'>Property for fale in Kenya</span>
                </div>

                <div className='flex w-full'>
                    <div className='m-10 w-3/4 border p-10'>
                        <span className='text-xl px-5'>Quick Filter</span>
                        <div className='grid grid-cols-4 m-5 border p-5'>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" />
                                <label htmlFor="">Baringo</label>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" />
                                <label htmlFor="">Uasin Gishu</label>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" />
                                <label htmlFor="">Nakuru</label>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" />
                                <label htmlFor="">Nairobi</label>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" />
                                <label htmlFor="">Narok</label>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" />
                                <label htmlFor="">Mombasa</label>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" />
                                <label htmlFor="">Mere</label>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" />
                                <label htmlFor="">Nyeri</label>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" />
                                <label htmlFor="">Kisumu</label>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" />
                                <label htmlFor="">Kitale</label>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" />
                                <label htmlFor="">Kiambu</label>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" />
                                <label htmlFor="">West Pokot</label>
                            </div>

                            <div>
                                <a href="" className='text-red-500 my-2'>Show more</a>
                            </div>



                        </div>

                        <div className='flex flex-col gap-10'>
                            <div className='flex flex-col border p-5'>
                                <span className='my-1 text-bold'>Build Your Dream Home Here!</span>
                                <div className='flex gap-7'>
                                    <div className='flex justify-center items-center'>
                                        <img className='w-[700px]' src="https://images.kenyapropertycentre.com/properties/images/30673/065d6fff615183-fantastic-family-home-so-much-to-offer-townhouses-for-sale-kikuyu-kiambu.jpg" alt="" />
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <span className='text-blue-700'>Residential property for sale</span>
                                        <span className='font-bold'>Uasin Gishu, Moiben</span>
                                        <span>
                                            Are you looking for land to build your family home? then come see these beautiful 1/8th (50*100ft) residential plots that are on sale in,
                                        </span>
                                        <span>
                                            <a href="" className='text-red-500 underline'>Show More</a>
                                        </span>

                                        <span className='flex justify-between gap-2'>
                                            <span className='text-xl text-red-600'>
                                                KSH 2,650,000
                                            </span>
                                            <span className='text-md'>
                                                <p>Homelanders Properies</p>
                                                <p>0732342432</p>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className='flex justify-end items-center text-red-600 px-5 w-full h-10  border-t-2 bg-slate-400'>
                                    <a href="">Save</a>
                                </div>
                            </div>

                            <div className='flex flex-col gap-10'>
                                <div className='flex flex-col border p-5'>
                                    <span className='my-1 text-bold'>Build Your Dream Home Here!</span>
                                    <div className='flex gap-7'>
                                        <div className='flex justify-center items-center'>
                                            <img className='w-[700px]' src="https://i.ytimg.com/vi/M1vKyU5rDrs/mqdefault.jpg" alt="" />
                                        </div>
                                        <div className='flex flex-col gap-4'>
                                            <span className='text-blue-700'>Residential property for sale</span>
                                            <span className='font-bold'>Nakuru, Rongai</span>
                                            <span>
                                                A cozy two-story home with three bedrooms and two baths, featuring a modern kitchen and a landscaped backyard, perfect for family living in a peaceful neighborhood.
                                            </span>
                                            <span>
                                                <a href="" className='text-red-500 underline'>Show More</a>
                                            </span>

                                            <span className='flex justify-between gap-2'>
                                                <span className='text-xl text-red-600'>
                                                    KSH 3,000,000
                                                </span>
                                                <span className='text-md'>
                                                    <p>Pride Estates</p>
                                                    <p>0722345667</p>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='flex justify-end items-center text-red-600 px-5 w-full h-10  border-t-2 bg-slate-400'>
                                        <a href="">Save</a>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-10'>
                                    <div className='flex flex-col border p-5'>
                                        <span className='my-1 text-bold'>Build Your Dream Home Here!</span>
                                        <div className='flex gap-7'>
                                            <div className='flex justify-center items-center'>
                                                <img className='w-[700px]' src="https://coralpi.com/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGY29yYWxwaS5jb20lMkZ3cC1jb250ZW50JTJGdXBsb2FkcyUyRjIwMjQlMkYwMyUyRktDLTQtNTI1eDMyOC5qcGcmY2FjaGVNYXJrZXI9MTcxMDE1MDgzNC02NTkyOSZ0b2tlbj04ZGExNWM0MzFhZjIwYmM2.q.jpg" alt="" />
                                            </div>
                                            <div className='flex flex-col gap-4'>
                                                <span className='text-blue-700'>Residential Land for sale</span>
                                                <span className='font-bold'>Nairobi, Kikuyu</span>
                                                <span>
                                                    Luxurious townhouse with four bedrooms and three and a half baths, showcasing high-end finishes, city views, and a private rooftop terrace, centrally located for urban living and entertainment.                                                </span>
                                                <span>
                                                    <a href="" className='text-red-500 underline'>Show More</a>
                                                </span>

                                                <span className='flex justify-between gap-2'>
                                                    <span className='text-xl text-red-600'>
                                                        KSH 2,750,000
                                                    </span>
                                                    <span className='text-md'>
                                                        <p>Smart Builders</p>
                                                        <p>0754534234</p>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className='flex justify-end items-center text-red-600 px-5 w-full h-10  border-t-2 bg-slate-400'>
                                            <a href="">Save</a>
                                        </div>
                                    </div>

                                    <div className='flex flex-col gap-10'>
                                        <div className='flex flex-col border p-5'>
                                            <span className='my-1 text-bold'>Build Your Dream Home Here!</span>
                                            <div className='flex gap-7'>
                                                <div className='flex justify-center items-center'>
                                                    <img className='w-[700px]' src="https://images.prop24.com/324463113" alt="" />
                                                </div>
                                                <div className='flex flex-col gap-4'>
                                                    <span className='text-blue-700'>Residential Land for sale</span>
                                                    <span className='font-bold'>Uasin Gishu, Moiben</span>
                                                    <span>
                                                        Are you looking for land to build your family home? then come see these beautiful 1/8th (50*100ft) residential plots that are on sale in,
                                                    </span>
                                                    <span>
                                                        <a href="" className='text-red-500 underline'>Show More</a>
                                                    </span>

                                                    <span className='flex justify-between gap-2'>
                                                        <span className='text-xl text-red-600'>
                                                            KSH 2,650,000
                                                        </span>
                                                        <span className='text-md'>
                                                            <p>Homelanders Properies</p>
                                                            <p>0732342432</p>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='flex justify-end items-center text-red-600 px-5 w-full h-10  border-t-2 bg-slate-400'>
                                                <a href="">Save</a>
                                            </div>
                                        </div>

                                        <div className='flex flex-col gap-10'>
                                            <div className='flex flex-col border p-5'>
                                                <span className='my-1 text-bold'>Build Your Dream Home Here!</span>
                                                <div className='flex gap-7'>
                                                    <div className='flex justify-center items-center'>
                                                        <img className='w-[700px]' src="https://cdn.remax.co.za/listings/4175733/original/0155b54f-2467-7a2d-23b5-169e5af46460.jpg" alt="" />
                                                    </div>
                                                    <div className='flex flex-col gap-4'>
                                                        <span className='text-blue-700'>Residential Land for sale</span>
                                                        <span className='font-bold'>Uasin Gishu, Moiben</span>
                                                        <span>
                                                            Are you looking for land to build your family home? then come see these beautiful 1/8th (50*100ft) residential plots that are on sale in,
                                                        </span>
                                                        <span>
                                                            <a href="" className='text-red-500 underline'>Show More</a>
                                                        </span>

                                                        <span className='flex justify-between gap-2'>
                                                            <span className='text-xl text-red-600'>
                                                                KSH 2,650,000
                                                            </span>
                                                            <span className='text-md'>
                                                                <p>Homelanders Properies</p>
                                                                <p>0732342432</p>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='flex justify-end items-center text-red-600 px-5 w-full h-10  border-t-2 bg-slate-400'>
                                                    <a href="">Save</a>
                                                </div>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-5 justify-center items-center py-5'>
                            <span className='bg-slate-300 p-2 cursor-pointer'>Prev</span>
                            <span className='hover:underline duration-100 cursor-pointer'>1</span>
                            <span className='hover:underline duration-100 cursor-pointer'>2</span>
                            <span className='hover:underline duration-100 cursor-pointer'>3</span>
                            <span className='hover:underline duration-100 cursor-pointer'>4</span>
                            <span className='hover:underline duration-100 cursor-pointer'>5</span>
                            <span className='bg-slate-300 p-2 cursor-pointer'>Next</span>
                        </div>

                    </div>

                    <div className='m-10 border p-6'>
                        <span className='text-xl text-start w-full my-5 border-b-2'>
                            Advanced Filter
                        </span>
                        <div className='border-b'>
                            <form action="" className='flex flex-col gap-2'>
                                <label htmlFor="">Location</label>
                                <input type="text" name="" id="" placeholder='Enter a county or town name' />
                                <label htmlFor="">Category</label>
                                <select name="" id="">
                                    <option value="">For sale</option>
                                    <option value="">Nakuru</option>
                                    <option value="">Nairobi</option>
                                    <option value="">Kisii</option>
                                    <option value="">Eldoret</option>
                                    <option value="">Nakuru</option>
                                    <option value="">Meru</option>
                                    <option value="">Vihiga</option>
                                    <option value="">Homa Bay</option>
                                </select>
                                <div className='grid grid-cols-2 gap-3'>

                                    <span className='flex flex-col'>
                                        <label htmlFor="">Type</label>
                                        <select name="" id="">
                                            <option value="">All Types</option>
                                            <option value="">Apartment</option>
                                            <option value="">House</option>
                                            <option value="">Land</option>
                                            <option value="">Commercial Property</option>
                                            <option value="">Event Center</option>
                                        </select>
                                    </span>

                                    <span className='flex flex-col'>
                                        <label htmlFor="">Bedrooms</label>
                                        <select name="" id="">
                                            <option value="">Any</option>
                                            <option value="">1</option>
                                            <option value="">2</option>
                                            <option value="">3</option>
                                            <option value="">4</option>
                                            <option value="">5</option>
                                            <option value="">6+</option>
                                        </select>
                                    </span>

                                    <span className='flex flex-col'>
                                        <label htmlFor="">Min Price</label>
                                        <select name="" id="">
                                            <option value="">No Min</option>
                                            <option value="">KES 10000</option>
                                            <option value="">KES 25000</option>
                                            <option value="">KES 50000</option>
                                            <option value="">KES 150000</option>
                                            <option value="">KES 500000</option>
                                            <option value="">KES 1000000</option>
                                        </select>
                                    </span>

                                    <span className='flex flex-col'>
                                        <label htmlFor="">Max Price</label>
                                        <select name="" id="">
                                            <option value="">No Max</option>
                                            <option value="">KES 10000</option>
                                            <option value="">KES 25000</option>
                                            <option value="">KES 50000</option>
                                            <option value="">KES 150000</option>
                                            <option value="">KES 500000</option>
                                            <option value="">KES 1000000</option>
                                        </select>
                                    </span>
                                </div>



                                <label htmlFor="">Keyword</label>
                                <input type="text" placeholder='e.g. pool' />

                                <button className='px-10 py-2 bg-red-600'>Search</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Marketplace