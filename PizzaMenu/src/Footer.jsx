import Button from "./Button";
import { Order } from "./Order";

export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closingHour = 22;
  const isOpen = hour >= openHour && hour <= closingHour;

  return (
    <div className="footer ">
      {isOpen ? (
        <Order closingHour={closingHour} />
      ) : (
        <div className="order">
          <p>
            We are Happy to recieve you between {openHour}:00 hr and {closingHour}:00 hr
          </p>
        </div>
      )}
    </div>
  );
}
