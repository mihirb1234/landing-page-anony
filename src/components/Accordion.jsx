import { useState } from "react"

const Accordion = ({title,answer}) => {
  const [accordionOpen,setAccordionOpen]=useState(false)
    return (

    <div className="md:py-6">
        <button onClick={()=>{setAccordionOpen(!accordionOpen)}} className="flex justify-between w-full">
            <span>{title}</span>
            {/* {accordionOpen? <span>-</span>: <span>+</span>} */}
            <span>+</span>
        </button>
        <div className={`grid  overflow-hidden transition-all duration-300 ease-in-out text-slate-500 ${accordionOpen?'grid-rows-[1fr] opacity-100':'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden font-semibold">{answer}</div>
        </div>
    </div>
  )
}

export default Accordion