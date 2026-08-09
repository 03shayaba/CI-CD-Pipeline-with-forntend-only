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
    <div className='max-w-7xl mx-auto px-4 sm:px-8 my-12 sm:my-16'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {AddressData.map((item) => (
                <div key={item.id} className='flex flex-col items-center border border-gray-200 shadow-md p-6 rounded-2xl bg-white hover:shadow-xl transition duration-300'>
                    <div className='text-3xl text-red-600 border p-3 border-gray-200 rounded-xl bg-red-50 mb-3'>{item.icon}</div>
                    <div className='flex flex-col items-center text-center'>
                        <h3 className='text-base font-bold text-gray-900 mb-1'>{item.info}</h3>
                        <p className='text-xs text-gray-500 leading-relaxed'>{item.title}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Address;