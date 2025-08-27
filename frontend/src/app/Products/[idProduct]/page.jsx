import ArrowIcon from "../../components/ui/icons/ArrowIcon";
import Container from "../../components/ui/Container";
import { BaseUrl, da } from "app/components/data/data";
import { redirect } from "next/navigation";
import Link from "next/link";
import { MediaUrl } from '../../components/data/data'

async function page({ params }) {

  const { idProduct } = await params
  let data = {}
  try {
    const res = await fetch(BaseUrl + '/api/product/' + idProduct)
    data = await res.json()
    console.log(data)
  } catch (error) {
    redirect('/')
  }
  // const data = da
  return (
    <main className="py-16 md:py-32 flex flex-col gap-12 md:gap-32">
      <Container className='flex flex-col gap-12 md:gap-32'>
        <section className="flex flex-col gap-10">
          <h2 className="text-2xl/relaxed font-bold md:text-5xl/relaxed md:font-medium">
            {data.page_title}
          </h2>
          <article className="flex flex-col md:flex-row gap-10  " >
            <p className="text-lg md:text-xl text-justify flex-1/2">
              {data.sub_title}
            </p>
            <div className="flex-1/2 flex justify-between md:justify-end items-center gap-2.5">
              <span className="text-5xl md:text-7xl text-[#16B2FF] font-medium">20+</span>
              <p className="text-base md:text-lg font-medium">Worldwide clients.</p>
            </div>
          </article>
        </section>
        <section className="flex flex-col items-center gap-6">
          <article className="flex flex-col items-center justify-center gap-2">
            <h4 className="text-[20px] md:text-4xl  font-semibold">From <span className="text-[#16B2FF]">Vision</span> To <span className="text-[#16B2FF]">Reality</span></h4>
            <span className="text-lg font-light md:text-2xl/[27px] md:font-medium text-center">Fully Designed, Engineered & Manufactured In-House</span>
          </article>
          <article className="flex gap-5 w-full flex-col md:flex-row">
            <div className="flex-1 md:h-[450px] min-h-[260px] rounded-t-[90px] md:rounded-tr-none md:rounded-tl-[170px] bg-[linear-gradient(119.78deg,rgba(255,255,255,0.58)44.98%,rgba(207,207,207,0.58)93.03%)] flex justify-center items-end">
              {data.product_images[0] && <img src={MediaUrl + data.product_images[0].image} alt="" className="w-60 md:w-72 max-h-[200px] md:max-h-max object-contain " />}
            </div>
            <div className="flex-1 md:h-[450px] min-h-[260px] rounded-b-[90px] md:rounded-b-none md:rounded-tr-[170px] bg-[linear-gradient(119.78deg,rgba(255,255,255,0.58)44.98%,rgba(207,207,207,0.58)93.03%)] flex justify-center items-end">
              {data.product_images[1] && <img src={MediaUrl + data.product_images[1].image} alt="" className="w-60 md:w-72 max-h-[200px] md:max-h-max object-contain " />}

            </div>
          </article>
          <article className="flex w-full text-2xl font-bold md:text-4xl  mt-14">
            <h2>Electrical Conductivity (EC) Sensor and Transmitter</h2>
          </article>
        </section>
        <section className="flex flex-col md:flex-row justify-between gap-10 md:gap-0">
          <article className="flex-1/2">
            <h5 className="text-[20px] font-bold md:text-[32px] mb-5 md:mb-10">FEATURES</h5>
            <ul className="list-disc flex flex-col gap-6 ml-10">
              {data.product_features.map((feature, index) => {
                return (
                  <li key={index} className="text-base md:text-xl font-normal">{feature.feature}</li>
                )
              })}
            </ul>
          </article>
          <article className="flex-1/2">
            <h5 className="text-[20px] font-bold md:text-[32px] mb-5 md:mb-10">APPLICATIONS</h5>
            <ul className="list-disc flex flex-col gap-6 ml-10">
              {data.product_applications.map((application, index) => {
                return (
                  <li key={index} className="text-base md:text-xl font-normal">{application.application}</li>
                )
              })}
            </ul>
          </article>
        </section>
        <section >
          <article className="flex flex-col-reverse md:flex-row justify-between ">
            <div className="flex-1">
              <h4 className="text-2xl md:text-4xl font-semibold mb-10">Technical Specifications</h4>
              <ul>
                <li className={`py-4 flex justify-between border-b border-white/35 `}>
                  <span className="flex-1 text-xl font-semibold ">Description</span><span className="flex-1 text-xl font-bold">Explanations</span>
                </li>
                {data.product_specifications.map((sensorSpec, index) => {
                  return (
                    <li key={index} className={`py-4 flex justify-between ${index + 1 != data.product_specifications.length ? 'border-b border-white/35' : ''}`}>
                      <span className="flex-1 text-base md:text-xl font-bold ">{sensorSpec.key} </span> <span className="flex-1 text-base md:text-xl font-bold">{sensorSpec.value}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="flex-1 flex justify-center items-center">
              {data.product_images[2] && <img src={MediaUrl + data.product_images[2].image} alt="" className="w-72" />}
              <img src='/images/Products/ctd/fullCtd.png' alt="" className="w-40 mb-10 md:mb-0 md:w-72" />
            </div>
          </article>
          <div className="w-full flex justify-center items-center mt-10">
            <Link href={'/Download'} className='w-fit px-5 font-bold py-2 flex justify-center items-center text-[#3B3B3B] bg-[#f7f7f7] rounded-2xl gap-1.5  text-lg ' >
              DataSheet
            </Link>
          </div>
        </section>
      </Container>
      <section>
        <article>
          <img src='/images/Products/ctd/video.png' alt="" className="w-full max-h-96 object-cover" />
        </article>
        <article className="w-full flex justify-center items-center mt-10">
          <Link href={'/Download'} className='w-fit px-5 py-2  flex justify-center items-center text-[#3B3B3B] bg-[#f7f7f7] rounded-2xl gap-1.5 font-bold text-base ' >
            Contact Us
          </Link>
        </article>
      </section>


    </main>
  )
}

export default page

