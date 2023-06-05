import css from './FriendList.module.css';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import friends from '../friends.json';

const FriendList = () => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => {
        return (
          <li key={friend.id} className={css.item}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
