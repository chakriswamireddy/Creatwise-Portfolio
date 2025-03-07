import React, { useState } from 'react'
import PageTitle from '../shared/PageTitle'

function FAQSection() {

    const faqs = [
        {
            question: "What is your design process?",
            answer:
                "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs.",
        },
        {
            question: "What tools and software do you use for UX design?",
            answer: "I use Figma, Adobe XD, Sketch, and other design tools for creating UX designs.",
        },
        {
            question: "How do you measure the success of your UX designs?",
            answer:
                "I measure success through user testing, feedback, and analytics to understand user engagement and satisfaction.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (i) => {
        setOpenIndex(i)
    }
    return (
        <div className='my-16'>
            <PageTitle pageTitle={'Frequently asked questions'} />

            <div className="mt-8 space-y-8">
                {faqs.map((faq, index) => (
                    <div key={index} className="">
                        <button
                            className=" text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] font-[500] leading-10 tracking-0 "
                            onClick={() => toggleAccordion(index)}
                        >
                            {faq.question}
                        </button>
                        <div className={`overflow-hidden transition-[max-height] 
                                 ${openIndex === index ? "max-h-40  scale-y-100  duration-[900ms] ease-[cubic-bezier(0.23,1,0.32,1)] delay-75"
                                : "max-h-0 duration-[300ms]  scale-y-0 ease-[cubic-bezier(0.4,0,0.2,1)]"
                            }`}
                        >
                            <p className="poppins-text-medium">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default FAQSection