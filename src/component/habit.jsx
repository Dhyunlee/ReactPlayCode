import React, { Component } from 'react';

class Habit extends Component {
  state = {
    editing: false,
    name: '',
  };

  // 이벤트가 될때, 클릭한 해당 habits 을 보냄
  handleIncrement = () => {
    this.props.onIncrement(this.props.habits);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habits);
  };

  handleChange = e => {
    this.setState({
      name: e.target.value,
    });
  };

  handieEdit = () => {
    console.log('실행');
    if (this.state.editing) {
      if (this.state.name !== '') {
        this.props.onEdit(this.state.name, this.props.habits);
      }
    }

    this.setState({
      editing: !this.state.editing,
    });
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habits);
  };

  render() {
    const { name, count } = this.props.habits;
    const { editing } = this.state;

    return (
      <>
        <li>
          {editing ? (
            <>
              <input
                className='habit-edit'
                placeholder={name}
                onChange={this.handleChange}
              />
            </>
          ) : (
            <span className='habit habit-name'>{name}</span>
          )}
          <span className='habit habit-count'>{count}</span>
          <button className='habit habit-button' onClick={this.handleIncrement}>
            <i className='fas fa-plus-square'></i>
          </button>
          <button className='habit habit-button' onClick={this.handleDecrement}>
            <i className='fas fa-minus-square'></i>
          </button>
          <button className='habit habit-button' onClick={this.handieEdit}>
            <i className='fas fa-edit'></i>
          </button>
          <button className='habit habit-button' onClick={this.handleDelete}>
            <i className='fas fa-trash'></i>
          </button>
        </li>
      </>
    );
  }
}

export default Habit;
