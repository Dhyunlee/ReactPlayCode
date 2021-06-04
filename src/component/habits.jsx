import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddFrom';

class Habits extends Component {
  // 자식컴포넌트에서 받은 인자(habit)을
  // prop 로 받은 함수의 인자로 전달

  handleIncrement = habit => {
    this.props.onIncrement(habit);
  };

  handleDecrement = habit => {
    this.props.onDecrement(habit);
  };

  handleDelete = habit => {
    this.props.onDelete(habit);
  };
  handleAdd = name => {
    this.props.onAdd(name);
  };

  handleEdit = (name, habit) => {
    this.props.onEdit(name, habit);
  };

  render() {
    const habit = this.props.habits;
    return (
      <div>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul className={habit.length === 0 ? 'behind' : 'habits'}>
          {habit.map(habit => (
            <Habit
              key={habit.id}
              habits={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
              onEdit={this.handleEdit}
            />
          ))}
        </ul>
        <button
          className={habit.length === 0 ? 'behind' : 'habits-reset'}
          onClick={this.props.onReset}
        >
          Reset All
        </button>
      </div>
    );
  }
}

export default Habits;
