import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "./Button"

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
          <img src={offer} alt="" width={773} height={687} className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col">

<h2 className="mt-10 font-palanquin text-4xl font-bold lg:max-w-lg">
  <br />
  <span className="text-coral-red"> Special</span> 
  <span> Offer</span> 
</h2>
<p className="mt-4 lg:max-w-lg info-text">
Our artisans, with years of experience, handcraft each shoe with precision and care. They pay attention to every detail, from the stitching to the finishing touches, guaranteeing a product that not only looks fantastic but also stands up to the test of time.
</p>
<p className="mt-6 lg:max-w-lg info-text">Experience the pinnacle of footwear excellence with our Super Quality Product Shoes</p>
<div className="mt-11 flex flex-wrap gap-4 ">
<Button label="Shop now" iconUrl={arrowRight}/>
<Button label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray"
textColor="text-slate-gray" 
/>
</div>
</div>
    </section>
  )
}

export default SpecialOffers