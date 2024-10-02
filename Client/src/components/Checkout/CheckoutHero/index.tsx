import Background from "../../../assets/hero-background.png"

const CheckoutHero = () => {
  return (
    <div
      className="min-h-[600px]  relative bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: `url(${Background})`
      }}
    >
     <div className="absolute inset-0 bg-[#F60500] opacity-45 z-[1] h-full"></div>
     <div className="container w-full flex flex-col justify-center items-center z-[2] relative space-y-10 md:px-10">
        <h1 className="heading-1 text-white text-center italic">Secure Your License for [Area]</h1>
        <p className="para-large text-white text-center md:px-24 lg:px-52">Complete your subscription and be part of our network. Choose your preferred payment method below.</p>
     </div>
    </div>
  )
}

export default CheckoutHero
