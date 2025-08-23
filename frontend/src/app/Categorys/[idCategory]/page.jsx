import { BlogItems } from '../../components/data/data'
import TheBlog from '../../components/pages/Blogs/TheBlog'
import Container from '../../components/ui/Container'
import ArrowIcon from '../../components/ui/icons/ArrowIcon'
import Link from 'next/link'


export default async function Page({ params }) {
  const { idCategory } = await params
  const categorys = decodeURIComponent(idCategory)

  const categorysItems = BlogItems.filter((item) => {
    if (item.category == categorys) {
      return true
    }
  })
  return (
    <main>
      <h1 className='w-full h-20  md:h-36 flex justify-center items-center text-3xl md:text-6xl text-[#3B3B3B] bg-[linear-gradient(91.72deg,#B2B2B2_-16.43%,_#D9D9D9_107.16%)] shadow-[0px_30px_63.2px_-16px_#FFFFFF2B] mb-12 font-semibold'>{categorys}</h1>
      <Container>
        <section className='grid grid-cols-1 md:grid-cols-3 md:my-20 gap-14'>
          {categorysItems.map((blog) => {
            return (
              <TheBlog data={blog} key={blog.id}></TheBlog>
            )
          })}
        </section>
        <section className='flex flex-col justify-center items-center gap-10 my-32'>
          <h6 className='text-4xl text-white font-medium text-center'>Looking for tailored solutions?</h6>

          <Link href={'/Contact'} className='w-[267px] h-[57px] flex justify-center items-center text-[#393939] bg-[#f7f7f7] rounded-lg gap-1.5 font-medium text-lg ' >
            Contact Us Today
            <ArrowIcon className={'fill-black w-5 rotate-45'}></ArrowIcon>
          </Link>
        </section>
      </Container>
    </main>
  )
}
