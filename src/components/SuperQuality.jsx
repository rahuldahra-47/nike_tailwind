import Button from "./Button"
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
   <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
    <div className="flex flex-1 flex-col">

        <h2 className="mt-10 font-palanquin text-4xl font-bold lg:max-w-lg">
         We Provide You
          <br />
          <span className="text-coral-red">Fantastic</span> 
          <span className="text-coral-red"> Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
        Our artisans, with years of experience, handcraft each shoe with precision and care. They pay attention to every detail, from the stitching to the finishing touches, guaranteeing a product that not only looks fantastic but also stands up to the test of time.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Experience the pinnacle of footwear excellence with our Super Quality Product Shoes</p>
        <div className="mt-11">
        <Button label="See detils" />
        </div>
    </div>
    <div className="flex-1 flex justify-center items-center">
<img src={shoe8} alt="shoe" width={570} height={522} className="object-contain"/>
    </div>
   </section>
  )
}

export default SuperQuality