import AccordionItem from "./AccordionItem.jsx";
import {faqs} from "./data.js";
import {useState} from "react";

export default function Accordion() {
    const [curOpen, setIsOpen] = useState(null);
    return (
        <div className="accordion">
            {
                faqs?.map((el, index) => <AccordionItem faq={el} num={index} key={el.title} curOpen={curOpen}
                                                        onOpen={setIsOpen}>{el.text}</AccordionItem>)
            }

        </div>
    )
}