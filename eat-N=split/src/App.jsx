import FriendList from "./components/FriendList.jsx";
import SplitBill from "./components/SplitBill.jsx";
import {useState} from "react";
import {friendList as friends} from "./components/data.js";

const billObject = {
    value : "",
    yourExpense: "",
    youArePaying : 1
}

function App() {
    const [currFriend, setCurrFriend] = useState(null);
    const [friendList, setFriendList] = useState(friends);
    const [bill , setBill] = useState(billObject);


    function handleSplitBill(value){
        console.log(value)
        setFriendList((friends)=> friends.map((friend , index)=>
            currFriend === index ? {...friend , balance: friend.balance + value} : friend ))

        setBill(billObject)
    }



    console.log(friendList);

    function handleSetCurrFriend(id) {
        setCurrFriend(currFriend !== id ? id : null)
    }

    function handleSetFriendList(newFriend) {
        if (newFriend.name === "") return ;
        for (const friend of friendList) {
            if (friend.name === newFriend.name) return alert(`${newFriend.name} is already on your list of friends`)
        }
        setFriendList((prevFriends) => [...prevFriends, newFriend]);
    }



    return (
        <div className="app">
            <FriendList onSetCurrFriend={handleSetCurrFriend} currFriendId={currFriend}
                        friendList={friendList}
                        onSetFriendList={handleSetFriendList}
                        bill = {bill}
            />
            {
                currFriend !== null ? <SplitBill currFriendId={currFriend} friendList={friendList} bill={bill} onSetBill={setBill} onSplitBill = {handleSplitBill}/> : null
            }
        </div>
    )
}

export default App
