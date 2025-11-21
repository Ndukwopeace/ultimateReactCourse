import Pizza from './Pizza'
import { pizzaData } from './data'

export default function Menu() {
  return (
    <div className="menu pizzas">
    {
        pizzaData?.map((data)=> <Pizza photoName={data.photoName} name={data.name} ingredient={data.ingredients} price={data.price} />)
        
    }
    </div>
)
}

