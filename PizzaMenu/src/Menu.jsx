import Pizza from "./Pizza";
import { pizzaData } from "./data";

export default function Menu() {
  return (
    <main className="menu">
      <h2>OUR MENU</h2>

      {pizzaData.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine . 6 creative dishes to choose from . All
            from our stone oven , all organic , all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData?.map((data) => (
              <Pizza
                photoName={data.photoName}
                name={data.name}
                ingredient={data.ingredients}
                price={data.price}
                soldOut={data.soldOut}
              />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu . Please come back later </p>
      )}
    </main>
  );
}
