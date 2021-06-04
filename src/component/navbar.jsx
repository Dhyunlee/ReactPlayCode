import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
  render() {
    return (
      <header className='habit-header'>
        <div className='habit-header container'>
          <i className='fas fa-leaf'></i>
          <h1>Habit Tracker</h1>
          <span className='habit-count'>{this.props.totalCount}</span>
        </div>
      </header>
    );
  }
}

export default Navbar;
