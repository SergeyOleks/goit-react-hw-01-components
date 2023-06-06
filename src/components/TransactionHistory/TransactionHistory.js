import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.transactionHead}>
          <th className={css.transactionTableItem}>Type</th>
          <th className={css.transactionTableItem}>Amount</th>
          <th className={css.transactionTableItem}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ amount, currency, id, type }) => {
          return (
            <tr key={id} className={css.listRows}>
              <td className={css.transactionTableItem}>{type}</td>
              <td className={css.transactionTableItem}>{amount}</td>
              <td className={css.transactionTableItem}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  avatar: PropTypes.objectOf(PropTypes.object),
};

export default TransactionHistory;
