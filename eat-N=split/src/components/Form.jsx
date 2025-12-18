export default function Form({className, children , handleSubmit}) {
    return (
        <form onSubmit={handleSubmit} className={className}>
            {children}
        </form>
    )
}
