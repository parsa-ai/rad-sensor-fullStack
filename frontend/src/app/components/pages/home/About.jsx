import Container from "../../ui/Container"
import HomeAbout from "../../ui/icons/HomeAbout"

function About() {
    return (
        <section className="relative flex items-center justify-center md:mb-28">
            <Container className="flex flex-col md:flex-row justify-between gap-10 md:gap-28 h-auto md:h-[470px] relative">
                <article className="flex-1 relative min-h-[270px] md:min-h-[470px] flex flex-col md:block gap-6">
                    <div className="w-full h-[200px] md:w-[400px] md:h-[270px] md:absolute top-0 right-0 md:right-10 z-0 rounded-2xl">
                        <div className="w-16 h-16 md:w-24 md:h-24 bg-white absolute -right-5 md:-right-10 opacity-5 rounded-full -top-5 md:-top-10 -z-10"></div>
                        <img src="/images/HomeAbout/p2.png" className="w-full h-full rounded-2xl object-cover object-top" alt="" />
                    </div>
                    <div className="w-full h-[200px] md:w-[280px] md:h-[260px] relative md:absolute bottom-0 left-0 md:left-10 z-10 rounded-2xl">
                        <div className="w-16 h-16 md:w-24 md:h-24 bg-white absolute -top-5 md:-top-10 opacity-5 rounded-full -left-5 md:-left-10 -z-10"></div>
                        <img src="/images/HomeAbout/p1.jpg" className="w-full h-full rounded-2xl object-cover " alt="" />
                    </div>
                </article>
                <article className="flex-1 flex flex-col gap-6 md:gap-10 text-center md:text-left">
                    <h3 className="text-2xl md:text-4xl text-white font-bold">
                        Discover More About<br />
                        <span className="text-[#16B2FF]">Rad Sensor</span>
                    </h3>
                    <p className="text-white text-sm md:text-xl/[30px] text-justify tracking-[5%] md:tracking-[7%] font-light">
                        RAD SENSOR is a leading manufacturer of electrical conductivity sensors for industrial use, and the only manufacturer in West Asia. Our product stands out for its accuracy, durability, and quality, while also being affordably priced compared to our competitors. Our mission is to provide our clients with high-quality products delivered in a timely and effective manner and to maintain our strong reputation for excellent customer service across the various industries we serve. We make it our priority to understand and meet our client's requirements and expectations, and we are committed to going above and beyond to ensure their complete satisfaction.
                    </p>
                </article>
            </Container>
            <img src="/images/HomeAbout/p3.png" className="absolute left-0 w-1/2 md:w-auto" />
            <HomeAbout className="absolute w-full h-full bottom-0 md:bottom-[-230px]" />
        </section>
    )
}

export default About