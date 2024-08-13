import { Element } from "react-scroll"
import BaleMatwa from "./BaleMatwa"
import GtWork from "./GtWork"
import IMSWork from "./IMS"
const Works = () => {
   
return(
    <Element name="section2">
    <div className="flex flex-col items-center justify-center w-full font-[open sans] font-normal bg-[#232424]">
        <h2 className="text-white text-[40px] font-bold mb-5">My Works</h2>
        
        <div className="w-full flex flex-col items-center relative  ">
        <GtWork/>
        <IMSWork/>
        <BaleMatwa/>
        </div>
    </div>
    </Element>
)
}

export default Works