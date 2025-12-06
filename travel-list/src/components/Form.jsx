import { useState } from "react";

const itemObject = {
  id: Date.now(),
  description: "",
  quantity: 1,
  packed: false,
};
export default function Form(props) {
  const [item, setItem] = useState(itemObject);
  const { onAddItems, items } = props;

  function handleSubmit(e) {
    e.preventDefault();
    if(!item.description) return ;
    onAddItems({...item , id: Date.now()});
    setItem(itemObject);
  }

  console.log(items.length);
  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h3>What do you need for your trip??</h3>
      <select
        value={item.quantity}
        onChange={(e) =>
          setItem({ ...item, quantity: Number(e.target.value) })
        }
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={item.description}
        placeholder="Item..."
        onChange={(e) =>
          setItem({
            ...item,
            description: e.target.value,
          })
        }
      />
      <button>Add</button>
    </form>
  );
}
