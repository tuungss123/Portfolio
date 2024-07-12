import { Element } from "react-scroll"
import Switch from '@mui/material/Switch';
import Fade from '@mui/material/Fade';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from "react";
import ShowWorks from "./showWorks/index.jsx";

const Works = () => {
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    const icon = (
        <div><ShowWorks /></div>
    );

      
return(
    <Element name='section2'>
    <div className={"flex xs:flex-col items-center h-20 w-full font-[open sans] font-normal bg-[#232424] text-[white] pt-5 transition-all duration-500"  + (checked ? ' xs:h-[900px] sm:h-[950px] lg:h-[750px]': 'h-[250px]')}>
        <div className="flex flex-row items-center">
        <p className="xs:text-[30px] xl:text-[40px] mr-5 font-semibold">Recent Works</p>
        <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}/>
      </div>

        <div className={"mt-5 w-full " +(checked ? "" : 'hidden')}>
        <Fade in={checked}>{icon}</Fade>
        </div>
    </div>
    </Element>
)
}

export default Works