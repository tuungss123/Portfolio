import React from '../../../assets/svg/react.svg'
import Django from '../../../assets/svg/django.svg'
import Material from '../../../assets/svg/material.svg'
import NewTab from '../../../assets/svg/new_tab.svg'
import Code from '../../../assets/svg/code.svg'
const IMSWork = () => {

    const languageHover = "transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 ..."

    return(
        <div className=" flex xs:flex-col xs:items-center lg:items-start lg:flex-row w-[75%] bg-white rounded-xl mb-8 sticky top-20 z-20">
            <div className="xs:w-full lg:w-[50%] ">
                <img className="w-full xs:rounded-t-xl lg:rounded-r-none lg:rounded-l-xl" src="https://github.com/tuungss123/Portfolio/blob/master/IMS.png?raw=true"></img>
            </div>    

            <div className="flex flex-col justify-between xs:w-full lg:w-[50%] p-5 pb-1 ">
                <div className='flex flex-col'>
                    <p className="text-[30px] font-bold">Cafe IMS</p>
                    <p className="text-[20px] text-gray-500">An inventory management system for a Cafe.</p>
                    <div className="flex mt-2">
                        <div className={`flex flex-row mr-3 ${languageHover}`}>
                            <img src={React} className="w-5 animate-spin mr-1"/>
                            <p className='font-semibold text-[14px]'>ReactJS</p>
                        </div>
                        <div className={`flex flex-row mr-3 ${languageHover}`}>
                            <img src={Django} className="w-5 animate-pulse"/>
                            <p className='font-medium text-[14px]'>Django</p>
                        </div>
                        <div className={`flex flex-row ${languageHover}`}>
                            <img src={Material} className="w-5 animate-bounce mr-1"/>
                            <p className='font-medium text-[14px]'>MaterialUI</p>
                        </div>
                    </div>
                </div>
                <div className={`flex xs:flex-col lg:flex-row xs:mt-5 sm:mt-6 `}>
                    <a href='https://ims-8as7.onrender.com' target='_blank'>
                        <div className='flex flex-row xs:mb-3 lg:mb-0 mr-3 hover:-translate-y-1 transition ease-in-out delay-50 duration-300 ...'>
                            <img src={NewTab} className='w-5 text-red-50 mr-2'/>
                            <p className='text-[20px]'>Live Demo</p>
                        </div>
                    </a>
                    <a href='https://github.com/Quichoo/IMS' target='_blank'>
                        <div className='flex flex-row xs:mb-3 lg:mb-0 hover:-translate-y-1 transition ease-in-out delay-50 duration-300 ...'>
                            <img src={Code} className='w-6 text-red-50 mr-2'/>
                            <p className='text-[20px]'>View Code</p>
                        </div>
                    </a>
                </div>

            </div>
        </div>
        
    )
}

export default IMSWork