import Form from "./Form.jsx";
import Button from "./Button.jsx";
import Friend from "./Friend.jsx";
import {useState} from "react";


const friendObject = {
    name : "",
    img : "https://i.pravatar.cc/40",
    balance: 0,
}

export default function FriendList(props) {
    const [isOpen , setIsOpen] = useState(false);
    const [newFriend , setNewFriend] = useState(friendObject);
    const {currFriendId, onSetCurrFriend , friendList , onSetFriendList , bill , splitAmount} = props;

    function handleSubmit (e){
        e.preventDefault();
        onSetFriendList(newFriend);
        setNewFriend(friendObject);
    }

    return (
        <div className="sidebar">
            <ul>
                {
                    friendList?.map((friend, index) => (
                        <Friend friend={friend} friendId={index} key={index} currFriendId={currFriendId}
                                onSetCurrFriend={onSetCurrFriend} bill={bill} splitAmount={splitAmount}/>
                    ))
                }
            </ul>

            { isOpen && <Form className="form-add-friend" handleSubmit={handleSubmit}>

                <label><span>👫</span> Friend name</label>
                <input type="text" value={newFriend.name} onChange={(e)=>setNewFriend({...newFriend , name:e.target.value})}/>

                <label><span>🌄</span> Image URL</label>

                <input type="text" value={newFriend.img} onChange={(e)=>setNewFriend({...newFriend , img:e.target.value})}/>

                <Button buttonType="submit" className="button">Add</Button>

            </Form>
            }
            <Button className="button" onClick={()=>setIsOpen(!isOpen)}>{isOpen? 'close' : 'Add Friend'}</Button>
        </div>
    )
}