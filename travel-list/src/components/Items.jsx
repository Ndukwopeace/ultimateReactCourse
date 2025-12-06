function Items(props) {
  const { item , onDeleteItem, onToggle } = props;

  return (
    <li>
        <input type="checkbox" value={item.packed} onChange={()=>onToggle(item.id)} checked={item.packed}/>
      <span style={{textDecoration: item?.packed ? "line-through" : "" }}>
        {item.quantity} {item.description}
      </span>
      <button onClick={()=>onDeleteItem(item.id)}>🗑</button>
    </li>
  );
}

export default Items;
