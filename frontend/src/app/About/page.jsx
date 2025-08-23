import Link from "next/link"
import Container from "../components/ui/Container"
import ArrowIcon from "../components/ui/icons/ArrowIcon"


import TeamSlider from "app/components/pages/about/TeamSlider";

function page() {
  const timeline = [
    {
      year: "2021",
      img: "/images/About/time1.png",
      title: "First in Iran",
      desc: "Rad Sensor built Iran’s firstEC sensor, all local, affordable, and top quality for you.",
    },
    {
      year: "2023",
      img: "/images/About/time2.png",
      title: "Ready to Partner",
      desc: "Team up with Rad Sensor a South Asia leader, participated at Dubai GITEX Exhibition.",
    },
    {
      year: "2025",
      img: "/images/About/time3.png",
      title: "Growing Strong",
      desc: "Invest in Rad Sensor, a top high-tech name since 2019, ready for big success ahead.",
    },
  ];
  const team = [
    {
      name: "Babak Mokhtari",
      role: "CEO & Co - Founder",
      img: "/images/About/Meet.png",
    },
    {
      name: "Sara Ahmadi",
      role: "CTO & Co - Founder",
      img: "/images/About/Meet.png",
    },
    {
      name: "Ali Rezaei",
      role: "Lead Engineer",
      img: "/images/About/Meet.png",
    },
    {
      name: "Mina Hosseini",
      role: "Product Manager",
      img: "/images/About/Meet.png",
    },
  ]
  return (
    <main className="w-full pb-32">
      <Container className='flex flex-col gap-32'>
        <section className="w-full flex flex-col-reverse md:flex-row ">
          <article className="flex-6/12 pt-10 md:pt-32 px-16 flex flex-col justify-between min-h-[550px] md:gap-10" >
            <header>
              <h2 className="text-2xl md:text-6xl/normal font-medium ">
                Beyond tech,<br></br>
                This is Rad Sensor
              </h2>
              <span className="text-[#A8A8A8] text-base md:text-lg font-normal">We build smart solutions for labs, healthcare,<br></br>
                and a better future.</span>
            </header>
            <ul className="flex justify-between flex-col md:flex-row gap-8 mt-10 md:gap-0 md:mt-0">
              <li>
                <div className="relative h-14 flex items-center">
                  <div className="w-[5px] rounded-full top-0 absolute bg-[#16B2FF] h-full" />
                  <span className="pl-3 text-2xl md:text-5xl font-semibold">1st</span>
                </div>
                <p className="pl-3">EC Innovator<br></br>
                  in Iran</p>
              </li>
              <li>
                <div className="relative h-14 flex items-center">
                  <div className="w-[5px] rounded-full top-0 absolute bg-[#16B2FF] h-full" />
                  <span className="pl-3 text-2xl md:text-5xl font-semibold">+5</span>
                </div>
                <p className="pl-3">Years of Experience</p>
              </li>
              <li>
                <div className="relative h-14 md:h-14 flex items-center">
                  <div className="w-[5px] rounded-full top-0 absolute bg-[#16B2FF] h-full" />
                  <span className="pl-3 text-2xl md:text-5xl font-semibold">+20</span>
                </div>
                <p className="pl-3">B2B Partners</p>
              </li>
            </ul>
          </article>
          <article className="flex-6/12 flex justify-center md:justify-end ">
            <img src="/images/About/hero.png" className="mix-blend-lighten" alt="" />
          </article>
        </section>
        <section className="flex flex-row md:flex-col gap-10">
          <div className="w-1 min-h-screen -mt-10 md:mt-0 md:min-h-fit md:w-full md:h-1 rounded-full bg-[linear-gradient(180deg,#173E4F_0%,#33A2E7_47.12%,#173E4F_100%)] md:bg-[linear-gradient(90deg,#173E4F_0%,#33A2E7_47.12%,#173E4F_100%)]" />
          <article className="flex justify-between flex-col md:flex-row gap-28">
            {timeline.map((item, index) => (
              <div key={index} className="flex flex-col gap-5 md:w-[272px] relative">
                <img src={item.img} className="md:w-[272px] h-[182px] object-cover rounded-lg" alt="" />
                <div className="w-5 h-5 absolute -left-[50px] -top-14 md:left-0 md:-top-13 rounded-full bg-[#42C2FA] shadow-[0px_0px_8px_-1px_#6BD2FF]" />
                <div className="w-14 h-7 absolute -top-15  md:-top-24 -left-4 rounded-md bg-[#99999917] shadow-[0px_2px_4.8px_0px_#FFFFFF2B_inset] flex justify-center items-center">
                  {item.year}
                </div>
                <div className="flex flex-col gap-1 ">
                  <span className="text-lg font-semibold">{item.title}</span>
                  <p className="text-base font-medium text-[#BDBDBD]">{item.desc}</p>
                </div>
              </div>
            ))}
          </article>
        </section>

        <section className="flex flex-col gap-10 md:gap-24">
          <h3 className="text-2xl md:text-4xl font-medium">
            Our Mission & Vision
          </h3>
          <article className="flex flex-col md:flex-row gap-10  md:gap-56">
            <div className="flex-1/2 flex flex-col gap-5">
              <h6 className="pl-8 md:p-0 text-[20px] md:text-2xl font-medium ">
                Mission
              </h6>
              <div className="relative flex ">
                <div className="w-4 h-4 absolute left-0 -top-11 md:-left-14 md:top-1 rounded-full bg-[#42C2FA] shadow-[0px_0px_8px_-1px_#6BD2FF]" />
                <p>
                  At Rad Sensor, we design intelligent solutions for labs and healthcare, driven
                  by innovation, precision, and expertise — building a smarter, healthier future.
                </p>
              </div>
            </div>
            <div className="flex-1/2 flex flex-col gap-5">
              <h6 className="pl-8 md:p-0 text-[20px] md:text-2xl font-medium">
                Vision
              </h6>
              <div className="relative flex ">
                <div className="w-4 h-4 absolute left-0 -top-11 md:-left-14 md:top-1 rounded-full bg-[#42C2FA] shadow-[0px_0px_8px_-1px_#6BD2FF]" />
                <p>
                  To become the leading sensor technology brand in the Middle East, redefining global standards in precision, intelligence, and health-focused innovation.

                </p>
              </div>
            </div>
          </article>
        </section>
        <section className="flex flex-col gap-14">
          <h3 className="text-2xl md:text-4xl font-medium">Meet the Team</h3>
          <article className=" justify-between gap-6 hidden md:flex">
            {team.map((member, index) => (
              <div
                key={index}
                className="w-72 pb-4 bg-[#29282F] p-2 shadow-[0px_4px_50.6px_0px_#8686864D_inset] rounded-2xl flex flex-col gap-2.5"
              >
                <img
                  src={member.img}
                  className="w-full rounded-t-xl"
                  alt={member.name}
                />
                <div className="px-2 flex flex-col">
                  <span className="text-xl font-semibold">{member.name}</span>
                  <span className="text-base font-medium">{member.role}</span>
                </div>
              </div>
            ))}
          </article>
          <article className="md:hidden">
            <TeamSlider team={team}></TeamSlider>

          </article>
        </section>
        <section className='flex flex-col justify-center items-center gap-10 '>
          <div className="flex flex-col justify-center items-center gap-3">
            <h6 className='text-2xl md:text-4xl text-white font-medium text-center'>Looking for tailored solutions?</h6>
            <p className="text-center">Powering ideas — from bold concepts to real impact</p>
          </div>
          <Link href={'/Contact'} className='px-5 h-[57px] flex justify-center items-center text-[#3B3B3B] bg-[#f7f7f7] rounded-xl gap-1.5 font-medium text-lg ' >
            Get in Touch
            <ArrowIcon className={'fill-black w-5 rotate-45'}></ArrowIcon>
          </Link>
        </section>
      </Container>
    </main>
  )
}



export default page