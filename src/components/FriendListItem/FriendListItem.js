import css from './FriendListItem.module.css'

const FriendListItem = ({ avatar, name, isOnline}) => {
    let color = isOnline ? 'green' : 'red';   
    return (
      <>
        <span className={css.status} style={{ backgroundColor: color }}></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </>

  );
};

export default FriendListItem;