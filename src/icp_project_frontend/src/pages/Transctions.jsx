import React from 'react'
import TopNav from '../components/Navbar'

const Transctions = () => {
    return (
        <div>
            <TopNav />
            <div>
                <div className='bg-cover bg-top h-[400px] flex justify-center items-center my-10' style={{ backgroundImage: `url('https://www.rismedia.com/wp-content/uploads/2019/09/real_estate_commission_836237324.jpg')` }}>
                    <span className='text-4xl font-bold text-white'>Transactions</span>
                </div>

                <div>
                    <table className='divide-y divide-gray-200 w-full'>
                        <thead>
                            <tr>
                                <th className='px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>No</th>
                                <th className='px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>User ID</th>
                                <th className='px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>Transaction ID</th>
                                <th className='px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>Status</th>
                            </tr>
                        </thead>
                        <tbody className='bg-white divide-y divide-gray-200'>
                            <tr>
                                <td className='px-6 py-4 whitespace-no-wrap'>1</td>
                                <td className='px-6 py-4 whitespace-no-wrap'>sdsadsadasfsss23452323</td>
                                <td className='px-6 py-4 whitespace-no-wrap'>3refdfdfdfdsf324325235</td>
                                <td className='px-6 py-4 whitespace-no-wrap'>Complete</td>
                            </tr>
                            <tr>
                                <td className='px-6 py-4 whitespace-no-wrap'>2</td>
                                <td className='px-6 py-4 whitespace-no-wrap'>csafksfmvmksdklsdfmwep</td>
                                <td className='px-6 py-4 whitespace-no-wrap'>sfmqwijfqifncawkdiqwjn</td>
                                <td className='px-6 py-4 whitespace-no-wrap'>Pending</td>
                            </tr>
                            <tr>
                                <td className='px-6 py-4 whitespace-no-wrap'>3</td>
                                <td className='px-6 py-4 whitespace-no-wrap'>mvsgeknjvewnxvmvnd302m</td>
                                <td className='px-6 py-4 whitespace-no-wrap'>cmewkw35jo2mvsd9dnsvls</td>
                                <td className='px-6 py-4 whitespace-no-wrap'>Complete</td>
                            </tr>
                            <tr>
                                <td className='px-6 py-4 whitespace-no-wrap'>4</td>
                                <td className='px-6 py-4 whitespace-no-wrap'>vnweri2r2n3942ncskwkl2</td>
                                <td className='px-6 py-4 whitespace-no-wrap'>xc35349rnefejk20230rnf</td>
                                <td className='px-6 py-4 whitespace-no-wrap'>Cancelled</td>
                            </tr>
                            <tr>
                                <td className='px-6 py-4 whitespace-no-wrap'>5</td>
                                <td className='px-6 py-4 whitespace-no-wrap'>vm34t94jfnfo3203jvnsl3</td>
                                <td className='px-6 py-4 whitespace-no-wrap'>sf32r523rweskl3923r2fd</td>
                                <td className='px-6 py-4 whitespace-no-wrap'>Complete</td>
                            </tr>
                            <tr>
                                <td className='px-6 py-4 whitespace-no-wrap'>6</td>
                                <td className='px-6 py-4 whitespace-no-wrap'>f32r23r9rjr239jewfn203</td>
                                <td className='px-6 py-4 whitespace-no-wrap'>sdgwer23r8932nsdnclse0</td>
                                <td className='px-6 py-4 whitespace-no-wrap'>Pending</td>
                            </tr>
                            <tr>
                                <td className='px-6 py-4 whitespace-no-wrap'>7</td>
                                <td className='px-6 py-4 whitespace-no-wrap'>vwjef83293204t4fvdssa</td>
                                <td className='px-6 py-4 whitespace-no-wrap'>dvewr2i892323rjncscls</td>
                                <td className='px-6 py-4 whitespace-no-wrap'>Complete</td>
                            </tr>
                            <tr>
                                <td className='px-6 py-4 whitespace-no-wrap'>8</td>
                                <td className='px-6 py-4 whitespace-no-wrap'>df23r230r9rjfndcdskslc</td>
                                <td className='px-6 py-4 whitespace-no-wrap'>sc3f2r2309jcmsdkl12emn</td>
                                <td className='px-6 py-4 whitespace-no-wrap'>Complete</td>
                            </tr>
                            <tr>
                                <td className='px-6 py-4 whitespace-no-wrap'>9</td>
                                <td className='px-6 py-4 whitespace-no-wrap'>dfnwgh34t349fjenwflsdc</td>
                                <td className='px-6 py-4 whitespace-no-wrap'>sfn23r89239rhnwscsclws</td>
                                <td className='px-6 py-4 whitespace-no-wrap'>Complete</td>
                            </tr>
                            <tr>
                                <td className='px-6 py-4 whitespace-no-wrap'>10</td>
                                <td className='px-6 py-4 whitespace-no-wrap'>dnvfhwe7t8g4wfnesdjwe3</td>
                                <td className='px-6 py-4 whitespace-no-wrap'>sadfh3728r3fbedjwdoidq</td>
                                <td className='px-6 py-4 whitespace-no-wrap'>Complete</td>
                            </tr>
                            <tr>
                                <td className='px-6 py-4 whitespace-no-wrap'>11</td>
                                <td className='px-6 py-4 whitespace-no-wrap'>sfni238h9r23urifjdsnc</td>
                                <td className='px-6 py-4 whitespace-no-wrap'>cnwurweiffsdf2390wefk</td>
                                <td className='px-6 py-4 whitespace-no-wrap'>Pending</td>
                            </tr>

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default Transctions