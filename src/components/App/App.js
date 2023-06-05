import css from 'components/App/App.module.css';

import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory'

import user from '../user.json';
import data from '../data.json';
import transactions from '../transactions.json'

function App() {

  return (
    <div className={css.app}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList />
      <TransactionHistory items={transactions} />
    </div>
  );
}
export default App;
