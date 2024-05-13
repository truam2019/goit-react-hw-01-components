import PropTypes from 'prop-types';
import classNames from 'classnames';

import defaultImages from '../default.jpeg';
import styles from './User.module.css';

const UserProfile = ({
  username,
  tag,
  location,
  avatar = defaultImages,
  stats,
}) => {
  const { followers, views, likes } = stats;

  return (
    <div className="container">
      <div className={classNames(styles.profile)}>
        <div className={classNames(styles.description)}>
          <img
            src={avatar}
            alt="User avatar"
            className={classNames(styles.avatar)}
          />
          <p className={classNames(styles.name)}>{username}</p>
          <p className={classNames(styles.tag)}>{tag}</p>
          <p className={classNames(styles.location)}>{location}</p>
        </div>

        <ul className={classNames(styles.stats)}>
          <li>
            <span className={classNames(styles.label)}>Followers</span>
            <span className={classNames(styles.quantity)}>{followers}</span>
          </li>
          <li>
            <span className={classNames(styles.label)}>Views</span>
            <span className={classNames(styles.quantity)}>{views}</span>
          </li>
          <li>
            <span className={classNames(styles.label)}>Likes</span>
            <span className={classNames(styles.quantity)}>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default UserProfile;
