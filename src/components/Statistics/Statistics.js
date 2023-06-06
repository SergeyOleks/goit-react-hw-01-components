import { type } from '@testing-library/user-event/dist/type';
import css from './Statistics.module.css';
import PropTypes, { object } from 'prop-types';

const Statistics = ({ title = null, stats }) => {
  const data = {};
  stats.map(({ label, percentage }) =>
    !data[label]
      ? (data[label] = percentage)
      : (data[label] = data[label] + percentage)
  );

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        <li
          className={css.item}
          style={{ backgroundColor: getRandomHexColor() }}
        >
          <span className={css.label}>.docx</span>
          <span className={css.percentage}>{data['.docx']}</span>
        </li>
        <li
          className={css.item}
          style={{ backgroundColor: getRandomHexColor() }}
        >
          <span className={css.label}>.mp3</span>
          <span className={css.percentage}>{data['.mp3']}</span>
        </li>
        <li
          className={css.item}
          style={{ backgroundColor: getRandomHexColor() }}
        >
          <span className={css.label}>.pdf</span>
          <span className={css.percentage}>{data['.pdf']}</span>
        </li>
        <li
          className={css.item}
          style={{ backgroundColor: getRandomHexColor() }}
        >
          <span className={css.label}>.psd</span>
          <span className={css.percentage}>{data['.psd']}</span>
        </li>
      </ul>
    </section>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};

export default Statistics;
