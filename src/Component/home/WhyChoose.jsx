import Button from "../share/Button"

const WhyChoose = () => {
  return (
    <section>
         <div className="section-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center mt-14 gap-12 text-left">
              <div>
                <h2 className="text-4xl font-bold text-gray-800">Why <br />Choosing Us</h2>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-[#1E1E1E]">Luxury facilities</h3>
                <p className="text-[#1E1E1E]">The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                <Button text='More info' />
              </div>
                <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-[#1E1E1E]">Luxury facilities</h3>
                <p className="text-[#1E1E1E]">The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                <Button text='More info' />
              </div>
                <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-[#1E1E1E]">Luxury facilities</h3>
                <p className="text-[#1E1E1E]">The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                <Button text='More info' />
              </div>
      
          
          </div>
    </section>
  )
}

export default WhyChoose