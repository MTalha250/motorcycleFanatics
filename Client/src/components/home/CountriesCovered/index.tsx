import RedDot from "../../../assets/redDot.svg"
import Map from "../../../assets/map.png"

const CounteriesCovered = () => {
    return (
        <div className='container py-14'>
            <div className='flex flex-col justify-center items-center space-y-12'>
                <h2 className="heading-2 text-primary capitalize text-center">The countries we covered</h2>
                <div className="flex justify-between items-center w-full">
                    <div className="flex justify-center items-center gap-2"><img src={RedDot} alt="Point" /><p className="para-large text-white">Germany</p></div>
                    <div className="flex justify-center items-center gap-2"><img src={RedDot} alt="Point" /><p className="para-large text-white">Austria</p></div>
                    <div className="flex justify-center items-center gap-2"><img src={RedDot} alt="Point" /><p className="para-large text-white">Switzerland</p></div>
                </div>
                <img src={Map} alt="map" className="w-full" />
            </div>
        </div>
    )
}

export default CounteriesCovered
