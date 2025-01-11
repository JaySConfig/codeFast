"use client";

import { useState } from "react";

const FAQListItem = ({qa}) => {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <li key={qa.question}>
                  {/* Questions */}
                  <button onClick={()=>{setIsOpen(!isOpen)}}>{qa.question}</button>

                  {/* Answer */}
                  {
                    <div className={`${isOpen ? "block" : "hidden"}`}>{qa.answer}</div>
                  }

                  
                </li>
    )
}

export default FAQListItem