import CheckoutHero from "@/components/Checkout/CheckoutHero"
import Pricing from "@/components/Checkout/Pricing"
import GetInTouch from "@/components/home/GetInTouch"
import NewsLetter from "@/components/home/NewsLetter"

const Checkout = () => {
  return (
    <div>
      <CheckoutHero/>
      <Pricing/>
      <NewsLetter/>
      <GetInTouch/>
    </div>
  )
}

export default Checkout
