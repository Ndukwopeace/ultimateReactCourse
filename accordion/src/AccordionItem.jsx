import {useState} from "react";

export default function AccordionItem(props){
    const [isOpen , setIsOpen] = useState(false);
    const {faq,num } = props;

    function handleToggle (){
        setIsOpen(!isOpen)
    }
    return <div className={`item ${isOpen ? "open" : ''}`}>
        <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
        <p className="title">{faq.title}</p>
        <p className="icon" onClick={handleToggle}>{isOpen? '-' : '+'}</p>
        {
            isOpen && (<div className="content-box">
                {faq.text}
            </div>)
        }
    </div>
}