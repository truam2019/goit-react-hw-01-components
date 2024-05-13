import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './FriendList.module.css';

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
     <li
          className={classNames(styles.item, { isOnline: isOnline })}
        >
        <span className={classNames(styles.status)}>
          {isOnline ? '✅' : '❌'}
        </span>

        <img
          className={classNames(styles.avatar)}
          src={avatar}
          alt="User avatar"
          width="48"
        />
        <p className={classNames(styles.name)}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }

export default FriendListItem;
