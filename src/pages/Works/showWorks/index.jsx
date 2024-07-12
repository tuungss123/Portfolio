import BaleMatwa from "./BaleMatwa"
import GtFootwear from "./GT"
import Ims from "./IMS"

const ShowWorks = () =>{
return(
    <div>
        <div className="flex xs:flex-col xs:items-center lg:flex-row justify-center w-full">
            <Ims/>
            <BaleMatwa/>
        </div>
        <div className="flex flex-row justify-center w-full mt-10">
            <GtFootwear/>
        </div>
    </div>
)
}

export default ShowWorks