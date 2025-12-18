import Button from "./Button.jsx";

export default function Friend(props) {
    const {friend, currFriendId, onSetCurrFriend, friendId} = props;

    let owingStatus ;

    if (friend.balance > 0 ) {
        owingStatus = `${friend.name} owes you ${Math.abs(friend.balance)}`;
    }else if (friend.balance < 0){
        owingStatus = `you owe ${friend.name} ${Math.abs(friend.balance)}`;
    }else{
        owingStatus = `you and ${friend.name} are even`;
    }


    return (
        <li className={currFriendId === friendId ? "selected" : null}>
            <img src={friend.img} alt={friend.name}/>
            <div>
                <h3>{friend.name}</h3>
                <p className={friend.balance > 0 ? "red": friend.balance < 0 ? "green" : ""}>{owingStatus}</p>
            </div>
            <Button onClick={() => onSetCurrFriend(friendId)} className="button">
                {currFriendId === friendId ? 'close' : 'select'}
            </Button>
        </li>
    )
}
