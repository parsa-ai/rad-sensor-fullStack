import { BaseUrl } from "app/components/data/data"
import Container from "app/components/ui/Container"
import DownloadIcon from "app/components/ui/icons/DownloadIcon"
import { redirect } from "next/navigation"

async function page() {

  let Datasheets = []

  try {
    Datasheets = await (await fetch(BaseUrl + '/api/product/datasheet-download/all/')).json()
  } catch (error) {
    redirect('/')
  }

  return (
    <main>
      <Container className="flex flex-col items-center justify-center gap-5 py-16 md:py-32">
        <h1 className="text-2xl md:text-4xl text-center font-semibold mb-10 md:mb-28">
          Product Files & softwares
        </h1>
        <img src='/images/download/DatasheetsIcon.png' className="w-20 md:w-40 mb-5" />
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full ">
          {Datasheets.map((item, index) => (
            <article key={index} >

              <a href={BaseUrl + item.datasheet} target="_blank" rel="noopener noreferrer" className="flex justify-between items-center px-3 md:pl-0 md:px-10 pl-0 py-2 bg-white/10 backdrop-blur-2xl rounded-2xl ">
                {item.product_image && <div className="flex  w-20 h-20 md:w-40 md:h-40 items-center justify-center ">
                  <img src={BaseUrl + item.product_image} alt={item.product_name} className="w-full h-full object-contain " />
                </div>}
                <div className="grow-1 flex justify-center items-center">
                  <div className=" w-fit ">
                    <h6 className="text-sm md:text-[20px]  font-light md:font-medium md:mb-4">{item.product_name}</h6>
                  </div>
                </div>
                <DownloadIcon className="h-10 md:h-20" />
              </a>
            </article>
          ))}
        </section>

      </Container>
    </main>
  )
}

export default page