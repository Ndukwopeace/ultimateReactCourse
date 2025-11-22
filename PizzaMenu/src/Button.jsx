export default function Button(props){
    const {name} = props ;
    return (
        <div className="btn">
            <span>{name}</span>
        </div>
    )
}