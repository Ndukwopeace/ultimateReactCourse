import AccordionItem from "./AccordionItem.jsx";
import {faqs} from "./data.js";

export default function Accordion(){
    return (
        <div className="accordion">
            {
                faqs?.map((el , index)=> <AccordionItem faq={el} num={index} key={el.title}/>)
            }

            </div>
    )
}