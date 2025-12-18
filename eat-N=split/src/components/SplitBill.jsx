import Form from "./Form.jsx";
import Button from "./Button.jsx";
// import {useState} from "react";

export default function SplitBill({currFriendId, friendList, bill, onSetBill , onSplitBill}) {

    const friend = friendList[currFriendId];

    function handleSubmit(e) {
        e.preventDefault();
        console.log(bill.youArePaying);
        onSplitBill(bill.youArePaying === 1 ? bill.value - bill.yourExpense : (- bill.yourExpense))
    }


    return (

        <Form handleSubmit={handleSubmit} className="form-split-bill">
            <h2>Split a bill with {friend.name}</h2>

            <label><span>💰</span> Bill Value </label>
            <input type="text" value={bill.value}
                   onChange={(e) => (onSetBill({...bill, value: Number(e.target.value)}))}/>

            <label><span>🧍</span> Your expense </label>
            <input type="text" value={bill.yourExpense}
                   onChange={(e) => (onSetBill({...bill, yourExpense: Number(e.target.value) >
                       bill.value ? bill.yourExpense : Number(e.target.value)}) )}/>

            <label><span>👫🏽</span> {friend.name}'s expense </label>
            <input type="text" value={bill.value - bill.yourExpense}
                   disabled={true}/>

            <label><span>🤑</span> Who is paying </label>
            <select value={bill.youArePaying} onChange={(e) => (onSetBill({...bill, youArePaying: e.target.value}))}>
                <option value={Number(true)}> You</option>
                <option value={Number(false)}> {friend.name}</option>
            </select>
            <Button buttonType={"submit"} className="button">Split Bill</Button>
        </Form>


    )
}