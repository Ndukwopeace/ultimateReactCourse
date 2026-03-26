import {useState} from "react";

export default function TextExpander({children
                                         , className,
                                     expanded=false,
                                    expandButtonText="see more",
                                    collapseButtonText = "see less",
                                    collapsedNumWords = 10,
                                    buttonColor = '#1f09cd'
                                     }){

    const [isExpanded , setIsExpanded] = useState(expanded);

    function handleSetExpanded(){
        setIsExpanded((isExpanded)=>!isExpanded)
    }
    return(
        <div className={className} >
            { isExpanded? children : children.split(" ").slice(0,collapsedNumWords).join(" ") + "..."}

            <Button onExpand={handleSetExpanded} buttonColor={buttonColor}>
                {isExpanded ? collapseButtonText: expandButtonText}
            </Button>
        </div>
    )
}


function Button({children , onExpand , buttonColor}){
    const buttonStyle = {
        background: 'none',
        border: 'none',
        marginLeft: '6px',
        color:  buttonColor,
        cursor: 'pointer',
        font: 'inherit'
    }
    return (
        <button onClick={onExpand} style={buttonStyle}>{children}</button>
    )
}