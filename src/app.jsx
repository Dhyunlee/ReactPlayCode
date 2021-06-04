import './app.css';
import React, { Component } from 'react';
import Navbar from './component/navbar';
import Habits from './component/habits';

class App extends Component {
  state = {
    habits: [
      { id: '1', name: 'Reading', count: 0 },
      { id: '2', name: 'Running', count: 0 },
      { id: '3', name: 'Coding', count: 0 },
    ],
  };

  //habit 증가시키기
  handleIncrement = habit => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };

  //habit 감소시키기
  handleDecrement = habit => {
    const habits = this.state.habits.map(item => {
      const count = habit.count - 1;
      if (item.id === habit.id) {
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits });
  };

  // habit 개수 초기화
  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits });
  };

  // habit 추가하기
  handleAdd = name => {
    const habits = [
      ...this.state.habits,
      {
        id: Date.now(),
        name,
        count: 0,
      },
    ];
    this.setState({ habits });
  };

  // habit 삭제하기
  handleDelete = habit => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits });
  };

  // habit 수정하기
  handleEdit = (name, habit) => {
    console.log(name); //수정 name
    console.log(habit); // 기존 데이터

    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return { ...habit, name };
      }
      return item;
    });
    console.log(habits);
    alert('수정되었습니다.');
    this.setState({ habits });
  };

  render() {
    const totalCount = this.state.habits.filter(
      habit => habit.count > 0,
    ).length;
    return (
      <div className='app'>
        <Navbar totalCount={totalCount} />

        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
          onEdit={this.handleEdit}
        />
      </div>
    );
  }
}

export default App;
