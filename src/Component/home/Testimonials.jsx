import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { reviews } from '../../utils/reviews';
import Rating from '../share/Rating';

const Testimonials = () => {
  return (
    <section>
      <div className="text-center space-y-2.5 mb-10">
        <h3 className="text-xl uppercase text-[#F47E00] font-semibold">
          Testimonials
        </h3>
        <h2 className="text-4xl font-bold text-[#1E1E1E] dark:text-white">
          Our Client Reviews
        </h2>
      </div>
      <div className="section-container mx-auto">
        <Swiper
        navigation={true} 
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
            {
                reviews.map((reviwe, index)=>(
                          <SwiperSlide key={index} className='bg-no-repeat bg-cover' style={{backgroundImage:`url(${reviwe.coverImg})`}}>
                              <div className='md:h-[476px] flex justify-center items-end mb-4'>
                                  <div className='mt-16 mb-5 bg-white w-full md:w-4/5 p-4 relative rounded-xl'>
                                        <img src={reviwe.image} alt="" className='absolute -top-8 left-1/2 -translate-x-1/2 bg-white p-2 ring-2 ring-amber-500 rounded-full' />
                                        <div className='mt-16 text-center'>
                                            <h3 className='text-[18px] font-semibold dark:text-black'>{reviwe.name}</h3>
                                            <p className='mb-3'>Verified customer</p>
                                            <p className='text-gray-500 dark:text-black mb-4'>{reviwe.review}</p>
                                            <div className='flex justify-center items-center'>
                                                <Rating rating={reviwe.rating} />
                                            </div>
                                        </div>
                                </div>
                              </div>
                            
                            </SwiperSlide>
                ))
            }
        
         
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials