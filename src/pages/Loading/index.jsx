import { Atom } from "react-loading-indicators"
import { ReactTyped } from "react-typed";
const Loading = () =>{

    return(
        <div className="bg-[#232424] w-screen h-screen flex justify-center items-center">
            <div className="flex flex-col items-center">
                <Atom color="white" size="large" textColor="#0d1e39" />
                <ReactTyped 
                    className='mt-3 font-[open sans] text-white font-bold lg:text-[50px] md:text-[80px] sm:text-[40px] xs:text-[1.5rem]' 
                    strings={["WELCOME TO MY PORTFOLIO"]}
                    typeSpeed={30} 
                    backSpeed={20} 
                    loop
                />
            </div>
        </div>
    )

}

export default Loading