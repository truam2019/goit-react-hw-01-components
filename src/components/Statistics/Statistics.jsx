import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <div className="container">
      <section className={classNames(styles.statistics)}>
        {title && <h2 className={classNames(styles.title)}>{title}</h2>}

        <ul className={classNames(styles.stat_list)}>
          {stats.map(({ id, label, percentage }) => (
            <li className={classNames(styles.item)} key={id}>
              <span className={classNames(styles.label)}>{label}</span>
              <span className={classNames(styles.percentage)}>
                {percentage}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
