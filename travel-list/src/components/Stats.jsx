export default function Stats(props){
    const {items} = props ;
    const percentagePacked = ()=>{
        // get total number of items
        const totalItems = items.length;

        if (totalItems === 0 ) return 0;

        // get number of packed items
        const packedItems = items.filter((item)=> item.packed).length;
        // divide total by number of packed and multiply by 100

        const percentage = (packedItems/ totalItems) * 100

        console.log("percentage: " , percentage);
        return Math.round(percentage);

    }

    console.log(percentagePacked());
    return (
        <footer className="stats">
            {
                items.length === 0 ?
                    <em>Start adding items to your list </em>
                    :
                    <em>🧳 You have {items.length !== 1 ? items.length + " items ": items.length + " item "}
                        on your list { items.length !== 0 ? `, and you already packed ,[${percentagePacked()}%]` : ""}</em>

            }
        </footer>
    )
}