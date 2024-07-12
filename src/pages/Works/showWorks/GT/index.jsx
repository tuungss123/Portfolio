import { useState } from 'react';
import newTab from '../../../../assets/svg/new_tab.svg'
import code from '../../../../assets/svg/code.svg'

const GtFootwear = () =>{
    const [buttonStyle, setButtonStyle] = useState('hidden');
    const [gtHover, setGtHover] = useState(false);
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
    <div className='flex flex-col xs:mb-5 lg:mb-0 lg:mr-8 items-center xs:w-[300px] sm:w-[500px]'>
        <div className="xs:w-[350px] sm:w-[400px] xs:h-[200px] sm:h-[240px] lg:w-[500px] lg:h-[280px] relative transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 ..."
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}
      >
            
            <img className={`rounded-xl transition-all xs:w-[350px] sm:w-[400px] xs:h-[200px] sm:h-[240px] lg:w-[500px] lg:h-[280px] ${picOpacity}`} src=''/>
            <div className={`absolute pb-3 pl-3 bottom-0 left-0 text-white ${buttonStyle}`}>
            {gtHover && (
                        <p className='text-sm mb-3 opacity-50'>still in progress</p>
                    )}
                <div className='flex flex-row items-center  '>
                    <a onMouseEnter={()=> {setGtHover(true)}}
                       onMouseLeave={()=> {setGtHover(false)}}
                     className='transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 ...'>
                        <img src={newTab} className='w-8'/>
                    </a>
                    <a href="https://github.com/tuungss123/Portfolio.git" target='_blank' className='transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 ...'>
                        <img src={code} className='pl-4 w-14'/>
                    </a>
                </div>
            </div>
      </div>
      <div className='text-white text-center'>
        <h5>Ecommerce Website (Reactjs & Django) </h5>
      </div>
</div>)
    
}

export default GtFootwear