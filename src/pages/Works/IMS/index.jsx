

const IMSWork= () => {
    return(
        <div className=" flex xs:flex-col xs:items-center lg:items-start lg:flex-row lg:justify-between w-[70%] bg-white rounded-xl mb-8 sticky top-20 z-20">
            <div className="xs:w-full lg:w-[50%] ">
                <img className="w-full xs:rounded-t-xl lg:rounded-r-none lg:rounded-l-xl" src="https://github.com/tuungss123/Portfolio/blob/master/IMS.png?raw=true"></img>
            </div>    

            <div className="xs:w-full lg:w-[50%] p-5">
                <p className="text-[25px] font-semibold">Cafe IMS</p>
                <p className="text-[18px] text-gray-500">An inventory management system for a Restaurant.</p>
            </div>
        </div>
        
    )
}

export default IMSWork