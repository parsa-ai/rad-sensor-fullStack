import { BaseUrl } from "app/components/data/data"
import Container from "../../components/ui/Container"
import { redirect } from "next/navigation";
export default async function Page({ params }) {
  const { idBlog } = await params
  let Blog = []
  try {
    const res = await fetch(BaseUrl + '/api/blog/' + idBlog)
    Blog = await res.json()
  } catch (error) {
    redirect("/Blogs");
  }
  return (
    <main className="flex flex-col ">
      <header>
        <img src={BaseUrl + Blog.image} className="w-full h-[550px] object-cover" alt="" />
      </header>
      <Container className='flex flex-col gap-13 py-13 md:gap-16 md:py-20'>
        <article>
          <h1 className="text-3xl md:text-6xl font-bold md:max-w-3/4 mb-5 ">{Blog.title}</h1>
          <p className="font-normal text-base/[24px]  text-[#F7F7F7]">
            {Blog.content}
          </p>
        </article>
        {
          Blog.sections.map((section, index) => {
            return (
              <article key={index} className="w-full flex flex-col gap-4 ">
                {section.image && section.image.trim() !== "" && <img src={BaseUrl + section.image} className="w-full rounded-xl h-72 md:h-[500px] object-cover" alt="" />}
                {section.heading && section.heading.trim() !== "" && <h4 className="text-[#f7f7f7] font-normal text-xl md:text-4xl/[132%] ">{section.heading}</h4>}
                {section.content && section.content.trim() !== "" && <h4 className="text-[#f7f7f7] font-normal text-base/[24px] ">{section.content}</h4>}
                {section.list_items && section.list_items.length !== 0 && <ul className="list-disc px-8">
                  {section.list_items.map((liItem, index) => {
                    return (
                      <li key={index}>{liItem.item}</li>
                    )
                  })}
                </ul>}
              </article>
            )
          })
        }

      </Container>
    </main>
  )
}
