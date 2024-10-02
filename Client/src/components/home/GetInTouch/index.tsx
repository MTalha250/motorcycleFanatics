import GPS from "../../../assets/GPS.svg"
import Location from "../../../assets/location_on.svg"
import { Mail, MapPin, PhoneIcon } from "lucide-react"

const GetInTouch = () => {
    return (
        <div className="container my-12">
            <div className="flex flex-col md:flex-row justify-center md:items-stretch gap-4">
                <div className="flex flex-col justify-center md:space-y-8 items-start w-full md:w-1/2 space-y-8">
                    <h3 className="heading-3 text-white text-start">GET IN TOUCH</h3>
                    <p className="para-small">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                    <div className="flex flex-row gap-5">
                        <div className="flex flex-col">
                            <div className="flex flex-row justify-start items-center gap-2">
                                <MapPin />
                                <h4 className="heading-4 capitalize">Location</h4>
                            </div>
                            <p className="para-small">8819 Ohio St. South Gate, California 90280</p>
                        </div>

                        <div className="flex flex-col">
                            <div className="flex flex-row justify-start items-center gap-2">
                                <Mail />
                                <h4 className="heading-4 capitalize">Email</h4>
                            </div>
                            <p className="para-small">ourstudio@hello.com</p>
                        </div>
                    </div>

                    <div className="flex flex-col">
                            <div className="flex flex-row justify-start items-center gap-2">
                                <PhoneIcon />
                                <h4 className="heading-4 capitalize">Phone</h4>
                            </div>
                            <p className="para-small">+271 386-647-3637</p>
                        </div>
                </div>
                <div className="md:w-[40%] w-full relative">
                    <img src={Location} alt="Location" className="absolute top-[40%] left-[40%]"/>
                    <img src={GPS} alt="gps" className="max-h-[500px] rounded-xl" />
                </div>
            </div>
        </div>
    )
}

export default GetInTouch