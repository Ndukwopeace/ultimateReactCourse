
export default function AccordionItem(props){
    const {faq,num ,curOpen , onOpen , children} = props;
    const isOpen = curOpen === num;


    function handleToggle (){
         onOpen(isOpen ? null : num);
    }
    return <div className={`item ${isOpen ? "open" : ''}`}>
        <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
        <p className="title">{faq.title}</p>
        <p className="icon" onClick={handleToggle}>{isOpen? '-' : '+'}</p>
        {
            isOpen && (<div className="content-box">
                {children}
            </div>)
        }
    </div>
}