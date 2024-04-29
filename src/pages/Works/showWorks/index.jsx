import BaleMatwa from "./BaleMatwa"
import Ims from "./IMS"

const ShowWorks = () =>{
return(
    <div className="flex xs:flex-col xs:items-center lg:flex-row justify-center w-full">
        <Ims/>
        <BaleMatwa/>
    </div>
)
}

export default ShowWorks