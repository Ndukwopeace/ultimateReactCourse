export default function Button({className, children , onClick ,buttonType}) {
    return <button type={buttonType} className={className} onClick={onClick}>
        {children}
    </button>
}