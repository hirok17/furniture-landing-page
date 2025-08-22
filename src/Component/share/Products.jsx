const Products = ({ title }) => {
    const categories =['Chair', 'Beds', 'Sofa', 'Lamp'];
  return (
    <section className="mt-14 bg-[#F7F7F7] py-5">
      <div className="section-container">
        <div>
          <h2 className="text-[#1E1E1E] text-4xl font-bold text-center">
            {title}
          </h2>
        </div>
        <div className="bg-[#EEEEEE] max-w-md mx-auto py-2.5 rounded-full mt-3">
          <div className="ml-3">
            {
                categories.map(category=>(
                    <button className={`py-1.5 sm:py-3 px-8 hover:bg-[#E58411] hover:text-white transition-colors rounded-full cursor-pointer`} key={category}>{category}</button>
                ))
            }

          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
