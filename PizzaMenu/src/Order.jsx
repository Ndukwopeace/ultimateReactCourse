import React from "react";
import Button from "./Button";

export const Order = (props) => {
  const { closingHour } = props;
  return (
    <div className="order">
      <p> We are open until {closingHour}:00 hr. Visit us or Order online!!</p>
      <Button name="Order now" />
    </div>
  );
};
