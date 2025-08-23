import React from 'react'

function Faq() {
    const FaQ = [
        {
            title: 'What materials are EC probes made of?',
            text: 'EC probes are made of materials that are selected based on the environment. The sensor body (or housing) is usually made of durable polymers such as ABS or PTFE or corrosion-resistant metals such as 316 stainless steel. The electrodes are made of graphite, 316 stainless steel, platinum or titanium, etc., depending on the application.'
        },
        {
            title: 'What are the main industries and key applications of electrical conductivity (EC) sensors?',
            text: `EC sensors are widely used in: Agriculture
Water and wastewater treatment
Chemical and petrochemical industries
Food and beverage manufacturing
Nuclear industry
Oil and gas industries
Aquaculture and aquatic ecosystems
Cooling systems and boilers
Pharmaceuticals
Environmental monitoring for accurate conductivity measurement and process control.`
        },
        {
            title: 'How do I choose the most suitable sensor for my specific needs and where can I get expert advice?',
            text: 'To find the most suitable sensor for your application, please contact our experts. Visit our Contact Us page to get in touch and receive professional advice tailored to your needs.'
        },
        {
            title: 'How often should the sensor be calibrated?',
            text: 'The calibration frequency varies from one month to one year, depending on the user’s experience and environmental conditions. In environments with high sediment or sludge, periodic electrode calibration is recommended to prevent measurement errors.'
        },
        {
            title: 'What materials are EC probes made of?',
            text: `EC sensors are widely used in:
Agriculture
Water and wastewater treatment
Chemical and petrochemical industries
Food and beverage manufacturing
Nuclear industry
Oil and gas industries
Aquaculture and aquatic ecosystems
Cooling systems and boilers
Pharmaceuticals
Environmental monitoring for accurate conductivity measurement and process control.`
        },

    ]
    return (
        <section>
            <div className="w-full flex flex-col items-center justify-center gap-11 mt-10 md:mt-20">
                <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
                <div className="w-full max-w-4xl px-4">
                    {FaQ.map((item, index) => (
                        <details
                            key={index}
                            className="group mb-6 border rounded-2xl bg-white shadow-sm"
                            name="p"
                        >
                            <summary
                                className="flex items-center  justify-between p-4 text-base text-[#4B4858] font-semibold cursor-pointer select-none"
                            >
                                <span className=' max-w-10/12'>
                                {item.title}

                                </span>
                                <svg
                                    className="w-5 h-5  text-gray-500 transition-transform duration-300 group-open:rotate-180"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </summary>

                            <div
                                className="overflow-hidden transition-all duration-500 max-h-0 group-open:max-h-96 px-4 pb-4"
                            >
                                <p className="text-gray-700">{item.text}</p>
                            </div>
                        </details>

                    ))}
                </div>
            </div>
        </section>
    )
}

export default Faq