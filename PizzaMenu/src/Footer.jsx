export default function Footer() {
  const hour = new Date().getHours()
  const openHour = 4
  const closingHour = 22

  const isOpen = hour >= openHour && hour <=closingHour;
  return  <p>{ isOpen ? new Date().toLocaleDateString() + " We are currently open!!" : "We are closed"}</p>;
}