import React, { PureComponent, createRef } from 'react';

class HabitAddForm extends PureComponent {
  formRef = createRef();
  inputRef = createRef();

  handleSubmit = e => {
    e.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.formRef.current.reset();
  };

  render() {
    return (
      <form
        className='habitAddForm container'
        ref={this.formRef}
        onSubmit={this.handleSubmit}
      >
        <input
          className='add-input'
          type='text'
          placeholder='Add Habit'
          onChange={this.handleInput}
          ref={this.inputRef}
        />
        <button className='add-btn'>Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
