

const BaleMatwa= () => {
    return(
        <div className=" flex xs:flex-col xs:items-center lg:items-start lg:flex-row lg:justify-between w-[70%] bg-white rounded-xl mb-8 sticky top-[120px] z-30">
            <div className="xs:w-full lg:w-[50%] ">
                <img className="w-full xs:rounded-t-xl lg:rounded-r-none lg:rounded-l-xl" src="https://github.com/tuungss123/Bale-Matwa/blob/master/bale-matwa.png?raw=true"></img>
            </div>    

            <div className="xs:w-full lg:w-[50%] p-5">
                <p className="text-[25px] font-semibold">Bale Matwa</p>
                <p className="text-[18px] text-gray-500">An advocacy website for elders.</p>
            </div>
        </div>
        
    )
}

export default BaleMatwa