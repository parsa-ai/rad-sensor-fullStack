import Link from "next/link"
import ArrowIcon from "../../ui/icons/ArrowIcon"
import { BaseUrl } from "app/components/data/data"
import { MediaUrl } from '../../data/data'

function TheBlog({ data , className}) {
    return (
        <div className={`flex flex-col gap-4 text-white border border-white/30 rounded-4xl p-4 pb-5 md:p-0 md:border-0 ${className}`}>
            <Link href={'/Blogs/' + data.id} className="w-full relative flex rounded-2xl">
                <img src={data.image && data.image.trim() !== "" ? MediaUrl +data.image : '/images/Blogs/b1.png'} alt="" className="w-full rounded-2xl h-60 object-cover" />
                <div className="w-full h-full absolute bg-black/50 opacity-0 hover:opacity-100 transition rounded-2xl flex justify-center items-center">
                    <div className="w-20 h-20 bg-[#3EADE5] rounded-full flex justify-center items-center">
                        <ArrowIcon></ArrowIcon>
                    </div>
                </div>
            </Link>
            <Link href={'/Categorys/' + data.category.name} className="text-[#AEAEAE] text-lg ">
                {data.category.name}
            </Link>
            <h6 className="text-2xl ">
                {data.title}
            </h6>
            <div className="text-[#AEAEAE] text-lg ">
                <span className="line-clamp-2">{data.content}</span>
                <Link href={'/Blogs/' + data.id} className="underline text-white">Read more</Link>
            </div>
        </div>
    )
}

export default TheBlog