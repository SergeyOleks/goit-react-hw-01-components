import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

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

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};


export default FriendListItem;