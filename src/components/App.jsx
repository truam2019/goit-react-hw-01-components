import user from '../path/user.json';
import UserProfile from '../components/User';

import data from '../path/data.json';
import Statistics from '../components/Statistics';

import friends from '../path/friends.json';
import FriendList from '../components/FriendList';

import transactions from '../path/transactions.json';
import TransactionHistory from '../components/TransactionHistory';

export const App = () => {
  return (
    <div
      className="container"
      style={{
        display: 'block',
        textAlign: 'center',
        marginBottom: '20px',
        color: '#010101',
      }}
    >
      <h1>Juan Urbina React Homework Components</h1>

      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
