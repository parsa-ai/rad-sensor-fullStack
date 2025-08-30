"use client"
import { useState } from "react"
import Container from "../components/ui/Container"
import { MediaUrl } from "app/components/data/data"

function Page() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    company: "",
    message: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const csrfToken = getCookie('csrftoken');
    console.log(csrfToken)
    try {
      const res = await fetch(MediaUrl + "/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrfToken,
        },
        body: JSON.stringify(formData)
      })
      console.log(res);

      if (res.ok) {
        alert("Message sent successfully!")
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          company: "",
          message: ""
        })
      } else {
        alert("Failed to send message!")
      }
    } catch (error) {
      console.error(error)
      alert("Error sending message!")
    }
  }

  return (
    <main className="w-full py-32">
      <Container className='flex flex-col gap-12 md:gap-16 items-center'>
        <h2 className="text-center text-2xl md:text-5xl font-semibold ">
          Shape Tomorrow’s Solutions Today
        </h2>
        <article className="w-full flex flex-col items-center ">
          <img src='/images/Contact/Halo.png' className="w-full h-auto  bg-top -mt-10 mb-7" />
          <span className="text-base px-10 text-center md:px-0 md:text-left md:text-xl font-medium">
            Fill out the form below and our team ensures your connection.
          </span>
          <form
            onSubmit={handleSubmit}
            className="bg-[#1D1A2614] w-full  md:w-[682px] md:h-[500px] shadow-[0px_4px_10px_0px_#0000001A] mt-5 relative border border-white/20 rounded-2xl overflow-hidden flex justify-center items-center "
          >
            <div className="w-full h-1/2 bg-[#0E70A15E] blur-[135px] absolute -bottom-14"></div>
            <div className="w-full p-16 flex flex-col gap-5">
              <div className="flex  flex-col md:flex-row gap-5 justify-between w-full ">
                <Input label='First Name' id='first_name' value={formData.first_name} onChange={handleChange} />
                <Input label='Last Name' id='last_name' value={formData.last_name} onChange={handleChange} />
              </div>
              <div className="flex  flex-col md:flex-row gap-5 justify-between w-full ">
                <Input label='Email' id='email' type="email" value={formData.email} onChange={handleChange} />
                <Input label='Company' id='company' value={formData.company} onChange={handleChange} />
              </div>
              <Input label='Let us know how we can help' id='message' inputClassName="h-24" value={formData.message} onChange={handleChange} />
              <div className="mt-2">
                <p className="text-[#BDBDBD] text-sm ">
                  By submitting this form, you agree to our Privacy Policy and Terms of Use.
                </p>
                <div className="w-full flex justify-center md:justify-start mt-10 md:mt-4">
                  <button type="submit" className="w-28 h-10 border border-white bg-white text-black rounded-lg z-30">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </article>
      </Container>
    </main>
  )
}

export default Page

function Input({ label, id, type = 'text', divClassName, labelClassName, inputClassName, value, onChange }) {
  return (
    <div className={`flex flex-col flex-1 gap-4 ${divClassName || ''}`}>
      <label htmlFor={id} className={labelClassName || ''}>{label}</label>
      <input
        type={type}
        name={id}
        id={id}
        value={value}
        onChange={onChange}
        className={`border border-white rounded-lg h-10 px-3.5 ${inputClassName || ''}`}
      />
    </div>
  )
}
