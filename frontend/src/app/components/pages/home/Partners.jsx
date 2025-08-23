import React from 'react'
import Titles from '../../ui/Titles'

function Partners() {
  return (
    <section>
      <Titles>Our Partners</Titles>
      <article className='w-full overflow-hidden mt-7 md:mt-24'>
        <InfiniteSlider></InfiniteSlider>
      </article>
    </section>
  )
}

const images = [
  "/images/Partners/p1.png",
  "/images/Partners/p2.png",
  "/images/Partners/p3.png",
  "/images/Partners/p4.png",
];

const InfiniteSlider = () => {
  return (
    <div className="w-full mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)] mix-blend-luminosity">
      <div className="flex animate-[slide_10s_linear_infinite] whitespace-nowrap  ">
        {[...images, ...images].map((src, index) => (
          <div
            key={`${index}-${src}`}
            className="inline-flex items-center justify-center mx-8"
          >
            <img
              src={src}
              alt={`slider-${index % images.length}`}
              className="max-w-none h-16 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};


export default Partners