import Button from "../share/Button";
import img1 from '../../assets/material1.png'
import img2 from '../../assets/material2.png'
import img3 from '../../assets/material3.png'

const Meterials = () => {
  return (
    <section className="my-24">
      <div className="section-container mx-auto flex flex-col lg:flex-row justify-around items-center">
        <div className="w-full lg:w-[32%] space-y-3.5">
          <h3 className="text-xl uppercase text-[#F47E00] font-semibold">
            Materials
          </h3>
          <h2 className="text-4xl font-bold text-[#1E1E1E] leading-13 dark:text-white">
         Very serious materials for making furniture
          </h2>
          <p>
           Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price
          </p>
          <Button text="More Info" />
        </div>
        <div className="md:w-1/2 grid grid-cols-2 md:grid-cols-3 md:items-end items-center mt-5 md:mt-0">
          <div>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
          </div>
          <div className="md:col-span-2 col-span-1">
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meterials;
