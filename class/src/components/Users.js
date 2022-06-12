import { Component } from 'react';

import User from './User';
import classes from './Users.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

class Users extends Component {

  constructor() {
    super(); // Since we're using inheritance, we must always include this when have costructor()
    this.state = {
      showUsers: true,
    }; 
    // This is the only way to manage state.
    // You initilize it here first.
    // State in class-based components must always be an object.
  }

  toggleUsersHandler() {
    // this.state.showUsers = false; // NOT!
    // If want to change the state, call on a special method setState().
    // Here, must also alwaus return an object.
    // it doesn't overwrite the previous state, but will merge it.
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }

  render() {

    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

/*
const Users = () => {
  const [showUsers, setShowUsers] = useState(true);

  const toggleUsersHandler = () => {
    setShowUsers((curState) => !curState);
  };

  return (
    <div className={classes.users}>
      <button onClick={toggleUsersHandler}>
        {showUsers ? 'Hide' : 'Show'} Users
      </button>
      {showUsers && usersList}
    </div>
  );
};
*/

export default Users;
