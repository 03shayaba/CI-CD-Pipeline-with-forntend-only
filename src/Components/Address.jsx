import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAttachEmail } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
import { PiPhoneCallLight } from "react-icons/pi";

const AddressData = [
    {
        id: 1,
        icon: <CiLocationOn />,
        info: "Our Address",
        title: "4517 Washington Ave. Manchester, Kentucky 39495"
    },
    {
        id: 2,
        icon: <MdOutlineAttachEmail />,
        info: "info@example.com",
        title: "Email us anytime for any kind of quety."
    },
    {
        id: 3,
        icon: <BsClockHistory />,
        info: "Hot: +208-666-01112",
        title: "24/7/365 priority Live Chat and ticketing support."
    },{
        id: 4,
        icon: <PiPhoneCallLight />,
        info: "Opening Hour",
        title: 'Sunday-Fri: 9 AM – 6 PM '
    }
]

const Address = () => {
  return (
    <div>
        <div className='flex  justify-around items-center   h-[250px]  mx-40 mt-20 mb-20 '>
            {AddressData.map((item) => (
                <div key={item.id} className='flex  flex-col  border border-gray-400 shadow-sm items-center  rounded-xl w-200 h-50 mx-3   '>
                    <div className='text-3xl text-red-600 border mt-5 p-2 border-gray-400 rounded-md  '>{item.icon}</div>
                    <div className='flex flex-col'>
                        <h3 className='text-lg mt-2 font-bold text-center'>{item.info}</h3>
                        <p className='text-sm mt-2 text-gray-600 text-center'>{item.title}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}



export default Address