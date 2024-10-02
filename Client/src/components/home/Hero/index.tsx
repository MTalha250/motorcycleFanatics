import Background from "../../../assets/hero-background.png"

const Hero = () => {
  return (
    <div
      className="min-h-[700px]  relative bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: `url(${Background})`
      }}
    >
     <div className="absolute inset-0 bg-[#F60500] opacity-45 z-[1] h-full"></div>
     <div className="container w-full flex flex-col justify-center items-center z-[2] relative space-y-10 md:px-10">
        <h1 className="heading-1 text-white text-center italic">Secure Your Exclusive License in Germany, Austria, or Switzerland!</h1>
        <p className="para-large text-white text-center md:px-24 lg:px-52">Check the availability of your region and secure your spot in just a few clicks. Start by entering the first two digits of your postcode.</p>
        <button className="bg-primary py-3 px-8 lg:py-4 lg:px-10 text-white rounded-lg text-xl font-semibold">
            Check Area Availability
        </button>
     </div>
    </div>
  )
}

export default Hero