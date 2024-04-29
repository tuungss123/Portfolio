import { useState } from 'react';
import newTab from '../../../assets/svg/new_tab.svg'
import code from '../../../assets/svg/code.svg'

const ShowWorks = () =>{
    const [buttonStyle, setButtonStyle] = useState('hidden');
    const [picOpacity, setPicOpacity] = useState('');
  const handleMouseEnter = (event) => {
    event.preventDefault();
    setButtonStyle('block');
    setPicOpacity('opacity-50')
  };

  const handleMouseLeave = (event) => {
    event.preventDefault();
    setButtonStyle('hidden');
    setPicOpacity('')
  };
return(
    <div className='flex flex-col items-center xs:w-[300px] sm:w-[500px]'>
        <div className=" w-300 h-500 relative transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 ..."
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}
      >
            
            <img className={`rounded-xl transition-all ${picOpacity}`} src='https://github.com/tuungss123/Portfolio/blob/master/IMS.png?raw=true'/>
            <div className={`absolute pb-3 pl-3 bottom-0 left-0 text-white ${buttonStyle}`}>
                <div className='flex flex-row items-center '>
                    <a href="https://ims-8as7.onrender.com" target='_blank' className='transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 ...'>
                        <img src={newTab} className='w-8'/>
                    </a>
                    <a href="https://github.com/Quichoo/IMS" target='_blank' className='transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 ...'>
                        <img src={code} className='pl-4 w-14'/>
                    </a>
                </div>
            </div>
      </div>
      <div className='text-white'>
        <h5>Inventory Management System (Reactjs & Django) </h5>
      </div>
</div>)
    
}

export default ShowWorks