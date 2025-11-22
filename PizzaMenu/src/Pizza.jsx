export default function Pizza(props) {
  const { photoName, name, ingredient, price, soldOut } = props;
  // if (soldOut) return null
  return (
    <div className={`pizza ${soldOut ? "sold-out" : null}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredient}</p>
        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </div>
  );
}
